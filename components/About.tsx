import React from 'react';
import { STEPS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary-100 via-secondary-100 to-accent-100 -translate-y-1/2 z-0"></div>
      <div className="absolute top-20 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl opacity-60 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-secondary font-bold tracking-wider text-sm uppercase mb-2 block">Cara Kerja</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Kesehatan Mental, <br/> Dibuat Simpel.
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Kami percaya menjaga kesehatan mental seharusnya semudah mengecek notifikasi HP. 
            Tanpa ribet, tanpa stigma.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STEPS.map((step, index) => (
            <div key={index} className="relative group">
              <div className="w-20 h-20 bg-white border-4 border-slate-50 shadow-soft rounded-2xl flex items-center justify-center text-3xl font-bold font-display text-primary mb-8 relative z-10 group-hover:scale-110 group-hover:border-primary-100 transition-all duration-300">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed text-lg">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;