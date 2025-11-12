export default function Header() {
  return (
    <header className="bg-[#8B6F47] text-white">
      <div className="max-w-[980px] mx-auto px-6 py-8">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light tracking-wide">
            KAIFEI LANDSCAPING
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="hover:opacity-80 transition-opacity">Home</a>
            <a href="#services" className="hover:opacity-80 transition-opacity">Services</a>
            <a href="#gallery" className="hover:opacity-80 transition-opacity">Gallery</a>
            <a href="#about" className="hover:opacity-80 transition-opacity">About</a>
            <a href="#contact" className="hover:opacity-80 transition-opacity">Contact</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
