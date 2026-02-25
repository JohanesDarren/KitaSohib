import React from 'react';

const steps = [
  {
    num: "01",
    title: "Download & Daftar",
    desc: "Gratis di App Store & Play Store. Cuma butuh username unik, nggak perlu nama asli."
  },
  {
    num: "02",
    title: "Check-in Perasaan",
    desc: "Pilih mood kamu hari ini atau cerita langsung ke Sohib AI untuk kelegaan instan."
  },
  {
    num: "03",
    title: "Merasa Lebih Tenang",
    desc: "Dapat tips actionable, gabung komunitas, atau lanjut konseling jika butuh."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-white relative overflow-hidden">
      {/* Decorative Line */}
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-primary-100 via-secondary-100 to-accent-100 -translate-y-1/2 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="w-16 h-16 bg-white border-2 border-primary rounded-2xl flex items-center justify-center text-2xl font-bold font-display text-primary shadow-soft mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900 mb-3 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;