'use client';
import { useState } from 'react';

interface MobileMenuProps {
  items: string[];
}

export const MobileMenu = ({ items }: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 focus:outline-none"
        aria-label="Toggle Menu"
      >
        <div className="flex flex-col justify-between w-6 h-5">
          <span className={`block h-0.5 w-full bg-black transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
          <span className={`block h-0.5 w-full bg-black transition duration-300 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block h-0.5 w-full bg-black transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-40`}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="text-black font-bold text-2xl hover:opacity-75 transition-opacity"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}; 