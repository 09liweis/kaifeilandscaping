export default function Gallery() {
  const projects = [
    "Modern Garden Oasis",
    "Classic Patio Design",
    "Waterfall Feature",
    "Contemporary Landscaping",
    "Stone Pathway",
    "Outdoor Living Space"
  ];

  return (
    <section id="gallery" className="py-20 bg-[#f8f8f8]">
      <div className="max-w-[980px] mx-auto px-6">
        <h2 className="text-5xl font-light text-[#181818] mb-4 text-center">Our Work</h2>
        <p className="text-xl text-[#666] font-light text-center mb-16 max-w-2xl mx-auto">
          Explore our portfolio of completed projects
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer overflow-hidden">
              <div className="bg-gradient-to-br from-[#2d4a3e] to-[#1a2f26] h-64 relative transition-transform group-hover:scale-105">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-xl font-light">{project}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
