import React, { useState, useEffect } from 'react';
import Button from './Button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { NAV_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <nav className={`fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${scrolled ? 'top-4 w-[95%] max-w-5xl bg-white/90 dark:bg-[#0B1120]/90 backdrop-blur-lg shadow-2xl dark:shadow-black/20 border border-slate-200 dark:border-slate-700/50 py-3 rounded-full' : 'top-6 w-[95%] max-w-5xl bg-white/80 dark:bg-[#0B1120]/80 backdrop-blur-md py-4 rounded-full border border-slate-200 dark:border-slate-800/50 shadow-lg'}`}>
      <div className="w-full px-6 flex justify-between items-center">

        {/* --- Bagian Logo & Teks --- */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/kitasohib.png"
            alt="KitaSohib Logo"
            className="h-8 md:h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105 dark:brightness-0 dark:invert"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "https://picsum.photos/seed/kitasohib/200/80";
            }}
          />
          <span className="text-xl font-bold text-slate-800 dark:text-white tracking-tight group-hover:text-primary dark:group-hover:text-slate-200 transition-colors">
            KitaSohib
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 font-medium transition-all text-sm px-5 py-2.5 rounded-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <button onClick={() => setIsDark(!isDark)} className="p-2.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-full transition-colors focus:outline-none">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => window.open('https://kitasohib.kroombox.com/', '_blank')} className="py-2.5 px-7 text-sm rounded-full font-bold bg-primary text-white dark:bg-white dark:text-slate-900 hover:bg-blue-700 dark:hover:bg-slate-200 transition-all focus:outline-none tracking-wide">
            Buka Web App
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          <button onClick={() => setIsDark(!isDark)} className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60 rounded-full transition-colors focus:outline-none">
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600 dark:text-slate-300 p-2 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white rounded-full transition-colors focus:outline-none">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute top-[120%] left-0 w-full bg-white/95 dark:bg-[#0B1120]/95 backdrop-blur-xl shadow-2xl border border-slate-200 dark:border-slate-700/50 p-6 md:hidden flex flex-col gap-3 animate-fade-in rounded-3xl">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-slate-600 dark:text-slate-300 font-medium p-3 hover:bg-slate-100 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white rounded-xl transition-colors text-center"
              >
                {link.label}
              </a>
            ))}
            <button onClick={() => { setIsOpen(false); window.open('https://kitasohib.kroombox.com/', '_blank'); }} className="py-3 px-6 mt-2 text-sm rounded-full font-bold bg-primary text-white dark:bg-white dark:text-slate-900 hover:bg-blue-700 dark:hover:bg-slate-200 transition-all w-full focus:outline-none tracking-wide">
              Buka Web App
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;