import React from 'react';

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
          <ul className="space-y-3 text-slate-500 dark:text-slate-400 text-sm font-medium">
            <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Twitter / X</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-primary dark:hover:text-blue-400 transition-colors">Email Support</a></li>
          </ul>
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