import React from 'react';
import { Instagram, Youtube, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-900 pt-20 pb-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <img
              src="/kitasohib.png"
              alt="KitaSohib Logo"
              className="h-8 md:h-10 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-slate-800 dark:text-slate-200 tracking-tight">KitaSohib</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed text-sm">
            Platform kesehatan mental #1 untuk remaja Indonesia. Kami hadir untuk mendengarkan, memvalidasi, dan menemani perjalananmu.
          </p>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-sm uppercase tracking-wider">Platform</h4>
          <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm font-medium">
            <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Fitur Utama</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Untuk Sekolah</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Harga & Paket</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Testimoni</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-slate-900 dark:text-white mb-6 text-sm uppercase tracking-wider">Connect</h4>
          <div className="flex flex-wrap gap-3">
            <a href="https://www.instagram.com/kitasohib_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-pink-100 dark:hover:bg-pink-900/30 hover:text-pink-600 dark:hover:text-pink-400 transition-colors shadow-sm">
              <Instagram size={18} />
            </a>
            <a href="https://x.com/kitasohib_" target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-black dark:hover:text-white transition-colors shadow-sm">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="opacity-90">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://youtube.com/@kitasohib?si=KBT2I7ULyEpVyBte" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-red-100 dark:hover:bg-red-900/30 hover:text-red-600 dark:hover:text-red-400 transition-colors shadow-sm">
              <Youtube size={18} />
            </a>
            <a href="https://www.tiktok.com/@kitasohib?is_from_webapp=1&sender_device=pc" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 hover:text-black dark:hover:text-white transition-colors shadow-sm">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="opacity-90">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.66-5.46-.35-3.08 1.66-6.17 4.66-7.05 1.05-.33 2.18-.4 3.27-.26V13.7c-.55-.1-1.14-.15-1.7-.04-.98.17-1.85.87-2.2 1.81-.36.91-.25 1.99.27 2.82.51.81 1.45 1.34 2.4 1.43 1.3.12 2.65-.62 3.24-1.78.36-.67.45-1.47.45-2.24.03-4.8.01-9.61.02-14.41z" />
              </svg>
            </a>
            <a href="mailto:kitasohib.bussiness@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 dark:text-slate-400 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors shadow-sm">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-400 dark:text-slate-500 text-xs font-medium gap-4">
        <p>&copy; {new Date().getFullYear()} PT Kita Sohib Indonesia. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-slate-600 dark:hover:text-slate-300 transition-colors">Syarat Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;