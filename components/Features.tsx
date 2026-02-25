import React from 'react';
import Card from './Card';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="bg-primary-50 text-primary px-4 py-1.5 rounded-full text-sm font-bold tracking-wide uppercase mb-4 inline-block">Fitur Unggulan</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Toolkit Lengkap untuk <br/> Kesehatan Mentalmu
          </h2>
          <p className="text-slate-600 text-lg leading-relaxed">
            Semua yang kamu butuhkan untuk merasa lebih baik, ada dalam satu aplikasi.
            Didesain khusus agar mudah digunakan kapan saja.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <Card key={index} className="h-full border border-slate-100 shadow-soft hover:shadow-xl bg-white group flex flex-col rounded-2xl p-8 transition-all duration-300" hoverEffect>
              <div className="mb-6 p-4 bg-primary-50 rounded-2xl w-fit group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-300">
                {React.cloneElement(feature.icon as React.ReactElement<{ className?: string }>, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed text-[15px] flex-grow">
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