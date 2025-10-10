import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/pages' },
  { name: 'Product', href: '/featured' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-colors z-50 ${scrolled ? 'bg-[#f7f6f1] shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-5 py-4">
        <div className="text-3xl font-serif tracking-tight">
          <span className="font-bold">ART</span>
          <span>SPACE</span>
        </div>
        {/* Desktop nav */}
        <ul className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-lg transition-colors hover:text-orange-200 text-gray-500`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        {/* Mobile burger menu */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      {/* Mobile dropdown */}
      {menuOpen && (

        <ul
          className={
            `md:hidden flex flex-col items-start gap-6 px-13 pb-6 pt-3 bg-[#f7f6f1] shadow-lg rounded-xl absolute top-16 right-4 
            transform-origin-top-right transition-all duration-300 ease-in-out ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5 pointer-events-none'
            }`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className={`text-lg block text-left  transition-colors hover:text-orange-200 text-gray-500`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

