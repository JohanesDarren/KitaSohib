import React from 'react';
import Card from './Card';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4 md:px-8 bg-gradient-to-b from-blue-50/80 to-white dark:from-slate-900/90 dark:to-slate-900 relative overflow-hidden z-0 border-none">
      {/* Background Image Texture */}
      <div className="absolute inset-0 w-full h-full mix-blend-multiply dark:mix-blend-overlay opacity-5 dark:opacity-10 pointer-events-none z-[-1] [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)]">
        <img
          src="/galeri/uji coba aplikasi bersama sentra kreasi.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* Soft Blue Flow Gradient */}
      <div className="absolute inset-x-0 -top-40 h-96 bg-gradient-to-b from-blue-100/50 to-transparent dark:from-blue-900/20 w-full z-[-1] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-50 dark:bg-primary-900/30 text-primary dark:text-blue-400 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">Fitur Unggulan</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 tracking-tight">
            Toolkit Lengkap untuk <br /> Kesehatan Mentalmu
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
            Semua yang kamu butuhkan untuk merasa lebih baik, ada dalam satu aplikasi.
            Didesain khusus agar mudah digunakan kapan saja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <Card key={index} className="h-full border border-slate-100 dark:border-slate-700 shadow-soft hover:shadow-xl bg-white dark:bg-slate-800/80 group flex flex-col rounded-2xl p-8 transition-all duration-300" hoverEffect>
              <div className="mb-6 p-4 bg-primary-50 dark:bg-primary-900/30 rounded-2xl w-fit group-hover:bg-primary text-primary dark:text-blue-400 group-hover:text-white transition-colors duration-300">
                {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[15px] flex-grow">
                {feature.desc}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;