'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { menus } from '../data/menuData';
import { COMPNAY_NAME } from '../constants/text';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const renderNavLink = (item: typeof menus[0], isMobile = false) => {
    const baseClasses = item.cta
      ? 'bg-[#2d4a3e] text-white hover:bg-[#1a2f26] transition-all hover:shadow-md'
      : 'text-[#3d3d3d] hover:text-[#2d4a3e] transition-colors';

    const desktopSpecificClasses = item.cta
      ? 'px-6 py-2.5 text-sm font-normal'
      : 'text-sm font-normal relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#2d4a3e] after:transition-all hover:after:w-full';

    const mobileSpecificClasses = item.cta
      ? 'block px-6 py-2.5 text-sm text-center mt-4'
      : 'block text-sm py-2';

    const className = `${baseClasses} ${isMobile ? mobileSpecificClasses : desktopSpecificClasses}`;

    return (
      <Link
        key={item.label}
        href={item.href}
        className={className}
        onClick={isMobile ? closeMobileMenu : undefined}
      >
        {item.label}
      </Link>
    );
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50 transition-all">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Header Bar */}
        <div className="flex items-center justify-between py-4">
          {/* Logo and Company Name */}
          <Link href="/" className="flex items-center gap-4" onClick={closeMobileMenu}>
            <Image
              src="/logo.png"
              alt="Kaifei Landscape Logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
              priority
            />
            <div>
              <h1 className="text-2xl font-bold text-[#2d4a3e] leading-tight">
                {COMPNAY_NAME}
              </h1>
              <p className="text-xs text-[#7a9085] font-light">
                Customized design within budget
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {menus.map((item) => renderNavLink(item, false))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#3d3d3d] hover:text-[#2d4a3e] transition-colors"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav
            id="mobile-menu"
            className="lg:hidden border-t border-gray-100 py-4 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200"
            aria-label="Mobile navigation"
          >
            {menus.map((item) => renderNavLink(item, true))}
          </nav>
        )}
      </div>
    </header>
  );
}
