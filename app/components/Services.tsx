export default function Services() {
  const services = [
    {
      title: "Landscape Design",
      description: "Custom designs tailored to your vision and property needs"
    },
    {
      title: "Lawn Maintenance",
      description: "Regular care to keep your lawn healthy and beautiful"
    },
    {
      title: "Hardscaping",
      description: "Patios, walkways, and retaining walls built to last"
    },
    {
      title: "Garden Installation",
      description: "Beautiful gardens with carefully selected plants"
    },
    {
      title: "Irrigation Systems",
      description: "Efficient watering solutions for optimal plant health"
    },
    {
      title: "Seasonal Cleanup",
      description: "Prepare your landscape for every season"
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-[980px] mx-auto px-6">
        <h2 className="text-5xl font-light text-[#181818] mb-4 text-center">Our Services</h2>
        <p className="text-xl text-[#666] font-light text-center mb-16 max-w-2xl mx-auto">
          Comprehensive landscaping solutions for every need
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="bg-[#f5f5f5] h-48 mb-4 transition-all group-hover:bg-[#8B6F47]"></div>
              <h3 className="text-2xl font-light text-[#181818] mb-2 group-hover:text-[#8B6F47] transition-colors">
                {service.title}
              </h3>
              <p className="text-[#666] font-light leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
