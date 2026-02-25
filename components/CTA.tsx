import React from 'react';
import { Apple, Play, Heart, Sparkles, Download } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-background mb-10">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-[2rem] overflow-hidden px-6 py-16 md:px-20 md:py-20 text-center shadow-2xl shadow-primary/20 bg-gradient-to-br from-[#2F5FD0] to-[#4C7DF0]">
            
          {/* Clean Overlay Pattern */}
          <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-20">
             <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 mb-8 animate-fade-in text-white">
                <Heart size={16} className="fill-white/80 text-white/80" />
                <span className="text-sm font-semibold tracking-wide">Bergabung dengan 50.000+ Remaja</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
              Siap untuk Merasa <br/> Lebih Lega?
            </h2>
            
            <p className="text-lg text-blue-50 max-w-2xl mb-10 leading-relaxed font-medium">
              Download KitaSohib sekarang. Gratis, aman, dan privasi terjaga. Temukan teman cerita kapanpun kamu butuh.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center">
               <button className="group relative bg-white text-primary px-8 py-4 rounded-xl flex items-center gap-4 transition-all hover:scale-105 hover:shadow-xl hover:shadow-black/5 active:scale-95 w-full sm:w-auto justify-center">
                  <Apple size={28} className="fill-current" />
                  <div className="text-left">
                     <span className="block text-[10px] font-bold opacity-60 uppercase tracking-wider">Download on</span>
                     <span className="block text-lg font-bold -mt-0.5">App Store</span>
                  </div>
               </button>

               <button className="group relative bg-white/10 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-xl flex items-center gap-4 transition-all hover:bg-white/20 hover:scale-105 active:scale-95 w-full sm:w-auto justify-center">
                  <Play size={28} className="fill-white" />
                  <div className="text-left">
                     <span className="block text-[10px] font-bold opacity-80 uppercase tracking-wider">Get it on</span>
                     <span className="block text-lg font-bold -mt-0.5">Google Play</span>
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