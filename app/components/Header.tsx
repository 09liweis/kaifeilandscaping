import Link from 'next/link';
import { menus } from '../data/menuData';

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo and Company Name */}
          <Link href={'/'} className="flex items-center gap-4">
            <img
              src="/logo.png"
              alt="Kaifei Landscape Logo"
              className="h-12 w-12 object-contain"
            />
            <div>
              <h1 className="text-2xl font-bold text-[#2d4a3e] leading-tight">
                Kaifei Landscape Inc
              </h1>
              <p className="text-xs text-[#7a9085] font-light">
                Customized design within budget
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menus.map((item) =>
              item.cta ? (
                <Link
                  key={item.label}
                  href={item.href}
                  className="bg-[#2d4a3e] text-white px-6 py-2.5 text-sm font-normal hover:bg-[#1a2f26] transition-all hover:shadow-md"
                >
                  {item.label}
                </Link>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-sm font-normal text-[#3d3d3d] hover:text-[#2d4a3e] transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#2d4a3e] after:transition-all hover:after:w-full"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 text-[#3d3d3d]" aria-label="Menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <nav className="lg:hidden border-t border-gray-100 py-4 space-y-3">
          {menus.map((item) =>
            item.cta ? (
              <Link
                key={item.label}
                href={item.href}
                className="block bg-[#2d4a3e] text-white px-6 py-2.5 text-sm text-center hover:bg-[#1a2f26] transition-colors mt-4"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className="block text-sm text-[#3d3d3d] hover:text-[#2d4a3e] transition-colors py-2"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
      </div>
    </header>
  );
}
