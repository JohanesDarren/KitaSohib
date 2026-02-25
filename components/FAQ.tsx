import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FAQS } from '../constants';
import { FAQItemData } from '../types';

const FAQItem: React.FC<FAQItemData> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-100 last:border-0">
      <motion.button 
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group bg-transparent"
      >
        <span className={`text-lg font-bold transition-colors duration-300 ${isOpen ? 'text-primary' : 'text-slate-800 group-hover:text-primary'}`}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-primary text-white' : 'bg-slate-50 text-slate-400 group-hover:bg-primary-50 group-hover:text-primary'}`}
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
            <div className="text-slate-600 leading-relaxed pr-8 pl-1 text-[15px]">
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
    <section id="faq" className="py-24 px-4 md:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block shadow-sm">Pusat Bantuan</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Sering Ditanyakan
          </h2>
          <p className="text-slate-600 text-lg">
            Tenang, kami sudah siapkan jawabannya untuk hal-hal yang bikin kamu penasaran.
          </p>
        </div>
        
        <div className="bg-white rounded-2xl p-6 md:p-10 shadow-soft border border-slate-200/60">
          {FAQS.map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>

        <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm">Masih bingung? <a href="#" className="text-primary font-bold hover:underline underline-offset-4 decoration-2">Hubungi Admin di WhatsApp</a></p>
        </div>
      </div>
    </section>
  );
};

export default FAQ;