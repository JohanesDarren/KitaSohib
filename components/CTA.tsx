import React from 'react';
import { Apple, Play, Heart, Sparkles, Download } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-background dark:bg-transparent mb-10">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden px-6 py-16 md:px-20 md:py-20 text-center shadow-2xl shadow-primary/20 bg-gradient-to-br from-[#2F5FD0] to-[#4C7DF0] dark:from-blue-900 dark:to-blue-800">

          {/* Background Image Texture */}
          <div className="absolute inset-0 w-full h-full mix-blend-overlay opacity-20 pointer-events-none z-0">
            <img
              src="/galeri/IMG_1633.jpg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>

          {/* Clean Overlay Pattern */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-8 animate-fade-in text-white">
              <Heart size={16} className="fill-white/80 text-white/80" />
              <span className="text-sm font-semibold tracking-wide">Bergabung dengan 500+ Remaja</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Siap untuk Merasa <br /> Lebih Lega?
            </h2>

            <p className="text-lg text-blue-50 max-w-2xl mb-10 leading-relaxed font-medium">
              Akses KitaSohib sekarang via web browser. Gratis, aman, dan privasi terjaga. Temukan insight karir, pengarahan minat bakat, dan teman cerita kapanpun kamu butuh.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
              <button onClick={() => window.open('https://kitasohib.kroombox.com/', '_blank')} className="group relative bg-white dark:bg-slate-800 text-primary dark:text-blue-400 px-10 py-5 rounded-2xl flex items-center gap-4 transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/5 active:scale-95 w-full sm:w-auto justify-center">
                <Sparkles size={28} className="text-yellow-500" />
                <div className="text-left">
                  <span className="block text-[11px] font-bold opacity-60 uppercase tracking-wider text-slate-500 dark:text-slate-400">Akses Langsung via Browser</span>
                  <span className="block text-xl font-bold -mt-0.5 text-slate-800 dark:text-slate-100">Buka Web App KitaSohib</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;