export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* About Us Heading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-light text-[#C4A57B] mb-4">
            About Us
          </h2>
          <p className="text-xl text-[#666] font-light">
            Unique customized design
          </p>
        </div>
        
        {/* Description */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-base md:text-lg text-[#3d3d3d] leading-relaxed">
            With over a decade of experience in the landscaping industry, our experts always offer you high-quality services, with design ideas unique to you and your vision of dreamland
          </p>
        </div>
        
        {/* Architectural Illustration - Placeholder */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="relative w-full" style={{ paddingBottom: '75%' }}>
            {/* Placeholder architectural sketch using SVG */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden">
              <svg viewBox="0 0 800 600" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                {/* Sky/Background */}
                <rect x="0" y="0" width="800" height="400" fill="#e8e8e8" />
                
                {/* Ground/Pavement */}
                <path d="M 0 400 L 800 400 L 800 600 L 0 600 Z" fill="#d0d0d0" />
                
                {/* Pavement lines */}
                <line x1="0" y1="450" x2="800" y2="450" stroke="#a0a0a0" strokeWidth="2" />
                <line x1="0" y1="500" x2="800" y2="500" stroke="#a0a0a0" strokeWidth="2" />
                <line x1="0" y1="550" x2="800" y2="550" stroke="#a0a0a0" strokeWidth="2" />
                
                {/* Main house structure */}
                <rect x="250" y="200" width="300" height="200" fill="#8B7355" stroke="#5d4a3a" strokeWidth="2" />
                
                {/* Roof */}
                <path d="M 230 200 L 400 120 L 570 200 Z" fill="#6d5d4d" stroke="#4d3d2d" strokeWidth="2" />
                
                {/* Windows */}
                <rect x="280" y="240" width="60" height="60" fill="#6BA3C8" stroke="#4d3d2d" strokeWidth="2" />
                <rect x="370" y="240" width="60" height="60" fill="#6BA3C8" stroke="#4d3d2d" strokeWidth="2" />
                <rect x="460" y="240" width="60" height="60" fill="#6BA3C8" stroke="#4d3d2d" strokeWidth="2" />
                
                {/* Door */}
                <rect x="360" y="320" width="80" height="80" fill="#5d4a3a" stroke="#3d2a1a" strokeWidth="2" />
                
                {/* Trees on left */}
                <ellipse cx="120" cy="280" rx="40" ry="60" fill="#5a8a5a" />
                <rect x="110" y="320" width="20" height="80" fill="#6d5d4d" />
                
                {/* Trees on right */}
                <ellipse cx="680" cy="290" rx="35" ry="55" fill="#5a8a5a" />
                <rect x="672" y="320" width="16" height="80" fill="#6d5d4d" />
                
                {/* Shrubs */}
                <ellipse cx="200" cy="380" rx="30" ry="20" fill="#4a7a4a" />
                <ellipse cx="600" cy="385" rx="35" ry="25" fill="#4a7a4a" />
                
                {/* Text overlay */}
                <text x="400" y="580" textAnchor="middle" fill="#888" fontSize="14" fontFamily="sans-serif">
                  Architectural Illustration
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
