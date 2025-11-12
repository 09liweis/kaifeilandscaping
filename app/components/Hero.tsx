export default function Hero() {
  return (
    <section className="relative h-[600px] bg-gradient-to-br from-[#2d4a3e] to-[#1a2f26]">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-[980px] mx-auto px-6 h-full flex flex-col justify-center">
        <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight">
          Transform Your<br />Outdoor Space
        </h1>
        <p className="text-white/90 text-xl md:text-2xl font-light max-w-2xl mb-8">
          Professional landscaping services for residential and commercial properties
        </p>
        <div className="flex gap-4">
          <button className="bg-[#8B6F47] text-white px-8 py-4 hover:bg-[#784C3B] transition-colors">
            Get a Free Quote
          </button>
          <button className="border-2 border-white text-white px-8 py-4 hover:bg-white hover:text-[#2d4a3e] transition-colors">
            View Our Work
          </button>
        </div>
      </div>
    </section>
  );
}
