export default function Footer() {
  return (
    <footer className="bg-white border-t border-[#e5e5e5]">
      <div className="max-w-[980px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-light text-[#181818] mb-4">Kaifei Landscaping</h4>
            <p className="text-[#666] font-light leading-relaxed">
              Creating beautiful outdoor spaces for over 20 years
            </p>
          </div>
          <div>
            <h4 className="text-xl font-light text-[#181818] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-[#666] font-light">
              <li><a href="#home" className="hover:text-[#8B6F47] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#8B6F47] transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-[#8B6F47] transition-colors">Gallery</a></li>
              <li><a href="#about" className="hover:text-[#8B6F47] transition-colors">About</a></li>
              <li><a href="#contact" className="hover:text-[#8B6F47] transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-light text-[#181818] mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-[#8B6F47] flex items-center justify-center text-white hover:bg-[#784C3B] transition-colors">
                f
              </a>
              <a href="#" className="w-10 h-10 bg-[#8B6F47] flex items-center justify-center text-white hover:bg-[#784C3B] transition-colors">
                in
              </a>
              <a href="#" className="w-10 h-10 bg-[#8B6F47] flex items-center justify-center text-white hover:bg-[#784C3B] transition-colors">
                ig
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-[#e5e5e5] text-center text-[#666] font-light">
          <p>&copy; 2024 Kaifei Landscaping. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
