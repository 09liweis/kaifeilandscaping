export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-[980px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-[#2d4a3e] to-[#1a2f26] h-96"></div>
          <div>
            <h2 className="text-5xl font-light text-[#181818] mb-6">About Us</h2>
            <p className="text-lg text-[#666] font-light leading-relaxed mb-6">
              With over 20 years of experience in the landscaping industry, Kaifei Landscaping
              has been transforming outdoor spaces throughout the region. Our team of skilled
              professionals is dedicated to creating beautiful, sustainable landscapes that
              exceed our clients' expectations.
            </p>
            <p className="text-lg text-[#666] font-light leading-relaxed mb-6">
              We believe that every property deserves a unique landscape design that reflects
              the owner's personality and lifestyle. From initial consultation to final
              installation, we work closely with our clients to bring their vision to life.
            </p>
            <button className="bg-[#8B6F47] text-white px-8 py-4 hover:bg-[#784C3B] transition-colors">
              Learn More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
