import React, { useState } from 'react';
import Button from './Button';
import { ArrowRight, Heart, Star, Sparkles, MessageCircle, ShieldCheck, ClipboardCheck, Users, Bell, Sun, Activity } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Hero: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'test' | 'forum'>('chat');
  return (
    <section className="relative pt-36 pb-20 px-4 md:px-8 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-100 via-blue-200 to-blue-400/60 dark:from-slate-900 dark:via-blue-900/50 dark:to-indigo-950 transition-colors">

      {/* Background Soft Gradients - Adjusted for Blue Theme */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-300/60 dark:bg-blue-600/30 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/50 dark:bg-indigo-600/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

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
            className="inline-flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm border border-slate-200/60 dark:border-slate-700"
          >
            <ShieldCheck className="text-primary dark:text-blue-400 w-4 h-4" />
            <span className="text-sm font-semibold text-slate-600 dark:text-slate-300 tracking-tight">Ruang Aman Remaja Indonesia</span>
          </motion.div>

          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 dark:text-white leading-[1.1] tracking-tight">
              Cerita Aja, <br />
              <span className="text-primary relative inline-block">
                KitaSohib
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-yellow-400 opacity-80" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="6" fill="none" />
                </svg>
              </span>
              <br /> Siap Jadi Temanmu.
            </h1>

            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-lg mx-auto lg:mx-0 leading-relaxed font-medium">
              Validasi perasaanmu, buka potensimu dan temukan banyak pengetahuan dari KitaSohib. Tanpa judgement, 100% rahasia, dan super aman.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
            <Button onClick={() => window.open('https://kitasohib.kroombox.com/', '_blank')} className="text-base px-8 py-4 shadow-lg shadow-primary/20 rounded-2xl">
              Coba Web App Sekarang
            </Button>
            <Button variant="ghost" onClick={() => document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })} className="text-base px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700" icon={<ArrowRight size={18} />}>
              Pelajari Dulu
            </Button>
          </div>

          <div className="flex items-center justify-center lg:justify-start gap-5 text-sm text-slate-500 font-medium pt-6 border-t border-slate-200/60 mt-4">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full bg-slate-200 border-[3px] border-background dark:border-slate-900 overflow-hidden shadow-sm">
                  <img src={`https://picsum.photos/seed/sohib${i}/100/100`} alt="User" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border-[3px] border-background dark:border-slate-900 flex items-center justify-center text-xs font-bold text-primary dark:text-blue-400 shadow-sm">+100</div>
            </div>
            <div className="flex flex-col">
              <div className="flex text-yellow-400 gap-0.5 mb-0.5">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" className="stroke-none" />)}
              </div>
              <span className="text-slate-600 dark:text-slate-300 font-semibold">Telah Diakses Ratusan Remaja</span>
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
            <div className="relative w-[320px] h-[660px] bg-white dark:bg-slate-800 rounded-[2.5rem] border-[8px] border-white dark:border-slate-800 shadow-2xl shadow-slate-200/50 dark:shadow-slate-900/50 overflow-hidden ring-1 ring-slate-100 dark:ring-slate-700">

              {/* Phone Notch */}
              <div className="absolute top-0 w-full h-8 bg-white z-50 flex justify-center border-b border-slate-50">
                <div className="w-24 h-5 bg-slate-100 rounded-b-xl"></div>
              </div>

              {/* App Screen Content */}
              <div className="w-full h-full bg-[#F8FAFC] flex flex-col pt-12 px-6 pb-8 overflow-hidden relative">

                {/* Header */}
                <div className="flex justify-between items-start mb-6 shrink-0 z-10">
                  <div>
                    <h3 className="text-[17px] font-bold text-slate-800 dark:text-slate-100">Halo, johanesdarren! <span className="text-xl">👋</span></h3>
                    <p className="text-[10px] text-slate-400 font-bold tracking-wide mt-0.5 uppercase">Langkah kecil hari ini 🌾</p>
                  </div>
                  <button className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors shadow-sm bg-white dark:bg-slate-800">
                    <Bell size={18} />
                  </button>
                </div>

                {/* Dynamic App Content */}
                <div className="flex-1 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    {activeTab === 'chat' && (
                      <motion.div
                        key="chat"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="h-full flex flex-col overflow-hidden"
                      >
                        {/* Big Check-In Card */}
                        <div className="bg-gradient-to-br from-[#3872F0] to-[#5142E6] rounded-[1.5rem] p-5 shadow-lg shadow-blue-500/20 shrink-0 relative overflow-hidden flex flex-col items-center mb-4">
                          {/* Header inside card */}
                          <div className="w-full flex justify-between items-start z-10">
                            <div className="text-left">
                              <h4 className="text-white font-bold text-base mb-0.5 tracking-tight">Apa kabar hatimu?</h4>
                              <p className="text-blue-200 text-[9px] font-bold tracking-widest uppercase mb-1">Check-in Harian</p>
                            </div>
                            <div className="w-8 h-8 rounded-full border border-white/20 bg-white/10 flex items-center justify-center text-white backdrop-blur-sm">
                              <Sun size={14} />
                            </div>
                          </div>

                          {/* Illustration Character */}
                          <div className="my-3 relative z-10 flex items-center justify-center w-40 h-32 overflow-hidden isolate">
                            <img
                              src="/character-transparent.png"
                              alt="KitaSohib Character"
                              className="w-[120%] h-[120%] object-cover object-center brightness-105 contrast-125 saturate-110 drop-shadow-2xl hover:scale-105 transition-transform duration-500 max-w-none pt-4"
                            />
                          </div>

                          {/* Slider Mockup */}
                          <div className="w-full px-2 mb-6 z-10">
                            <div className="h-1.5 w-full bg-white/20 rounded-full relative">
                              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 bg-white rounded-full shadow-md"></div>
                              <div className="absolute left-0 top-0 h-full w-1/2 bg-white/40 rounded-l-full"></div>
                            </div>
                          </div>

                          {/* Action Buttons */}
                          <div className="w-full flex gap-3 z-10">
                            <button className="flex-1 bg-white/10 hover:bg-white/20 transition-colors text-white text-[10px] tracking-wide font-bold py-3 rounded-2xl border border-white/20">
                              CEK SAJA
                            </button>
                            <button className="flex-1 bg-white text-blue-600 text-[10px] tracking-wide font-bold py-3 rounded-2xl flex items-center justify-center gap-1.5 shadow-sm hover:bg-slate-50 transition-colors">
                              <ClipboardCheck size={12} /> ISI JURNAL
                            </button>
                          </div>
                        </div>

                        {/* 2 Square Cards Side by side */}
                        <div className="flex gap-4 shrink-0 mb-5">
                          <div className="flex-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm rounded-3xl p-4 flex flex-col justify-between aspect-[1/0.95]">
                            <div className="w-10 h-10 rounded-full bg-rose-50 dark:bg-rose-900/30 flex items-center justify-center text-rose-500 mb-2">
                              <Activity size={20} />
                            </div>
                            <div>
                              <h5 className="font-bold text-slate-800 dark:text-slate-100 text-[13px] leading-tight mb-1">Cek<br />Emosi</h5>
                              <p className="text-[8px] font-bold text-rose-500 uppercase tracking-wider">Tes Kesehatan</p>
                            </div>
                          </div>
                          <div className="flex-1 bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm rounded-3xl p-4 flex flex-col justify-between aspect-[1/0.95]">
                            <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-900/30 flex items-center justify-center text-teal-500 mb-2">
                              <MessageCircle size={20} />
                            </div>
                            <div>
                              <h5 className="font-bold text-slate-800 dark:text-slate-100 text-[13px] leading-tight mb-1">Sohib<br />Chat</h5>
                              <p className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">AI & Teman</p>
                            </div>
                          </div>
                        </div>

                        {/* Title near the bottom */}
                        <div className="flex justify-between items-center shrink-0 px-2 mt-auto pb-6">
                          <h4 className="font-bold text-slate-800 dark:text-slate-100 flex items-center gap-1.5 text-sm tracking-tight">Kenali Kadermu <Sparkles size={14} className="text-blue-500" /></h4>
                          <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-[9px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">Mentor Jiwa</span>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'test' && (
                      <motion.div
                        key="test"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="h-full flex flex-col gap-4 overflow-y-auto pb-4 no-scrollbar"
                      >
                        <div className="bg-gradient-to-br from-indigo-500 to-primary p-5 rounded-2xl text-white shadow-lg shadow-indigo-500/20 shrink-0">
                          <p className="text-xs font-semibold opacity-80 mb-1 uppercase tracking-wider">Hasil Tes Analisis</p>
                          <h4 className="font-bold text-xl mb-3">Tipe Kepribadianmu: INFJ</h4>
                          <p className="text-sm opacity-90 leading-relaxed">Kamu adalah seorang advokat sejati. Empatik, idealis, namun sangat terorganisir.</p>
                        </div>

                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 shrink-0">
                          <h5 className="font-bold text-slate-800 text-sm mb-3">Rekomendasi Karir</h5>
                          <div className="flex flex-wrap gap-2">
                            <span className="bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg text-xs font-semibold">Psikolog</span>
                            <span className="bg-purple-50 text-purple-600 px-3 py-1.5 rounded-lg text-xs font-semibold">Penulis</span>
                            <span className="bg-emerald-50 text-emerald-600 px-3 py-1.5 rounded-lg text-xs font-semibold">Desainer UX</span>
                          </div>
                        </div>

                        <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 shrink-0">
                          <h5 className="font-bold text-slate-800 text-sm mb-3">Regulasi Emosi</h5>
                          <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden mb-2">
                            <div className="bg-green-500 w-[75%] h-full rounded-full"></div>
                          </div>
                          <p className="text-xs text-slate-500">Tingkat kontrol emosimu cukup baik (75%). Pertahankan!</p>
                        </div>
                      </motion.div>
                    )}

                    {activeTab === 'forum' && (
                      <motion.div
                        key="forum"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="h-full flex flex-col gap-4 overflow-y-auto pb-4 no-scrollbar"
                      >
                        {/* New Post Input */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 flex gap-3 shrink-0">
                          <img src="https://picsum.photos/seed/avatar1/100/100" className="w-8 h-8 rounded-full" alt="Profile" />
                          <div className="bg-slate-50 text-slate-400 text-sm px-4 flex items-center rounded-xl flex-1">
                            Bagi ceritamu hari ini...
                          </div>
                        </div>

                        {/* Forum Post 1 */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 shrink-0">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex gap-2 items-center">
                              <div className="w-8 h-8 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-xs">M</div>
                              <div>
                                <p className="text-sm font-bold text-slate-800">Mawar Biru</p>
                                <p className="text-[10px] text-slate-400">2 jam yang lalu</p>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 mb-3">Hari ini sedikit lelah sama tugas kelompok yang nggak kelar-kelar, tapi it's okay. Besok pasti lebih baik! 💪</p>
                          <div className="flex gap-4 text-slate-400">
                            <div className="flex items-center gap-1.5 text-xs font-medium text-rose-500">
                              <Heart size={14} className="fill-rose-500" /> 24
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-medium">
                              <MessageCircle size={14} /> 5
                            </div>
                          </div>
                        </div>

                        {/* Forum Post 2 */}
                        <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-100 shrink-0">
                          <div className="flex justify-between items-start mb-2">
                            <div className="flex gap-2 items-center">
                              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-xs">A</div>
                              <div>
                                <p className="text-sm font-bold text-slate-800">Anonim123</p>
                                <p className="text-[10px] text-slate-400">5 jam yang lalu</p>
                              </div>
                            </div>
                          </div>
                          <p className="text-sm text-slate-600 mb-3">Ada yang punya tips cara ngurangin overthinking sebelum tidur nggak? Aku suka susah tidur akhir-akhir ini 🥲</p>
                          <div className="flex gap-4 text-slate-400">
                            <div className="flex items-center gap-1.5 text-xs font-medium">
                              <Heart size={14} /> 12
                            </div>
                            <div className="flex items-center gap-1.5 text-xs font-medium">
                              <MessageCircle size={14} /> 18
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom Nav Mockup */}
                <div className="h-20 bg-white dark:bg-slate-800 rounded-t-3xl shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.05)] border-t border-slate-50 dark:border-slate-700 flex items-center justify-around px-2 absolute bottom-0 left-0 w-full z-10">
                  <button onClick={() => setActiveTab('chat')} className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all ${activeTab === 'chat' ? 'text-primary dark:text-blue-400 bg-primary-50 dark:bg-slate-700' : 'text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}>
                    <MessageCircle size={26} fill={activeTab === 'chat' ? "currentColor" : "none"} />
                  </button>
                  <button onClick={() => setActiveTab('test')} className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all ${activeTab === 'test' ? 'text-primary dark:text-blue-400 bg-primary-50 dark:bg-slate-700' : 'text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}>
                    <ClipboardCheck size={26} />
                  </button>
                  <button onClick={() => setActiveTab('forum')} className={`w-14 h-14 flex items-center justify-center rounded-2xl transition-all ${activeTab === 'forum' ? 'text-primary dark:text-blue-400 bg-primary-50 dark:bg-slate-700' : 'text-slate-400 dark:text-slate-500 hover:bg-slate-50 dark:hover:bg-slate-700/50'}`}>
                    <Users size={26} />
                  </button>
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