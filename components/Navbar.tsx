import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* --- Bagian Logo & Teks --- */}
        <a href="#" className="flex items-center gap-4 group">
          <img
            src=""
            alt="KitaSohib Logo"
            className="h-14 md:h-18 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/kitasohib/200/80";
            }}
          />
          {/* Teks KitaSohib sekarang berwarna biru */}
          <span className="text-2xl md:text-3xl font-extrabold text-blue-600 tracking-tight group-hover:text-blue-700 transition-colors">
            KitaSohib
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-500 hover:text-blue-600 font-medium transition-colors text-[15px]"
            >
              {link.label}
            </a>
          ))}
          <Button variant="primary" className="py-2.5 px-6 text-sm rounded-xl font-semibold shadow-none hover:shadow-lg hover:shadow-blue-600/20 transition-all">
            Download App
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-slate-700 p-2 hover:bg-slate-100 rounded-xl transition-colors">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 p-6 md:hidden flex flex-col gap-4 animate-fade-in">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 font-medium p-3 hover:bg-slate-50 rounded-xl transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button fullWidth onClick={() => setIsOpen(false)}>Download App</Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;