export default function Header() {
  return (
    <header className="bg-[#D4C4B0] text-[#3d3d3d]">
      <div className="max-w-7xl mx-auto px-6 py-6">
        {/* Logo and Title Section */}
        <div className="flex flex-col items-center mb-4">
          {/* Logo Placeholder - Diamond Shape */}
          <img src="/logo.png" alt="Kaifei Landscape Logo" />
          
          {/* Company Name */}
          <h1 className="text-3xl md:text-4xl font-bold text-[#2d2d2d] mb-1">
            Kaifei Landscape Inc
          </h1>
          
          {/* Tagline */}
          <p className="text-sm text-[#5d5d5d] font-light">
            Best customized design within budget
          </p>
        </div>
        
        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-6 md:gap-8 pt-4 border-t border-[#c0b0a0]">
          <a href="#about" className="text-sm md:text-base hover:text-[#8B6F47] transition-colors">
            About
          </a>
          <a href="#gallery" className="text-sm md:text-base hover:text-[#8B6F47] transition-colors">
            Gallery
          </a>
          <a href="#project-location" className="text-sm md:text-base hover:text-[#8B6F47] transition-colors">
            Project Location
          </a>
          <a href="#free-quote" className="text-sm md:text-base hover:text-[#8B6F47] transition-colors">
            Free Quote
          </a>
          <a href="#contact-us" className="text-sm md:text-base hover:text-[#8B6F47] transition-colors">
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  );
}
