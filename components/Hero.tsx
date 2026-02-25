import React from 'react';
import Button from './Button';
import { ArrowRight, Heart, Star, Sparkles, MessageCircle, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-36 pb-20 px-4 md:px-8 min-h-screen flex items-center justify-center overflow-hidden bg-background">
      
      {/* Background Soft Gradients - Adjusted for Blue Theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-100/60 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center lg:text-left space-y-8"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-200/60"
          >
            <ShieldCheck className="text-primary w-4 h-4" />
            <span className="text-sm font-semibold text-slate-600 tracking-tight">Ruang Aman Gen Z Indonesia</span>
          </motion.div>
          
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight">
              Cerita Aja, <br/>
              <span className="text-primary relative inline-block">
                KitaSohib
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                   <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span> 
              <br/> Siap Dengerin.
            </h1>
            
            <p className="text-lg text-slate-600 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Validasi perasaanmu, ngobrol sama psikolog, atau sekadar cari semangat. Tanpa judgement, 100% rahasia, dan super aman.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <Button className="text-base px-8 py-4 shadow-lg shadow-primary/20 rounded-2xl">
              Download Aplikasi
            </Button>
            <Button variant="ghost" className="text-base px-8 py-4 bg-white border border-slate-200 rounded-2xl text-slate-700 hover:bg-slate-50" icon={<ArrowRight size={18} />}>
              Pelajari Dulu
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-5 text-sm text-slate-500 font-medium pt-6 border-t border-slate-200/60 mt-4">
            <div className="flex -space-x-3">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-[3px] border-background overflow-hidden shadow-sm">
                   <img src={`https://picsum.photos/seed/sohib${i}/100/100`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-white border-[3px] border-background flex items-center justify-center text-xs font-bold text-primary shadow-sm">+15k</div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400 gap-0.5 mb-0.5">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="stroke-none" />)}
              </div>
              <span className="text-slate-600 font-semibold">4.9/5 Rating di App Store</span>
            </div>
          </div>
        </motion.div>

        {/* Right Content - Phone Mockup (Clean & Minimalist) */}
        <div className="relative flex justify-center lg:justify-end mt-10 lg:mt-0">
           {/* Background Decorations behind phone */}
           <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
             className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-primary-50 to-purple-50 rounded-full blur-3xl -z-10"
           />
           
           <motion.div 
             initial={{ y: 50, opacity: 0 }}
             animate={{ y: 0, opacity: 1 }}
             transition={{ duration: 1, delay: 0.3, type: "spring", stiffness: 50 }}
             className="relative"
           >
               {/* Phone Frame */}
               <div className="relative w-[320px] h-[660px] bg-white rounded-[2.5rem] border-[8px] border-white shadow-2xl shadow-slate-200/50 overflow-hidden ring-1 ring-slate-100">
                  
                  {/* Phone Notch */}
                  <div className="absolute top-0 w-full h-8 bg-white z-50 flex justify-center border-b border-slate-50">
                    <div className="w-24 h-5 bg-slate-100 rounded-b-xl"></div>
                  </div>

                  {/* App Screen Content */}
                  <div className="w-full h-full bg-[#F8FAFC] flex flex-col pt-12 px-6 pb-8 overflow-hidden relative">
                    
                    {/* Header */}
                    <div className="flex justify-between items-center mb-8">
                      <div>
                        <p className="text-xs text-slate-400 font-semibold mb-1">HELLO, SOBAT!</p>
                        <h3 className="text-xl font-bold text-slate-800">Apa kabar hari ini?</h3>
                      </div>
                      <div className="w-10 h-10 rounded-full border-2 border-white shadow-sm overflow-hidden">
                        <img src="https://picsum.photos/seed/avatar1/100/100" className="w-full h-full object-cover" alt="Profile" />
                      </div>
                    </div>

                    {/* Mood Tracker Card */}
                    <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 mb-6">
                      <p className="text-sm font-semibold text-slate-700 mb-4 flex items-center gap-2">
                        <Sparkles size={14} className="text-yellow-500" /> Daily Check-in
                      </p>
                      <div className="flex justify-between gap-2">
                        {['😔', '😐', '🙂', '😄'].map((emoji, i) => (
                          <button key={i} className={`w-12 h-12 rounded-2xl flex items-center justify-center text-2xl transition-all ${i === 2 ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105' : 'bg-slate-50 text-slate-400 hover:bg-slate-100'}`}>
                            {emoji}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Chat Interface Mockup */}
                    <div className="flex-1 flex flex-col justify-end space-y-4 mb-4">
                        <div className="flex justify-center mb-2">
                          <span className="text-[10px] font-medium text-slate-400 bg-slate-100 px-3 py-1 rounded-full">Hari ini</span>
                        </div>

                        <div className="flex gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shrink-0 shadow-md text-white font-bold text-xs">
                            S
                          </div>
                          <div className="bg-white p-3.5 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 max-w-[85%]">
                             <p className="text-xs font-bold text-primary mb-1">Sohib AI</p>
                             <p className="text-sm text-slate-600 leading-relaxed">Halo! Aku lihat mood kamu lagi oke nih. Ada hal seru apa di sekolah?</p>
                          </div>
                        </div>

                        <div className="flex gap-3 flex-row-reverse">
                           <div className="bg-primary text-white p-3.5 rounded-2xl rounded-tr-none shadow-md shadow-primary/20 max-w-[85%]">
                             <p className="text-sm leading-relaxed">Lagi seneng aja kak, ulangan matematika tadi lancar! 😆</p>
                          </div>
                        </div>
                        
                        {/* Typing Indicator */}
                        <div className="flex gap-3">
                           <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shrink-0 shadow-md text-white font-bold text-xs">S</div>
                           <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100">
                             <div className="flex gap-1">
                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></div>
                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-75"></div>
                                <div className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce delay-150"></div>
                             </div>
                           </div>
                        </div>
                    </div>

                    {/* Bottom Nav Mockup */}
                    <div className="h-20 bg-white rounded-t-3xl shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)] border-t border-slate-50 flex items-center justify-between px-8 absolute bottom-0 left-0 w-full z-10">
                      <div className="text-primary"><MessageCircle size={26} fill="currentColor" className="opacity-100" /></div>
                      <div className="text-slate-300"><Heart size={26} /></div>
                      <div className="text-slate-300"><ShieldCheck size={26} /></div>
                    </div>

                  </div>
               </div>

             {/* Floating Elements - Clean Style */}
             <motion.div 
               animate={{ y: [0, 15, 0] }}
               transition={{ duration: 4, repeat: Infinity, delay: 1 }}
               className="absolute top-24 -left-12 bg-white p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 z-20"
             >
                <div className="flex items-center gap-2.5">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <div>
                    <p className="text-xs font-bold text-slate-800">Online 24 Jam</p>
                    <p className="text-[10px] text-slate-500">Siap dengerin kamu</p>
                  </div>
                </div>
             </motion.div>

           </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Hero;