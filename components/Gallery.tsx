import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';

const galleryItems = [
    { src: '/galeri/Meeting Acara Sosialisasi.jpg', title: 'Rapat untuk Acara Sosialisasi', author: 'Hustler', date: '20 Februari 2026', text: 'Diskusi panjang mengenai rancangan acara Sosialisasi.' },
    { src: '/galeri/implementasi aplikasi kepada remaja dan mitra.jpg', title: 'Uji Coba Aplikasi kepada Remaja dan Mitra', author: 'KitaSohib Team', date: '12 Feb 2026', text: 'Pengembangan fitur chat interaktif dengan menyematkan AI Gemini langsung ke antarmuka React JS.' },
    { src: '/galeri/meeting bersama sentra kreasi.jpg', title: 'Perumusan Ide Pertama', author: 'Hipster', date: '26 Des 2025', text: 'Momen berharga rapat pertama kami membentuk konsep aplikasi edukasi kesehatan mental untuk remaja.' },
    { src: '/galeri/Pelatihan Dasar Bimbingan Konseling.jpg', title: 'Pelatihan Dasar BK', author: 'KitaSohib Team', date: '22 Februari 2026', text: 'Pelatihan Dasar Bimbingan Konseling untuk pembekalan anggota Sentra Kreasi.' },
    { src: '/galeri/konsultasi dengan dosen psikolog telkom university.jpg', title: 'Konsultasi dengan Dosen Psikologi Telkom University', author: 'Hustler & Hipster', date: '4 Feb 2026', text: 'Pembimbingan terkait logika AI dan alur aplikasi dengan penyesuaian fitur-fitur yang ada bersama dosen psikologi.' },
    { src: '/galeri/pemantapan nilai-nilai aplikasi dari sisi teori psikolog.jpg', title: 'Teori Aplikasi Mental', author: 'Hustler & Hacker', date: '4 Feb 2026', text: 'Pemantapan nilai-nilai aplikasi dari sisi teori psikologi dan pendidikan.' },
    { src: '/galeri/uji coba aplikasi bersama sentra kreasi.jpg', title: 'Uji Coba Aplikasi Pertama dengan Mitra', author: 'KitaSohib Team', date: '6 Feb 2026', text: 'Mengecek kembalikesesuaian format pertanyaan pada fitur tes emosi agar berstandar validitas pengalaman pihak mitra.' },
    { src: '/galeri/Sosialisasi dan Pengesahan Aplikasi.jpg', title: 'Sosialisasi dengan Keluarga Sentra Kreasi', author: 'KitaSohib Team', date: '22 Februari 2026', text: 'Implementasi final terkait aplikasi dan penyerahan secara resmi kepada Sentra Kreasi.' },
    { src: '/galeri/implementasi alur platform kepada remaja .jpg', title: 'Testing Aplikasi ke Remaja Sesi I', author: 'Hacker & Hipster', date: '12 Feb 2026', text: 'Meninjau fungsionalitas aplikasi di setiap perangkat berbeda menjelang target tenggat waktu kompetisi.' },
    { src: '/galeri/uji coba aplikasi dengan perwakilan mitra.jpg', title: 'Testing Aplikasi ke Remaja Sesi II', author: 'Hacker & Hipster', date: '12 Feb 2026', text: 'Sesi perbaikan kolaboratif antar tim untuk membunuh beberapa error navigasi dan efek animasi lamban di halaman utama.' },
    { src: '/galeri/Rapat Pelatihan bersama Pembicara.jpg', title: 'Penyusunan Pitch Deck', author: 'Hustler', date: '20 Februari 2026', text: 'Pembuatan slide presentasi deck yang ditujukan untuk memperlihatkan potensi manfaat aplikasi pada babak final.' },
    { src: '/galeri/Kunjungan Perdana ke Sentra Kreasi.jpeg', title: 'Kunjungan Perdana ke Sentra Kreasi', author: 'KitaSohib Team', date: '4 Jan 2026', text: 'Pelaporan singkat dari tiap divisi melalui grup aplikasi obrolan mengenai tugas-tugas setiap harinya sebelum bekerja.' },
    { src: '/galeri/perancangan aplikasi lanjut bersama mitra.jpg', title: 'Perancangan Aplikasi Lanjut', author: 'Hustler & Hacker', date: '6 Feb 2026', text: 'Sesi diskusi hangat mengenai umpan balik dan keluhan masukan yang disampaikan dari mitra dan deklarasi kebutuhan aplikasi.' },
    { src: '/galeri/Meeting pertama terkait platform bersama sentra kreasi.jpeg', title: 'Standup Singkat bersama Sentra Kreasi', author: 'KitaSohib Team', date: '4 Jan 2026', text: 'Tangkapan laporan layar harian koordinasi dan pemastian tak ada tumpang tindih pengerjaan antar anggota.' },
    { src: '/galeri/uji coba aplikasi dengan dosen psikolog telkom university.jpg', title: 'Sinkronisasi Backend', author: 'Hustler & Hacker', date: '4 Feb 2026', text: 'Tahap penggabungan seluruh logika kode belakang layar dan pengerjaan ulang algoritma rekomendasi jawaban chatbot cerdas berdasar teori psikologi dan pendidikan.' }
];

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-24 px-4 md:px-8 bg-gradient-to-b from-blue-100 to-white dark:from-blue-900/40 dark:to-slate-900 border-none relative z-0">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-xl">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="bg-primary/10 text-primary dark:text-blue-400 font-bold tracking-wider text-xs uppercase mb-4 px-3 py-1.5 rounded-full inline-block"
                        >
                            Dokumentasi
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight"
                        >
                            Perjalanan KitaSohib
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="text-slate-600 dark:text-slate-400"
                        >
                            Intip momen di balik layar mulai dari brainstorm konsep hingga pengembangan baris kode terakhir.
                        </motion.p>
                    </div>
                </div>

                {/* Pinterest-like Masonry Grid */}
                <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 space-y-5">
                    {galleryItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: (index % 5) * 0.05 }}
                            className="break-inside-avoid flex flex-col group cursor-pointer"
                        >
                            <div className="relative overflow-hidden rounded-2xl mb-3 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={item.src}
                                    alt={item.title}
                                    className="w-full h-auto object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-in-out"
                                    loading="lazy"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/kitasohib${index}/400/500`;
                                    }}
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                                    <div className="text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                                        <p className="text-xs font-semibold uppercase tracking-widest">{item.author}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Text Content Pinterest-style */}
                            <div className="px-1 flex flex-col gap-1 mt-1">
                                <div className="flex justify-between items-start gap-2">
                                    <h4 className="font-bold text-[13px] text-slate-900 dark:text-slate-100 leading-tight group-hover:text-primary transition-colors flex-1">{item.title}</h4>
                                    <div className="flex items-center gap-1 shrink-0 text-slate-500 bg-slate-100 dark:bg-slate-800 rounded-md px-1.5 py-0.5 transition-colors mt-0.5">
                                        <Calendar size={10} className="text-primary opacity-80" />
                                        <span className="text-[9px] font-bold tracking-wide whitespace-nowrap">{item.date}</span>
                                    </div>
                                </div>
                                <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">{item.text}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
