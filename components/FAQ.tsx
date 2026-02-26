import React, { useState } from 'react';
import { ChevronDown, Heart, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { FAQItemData } from '../types';

const FAQItem: React.FC<FAQItemData> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 dark:border-slate-700 last:border-0">
      <motion.button
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group bg-transparent"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-primary dark:text-primary-400' : 'text-slate-800 dark:text-slate-200 group-hover:text-primary dark:group-hover:text-primary-400'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:bg-primary-50 dark:group-hover:bg-slate-700 group-hover:text-primary dark:group-hover:text-primary-400'}`}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto", marginBottom: 24 },
              collapsed: { opacity: 0, height: 0, marginBottom: 0 }
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="text-slate-600 dark:text-slate-300 leading-relaxed pr-8 pl-1 text-[15px]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-24 px-4 md:px-8 bg-gradient-to-b from-slate-50 to-blue-50/50 dark:from-slate-900 dark:to-slate-950 relative overflow-hidden z-0 border-none">
      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* FAQ Column */}
          <div className="flex flex-col">
            <div className="mb-10 lg:mb-12 text-center lg:text-left">
              <span className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block shadow-sm">Pusat Bantuan</span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight">
                Sering Ditanyakan
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-lg">
                Tenang, kami sudah siapkan jawabannya untuk hal-hal yang bikin kamu penasaran.
              </p>
            </div>

            <div className="bg-white dark:bg-slate-800/50 rounded-2xl p-6 md:p-8 shadow-soft border border-slate-200/60 dark:border-slate-700">
              {FAQS.map((faq, index) => (
                <FAQItem key={index} {...faq} />
              ))}
            </div>

            <div className="mt-8 text-center lg:text-left">
              <p className="text-slate-500 dark:text-slate-400 text-sm">Masih bingung? <a href="#" className="flex-inline items-center gap-1 text-primary dark:text-primary-400 font-bold hover:underline underline-offset-4 decoration-2">Hubungi Admin di WhatsApp</a></p>
            </div>
          </div>

          {/* CTA Column */}
          <div className="sticky top-28 relative rounded-[2.5rem] overflow-hidden px-8 py-16 md:px-12 md:py-20 text-center shadow-xl shadow-primary/20 bg-gradient-to-br from-blue-600 to-indigo-600 dark:from-blue-800 dark:to-blue-900 flex flex-col items-center justify-center min-h-[500px]">

            {/* Clean Overlay Pattern */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
              <div className="absolute top-0 right-0 w-80 h-80 bg-white rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center w-full">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-5 py-2 rounded-full border border-white/20 mb-8 max-w-max text-white shadow-sm">
                <Heart size={16} className="fill-white/80 text-white/80" />
                <span className="text-sm font-bold tracking-wide">Bergabung dengan 500+ Remaja</span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6 tracking-tight leading-tight">
                Siap untuk Merasa <br /> Lebih Lega?
              </h2>

              <p className="text-lg text-blue-50/90 mb-12 max-w-md mx-auto leading-relaxed font-medium">
                Akses KitaSohib sekarang. Gratis, aman, dan privasi terjaga. Temukan insight dirimu dan teman cerita kapan pun.
              </p>

              <button onClick={() => window.open('https://kitasohib.kroombox.com/', '_blank')} className="group relative bg-white dark:bg-slate-800 text-primary dark:text-blue-400 px-8 py-5 rounded-2xl flex items-center justify-center gap-4 transition-all hover:scale-[1.03] hover:shadow-2xl shadow-lg active:scale-95 w-full max-w-sm mx-auto border-2 border-transparent">
                <Sparkles size={28} className="text-yellow-500 flex-shrink-0" />
                <div className="text-left flex-1 min-w-0">
                  <span className="block text-[11px] font-bold opacity-60 uppercase tracking-widest text-slate-500 dark:text-slate-400 truncate">Akses via Web Browser</span>
                  <span className="block text-xl font-bold -mt-0.5 text-slate-800 dark:text-slate-100 truncate">Buka Web App</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;