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
    title: "Pengarahan Minat Bakat",
    desc: "Kenali potensimu lebih jauh! Kami menyediakan platform untuk mengarahkan minat dan bakatmu agar kamu bisa meraih masa depan dengan lebih mantap."
  },
  {
    icon: React.createElement(Activity, { className: "w-8 h-8 text-secondary" }),
    title: "Monitoring Emosi",
    desc: "Mood tracker harian untuk mengenali pola perasaanmu. Langkah awal memahami diri sendiri lebih dalam."
  },
  {
    icon: React.createElement(BookOpen, { className: "w-8 h-8 text-accent" }),
    title: "Kegiatan Kolaborasi",
    desc: "Ikuti berbagai kegiatan seru dan bermanfaat dari kolaborasi bersama mitra terpercaya kami, yaitu Sentra Kreasi."
  },
  {
    icon: React.createElement(CalendarCheck, { className: "w-8 h-8 text-indigo-500" }),
    title: "AI Rekomendasi Karir",
    desc: "Isi tes kepribadian unik kami dan biarkan Sohib AI memberikan rekomendasi jenjang karir terbaik khusus untukmu."
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
    title: "Akses Web & Daftar",
    desc: "Langsung akses dari web, tidak perlu download! Cuma butuh username unik, nggak perlu nama asli."
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
    question: "Apakah sistemnya gratis?",
    answer: "Yes! Fitur dasar seperti curhat ke Sohib AI, Mood Tracker, Tes Kepribadian, hingga Rekomendasi Karir itu 100% GRATIS selamanya. Semuanya bisa diakses langsung via web app."
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