'use client';

import { useState } from 'react';
import Link from 'next/link';
import { galleryCategories } from '../data/galleryData';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Get a selection of featured images from different categories
  const featuredProjects = [
    {
      title: "Luxury Backyard Design",
      image: "/gallery/Backyard/1.jpg",
      category: "Backyard"
    },
    {
      title: "Modern Deck Installation",
      image: "/gallery/Deck/1.jpg", 
      category: "Deck"
    },
    {
      title: "Elegant Driveway",
      image: "/gallery/Driveway/1.jpg",
      category: "Driveway"
    },
    {
      title: "Contemporary Front Yard",
      image: "/gallery/Front/1.jpg",
      category: "Front"
    },
    {
      title: "Natural Stone Pathway",
      image: "/gallery/Natural Stone/1.jpg",
      category: "Natural Stone"
    },
    {
      title: "Beautiful Sidewalk Design",
      image: "/gallery/Sidewalk/1.jpg",
      category: "Sidewalk"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#2d4a3e] mb-4">
            Our Work
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of completed projects showcasing our expertise in landscape design, hardscaping, and garden installations
          </p>
          <div className="mt-8 flex justify-center gap-8 text-sm text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#8B6F47] rounded-full"></div>
              <span>141+ Projects</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#8B6F47] rounded-full"></div>
              <span>8 Categories</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#8B6F47] rounded-full"></div>
              <span>10+ Years Experience</span>
            </div>
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={index} 
              className="group cursor-pointer overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => setSelectedImage(project.image)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="text-[#8B6F47] text-sm font-medium mb-2 block">
                      {project.category}
                    </span>
                    <h3 className="text-white text-xl font-semibold">
                      {project.title}
                    </h3>
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Category Preview */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[#2d4a3e] mb-8 text-center">Browse by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {galleryCategories.slice(0, 8).map((category) => (
              <Link
                key={category.id}
                href="/gallery"
                className="group bg-gray-50 hover:bg-[#2d4a3e] rounded-lg p-6 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div className="text-3xl font-bold text-gray-400 group-hover:text-white mb-2">
                  {category.photos.length}
                </div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-white">
                  {category.name}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-to-r from-[#2d4a3e] to-[#1a2f26] rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Want to See More?</h3>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Browse our complete gallery with 141+ projects across 8 different categories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/gallery"
              className="inline-block bg-[#8B6F47] text-white px-8 py-4 rounded-lg hover:bg-[#784C3B] transition-all transform hover:scale-105 font-medium"
            >
              View Full Gallery
            </Link>
            <Link 
              href="/projects"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-[#2d4a3e] transition-all transform hover:scale-105 font-medium"
            >
              Project Locations
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors z-10"
              aria-label="Close image"
            >
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Project preview"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
