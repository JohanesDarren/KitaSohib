import React from 'react';
import { motion } from 'framer-motion';

const Partners: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-8 bg-white border-y border-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-slate-400 font-semibold tracking-widest text-xs uppercase">Mitra Kami</span>
          </motion.div>

          <motion.a
            href="https://sentrakreasi.org/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center gap-6 group grayscale hover:grayscale-0 transition-all duration-500 bg-slate-50/50 p-5 md:p-6 rounded-2xl border border-transparent hover:border-primary-100 hover:bg-white hover:shadow-soft"
          >
            {/* Container Logo: Ukuran disesuaikan menjadi medium (w-20 ke w-24) */}
            <div className="w-20 h-20 md:w-24 md:h-24 bg-white rounded-xl flex items-center justify-center shadow-sm overflow-hidden border border-slate-100">
              <img
                src="https://i.imgur.com/kkViKWK.jpeg"
                alt="Sentra Kreasi Logo"
                /* Gambar Statis: Ukuran dikecilkan sedikit & efek hover scale dihapus */
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/sentra/150/150";
                }}
              />
            </div>

            <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
              {/* Tipografi: Dikecilkan sedikit ke text-2xl/3xl agar lebih elegan */}
              <span className="text-2xl md:text-3xl font-bold text-slate-800 group-hover:text-primary transition-colors tracking-tight">
                Sentra Kreasi
              </span>
              {/* Link: Kembali ke ukuran yang lebih compact */}
              <span className="text-xs md:text-sm text-slate-400 font-medium tracking-wider uppercase mt-0.5">
                sentrakreasi.org
              </span>
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Partners;