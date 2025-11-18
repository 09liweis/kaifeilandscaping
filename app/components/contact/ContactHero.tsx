export default function ContactHero() {
  return (
    <section className="relative h-[400px] md:h-[500px] bg-gradient-to-br from-primary to-primary-dark overflow-hidden">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="absolute inset-0 bg-black/10"></div>
      
      <div className="relative max-w-7xl mx-auto px-6 h-full flex flex-col justify-center">
        <div className="max-w-3xl">
          <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Let's Create Something Beautiful Together
          </h1>
          <p className="text-white/90 text-xl md:text-2xl font-light leading-relaxed">
            Have a project in mind? We'd love to hear from you. Our team is ready to transform your outdoor vision into reality.
          </p>
        </div>
      </div>
      
      {/* Subtle wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 48h1440V24.5C1440 24.5 1200 0 720 0S0 24.5 0 24.5V48z" fill="hsl(var(--muted))" />
        </svg>
      </div>
    </section>
  );
}
