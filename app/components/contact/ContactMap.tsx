'use client';

import { useEffect, useRef, useState } from 'react';

export default function ContactMap() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  
  useEffect(() => {
    // Check if mapbox-gl is available
    if (typeof window !== 'undefined' && window.mapboxgl) {
      const mapboxgl = window.mapboxgl;
      mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw'; // Public Mapbox token
      
      if (mapContainerRef.current) {
        const map = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v12',
          center: [-79.3370, 43.8561], // Markham, Ontario coordinates
          zoom: 12,
        });
        
        // Add marker
        new mapboxgl.Marker({ color: '#2d4a3e' })
          .setLngLat([-79.3370, 43.8561])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML('<h3 style="font-weight: 600; margin-bottom: 4px;">Kaifei Landscaping</h3><p style="font-size: 14px; color: #666;">Markham, Ontario</p>')
          )
          .addTo(map);
        
        map.on('load', () => {
          setMapLoaded(true);
        });
        
        return () => map.remove();
      }
    }
  }, []);
  
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
            Our Service Area
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We proudly serve Markham and surrounding areas in the Greater Toronto Area.
          </p>
        </div>
        
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-lg border border-border bg-muted">
          {!mapLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <svg className="animate-spin h-10 w-10 text-primary mx-auto mb-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <p className="text-muted-foreground">Loading map...</p>
              </div>
            </div>
          )}
          <div ref={mapContainerRef} className="w-full h-full" />
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Can't find your location? Give us a call and we'll be happy to discuss our service coverage.
          </p>
        </div>
      </div>
    </section>
  );
}

// Extend window type for mapboxgl
declare global {
  interface Window {
    mapboxgl: any;
  }
}
