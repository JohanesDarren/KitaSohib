import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">K</div>
            <span className="text-2xl font-bold text-slate-800 tracking-tight">KitaSohib</span>
          </div>
          <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
            Platform kesehatan mental #1 untuk remaja Indonesia. Kami hadir untuk mendengarkan, memvalidasi, dan menemani perjalananmu.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Platform</h4>
          <ul className="space-y-3 text-slate-500 text-sm font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">Fitur Utama</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Untuk Sekolah</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Harga & Paket</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Testimoni</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">Connect</h4>
          <ul className="space-y-3 text-slate-500 text-sm font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Twitter / X</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">TikTok</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Email Support</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-8 pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-slate-400 text-xs font-medium gap-4">
        <p>&copy; {new Date().getFullYear()} PT Kita Sohib Indonesia. All rights reserved.</p>
        <div className="flex gap-8">
            <a href="#" className="hover:text-slate-600 transition-colors">Kebijakan Privasi</a>
            <a href="#" className="hover:text-slate-600 transition-colors">Syarat Ketentuan</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;