import React from 'react'; // Needed for JSX in features
import { 
  Users, 
  MessageCircleHeart, 
  Activity, 
  BookOpen, 
  CalendarCheck, 
  ShieldCheck 
} from 'lucide-react';
import { NavLink, Feature, Step, FAQItemData } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: "Fitur", href: "#features" },
  { label: "Cara Kerja", href: "#about" },
  { label: "Tim", href: "#developers" },
  { label: "FAQ", href: "#faq" },
];

export const FEATURES: Feature[] = [
  {
    icon: React.createElement(Users, { className: "w-8 h-8 text-primary" }),
    title: "Forum Rasa",
    desc: "Ruang aman komunitas untuk berbagi cerita tanpa takut dihakimi. Temukan teman sebaya yang mengerti perasaanmu."
  },
  {
    icon: React.createElement(MessageCircleHeart, { className: "w-8 h-8 text-pink-500" }),
    title: "Chat dengan Psikolog",
    desc: "Akses konseling profesional langsung dari HP. Ngobrol via chat atau video call dengan psikolog remaja berlisensi."
  },
  {
    icon: React.createElement(Activity, { className: "w-8 h-8 text-secondary" }),
    title: "Monitoring Emosi",
    desc: "Mood tracker harian untuk mengenali pola perasaanmu. Langkah awal memahami diri sendiri lebih dalam."
  },
  {
    icon: React.createElement(BookOpen, { className: "w-8 h-8 text-accent" }),
    title: "Pojok Wawasan",
    desc: "Kumpulan artikel, tips, dan video psikoedukasi yang relate dengan kehidupan remaja. Bukan sekadar teori membosankan."
  },
  {
    icon: React.createElement(CalendarCheck, { className: "w-8 h-8 text-indigo-500" }),
    title: "Agenda Kesehatan Mental",
    desc: "Fitur daily challenge dan reminder untuk self-care. Bangun kebiasaan positif kecil setiap harinya."
  },
  {
    icon: React.createElement(ShieldCheck, { className: "w-8 h-8 text-emerald-500" }),
    title: "Privasi Prioritas",
    desc: "Semua datamu terenkripsi. Gunakan nama samaran dan avatar unik untuk menjaga identitasmu tetap rahasia."
  }
];

export const STEPS: Step[] = [
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
  },
];

export const FAQS: FAQItemData[] = [
  {
    question: "Apakah data saya aman?",
    answer: "Aman banget! Privasi kamu adalah prioritas nomor satu di KitaSohib. Semua obrolan terenkripsi dan kamu bisa menggunakan fitur anonim (nama samaran). Kami tidak akan membagikan datamu ke pihak ketiga tanpa izinmu."
  },
  {
    question: "Apakah aplikasinya gratis?",
    answer: "Yes! Fitur dasar seperti curhat ke Sohib AI, Mood Tracker, dan Forum Komunitas itu 100% GRATIS selamanya. Untuk sesi konseling mendalam dengan psikolog profesional, ada biaya terjangkau khusus kantong pelajar."
  },
  {
    question: "Siapa yang bisa menggunakan KitaSohib?",
    answer: "Aplikasi ini didesain spesial untuk remaja dan Gen Z (usia 13-24 tahun). Namun, siapa pun yang membutuhkan teman cerita atau ruang aman untuk kesehatan mental boleh bergabung. Kader sekolah dan guru BK juga bisa ikut serta."
  },
  {
    question: "Apakah bisa chat psikolog langsung?",
    answer: "Bisa dong! Kamu bisa booking sesi chat atau video call dengan psikolog mitra kami yang ramah dan paham masalah remaja. Jadwalnya fleksibel, bisa kamu atur sesuai waktu luangmu sepulang sekolah atau kuliah."
  }
];