'use client';

import { useEffect, useRef, useState } from 'react';
import { projects, Project } from '@/app/data/projectsData';
import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2FtbGl3ZWlzZW4iLCJhIjoiY20wdnhrMXh4MWtnazJqcGxpcDltcWxqNyJ9.QmJN1v3QJN_QE1cxPfk-Uw';

export default function ProjectLocationPage() {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<any | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    if (!mapContainer.current || map.current) return;

    let mounted = true;

    (async () => {
      const mapboxglModule = await import('mapbox-gl');
      const mapboxgl = mapboxglModule.default ?? mapboxglModule;
      // load CSS dynamically to ensure styles are present on client

      mapboxgl.accessToken = MAPBOX_TOKEN;

      if (!mounted || !mapContainer.current) return;

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v12',
        center: [-79.3832, 43.6532],
        zoom: 10,
      });

      map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

      projects.forEach((project) => {
        const el = document.createElement('div');
        el.className = 'custom-marker';
        el.style.backgroundImage = 'url(/logo.png)';
        el.style.width = '40px';
        el.style.height = '40px';
        el.style.backgroundSize = 'cover';
        el.style.borderRadius = '50%';
        el.style.cursor = 'pointer';
        el.style.border = '3px solid #2d4a3e';
        el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.3)';

        const marker = new mapboxgl.Marker(el)
          .setLngLat([project.lng, project.lat])
          .addTo(map.current);

        el.addEventListener('click', () => {
          setSelectedProject(project);
          map.current?.flyTo({
            center: [project.lng, project.lat],
            zoom: 14,
            duration: 1500,
          });
        });

        const popup = new mapboxgl.Popup({
          offset: 25,
          closeButton: false,
        }).setHTML(`
          <div style="padding: 8px; min-width: 200px;">
            <h3 style="margin: 0 0 4px 0; font-weight: 600; color: #2d4a3e;">${project.name}</h3>
            <p style="margin: 0; font-size: 12px; color: #666;">${project.address}</p>
          </div>
        `);

        marker.getElement().addEventListener('mouseenter', () => {
          popup.addTo(map.current);
          marker.setPopup(popup);
        });

        marker.getElement().addEventListener('mouseleave', () => {
          popup.remove();
        });
      });
    })();

    return () => {
      mounted = false;
      map.current?.remove();
    };
  }, []);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d4a3e] mb-4">
            Project Locations
          </h2>
          <p className="text-lg text-gray-600">
            Explore our completed landscaping projects across Toronto and the GTA
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div
              ref={mapContainer}
              className="w-full h-[600px] rounded-lg shadow-lg"
            />
          </div>

          <div className="space-y-4 overflow-y-auto max-h-[600px] pr-2">
            {projects.map((project) => (
              <div
                key={project.id}
                onClick={() => {
                  setSelectedProject(project);
                  map.current?.flyTo({
                    center: [project.lng, project.lat],
                    zoom: 14,
                    duration: 1500,
                  });
                }}
                className={`cursor-pointer rounded-lg overflow-hidden shadow-md transition-all hover:shadow-xl ${
                  selectedProject?.id === project.id
                    ? 'ring-2 ring-[#2d4a3e]'
                    : ''
                }`}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4 bg-white">
                  <h3 className="font-semibold text-lg text-[#2d4a3e] mb-1">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">{project.address}</p>
                  <p className="text-sm text-gray-500">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {selectedProject && (
          <div className="mt-12 bg-gray-50 rounded-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <img
                src={selectedProject.image}
                alt={selectedProject.name}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div>
                <h3 className="text-3xl font-bold text-[#2d4a3e] mb-4">
                  {selectedProject.name}
                </h3>
                <p className="text-lg text-gray-600 mb-4">
                  <svg
                    className="w-5 h-5 inline mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  {selectedProject.address}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
