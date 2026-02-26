import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Code, UserSearch, Paintbrush } from 'lucide-react';

const developers = [
  {
    name: 'Nanda Candikia',
    role: 'Hipster - UI/UX Designer',
    image: 'https://i.imgur.com/VjILWAN.jpeg',
    icon: <Paintbrush className="w-8 h-8 text-yellow-300" />,
    description: 'Merancang antarmuka pengguna yang intuitif, memukau, dan memastikan setiap interaksi dengan aplikasi terasa mulus serta menyenangkan bagi sohib-sohib semua.'
  },
  {
    name: 'Johanes Darren Yehuda',
    role: 'Hustler - Research',
    image: 'https://i.imgur.com/Ry1s3sD.jpeg',
    icon: <UserSearch className="w-8 h-8 text-yellow-300" />,
    description: 'Menganalisa kebutuhan pasar remaja, menentukan arah bisnis fitur, dan meriset inovasi terbaik untuk mengembangkan jangkauan platform KitaSohib.'
  },
  {
    name: 'Amelda Chisana Mardi',
    role: 'Hacker - Front-End',
    image: 'https://i.imgur.com/7oIHEBV.jpeg',
    icon: <Code className="w-8 h-8 text-yellow-300" />,
    description: 'Membangun fungsionalitas aplikasi web, merangkai interaktivitas frontend kekinian, dan memastikan performa website KitaSohib berjalan secara lancar tanpa hambatan.'
  }
];

const Developers: React.FC = () => {
  return (
    <section id="developers" className="py-24 px-4 md:px-8 bg-sky-50/30 dark:bg-sky-900/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary dark:text-primary-400 font-bold tracking-wider text-sm uppercase mb-2 block"
          >
            Tim Kami
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6"
          >
            Profil Developer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 text-lg"
          >
            Orang-orang di balik KitaSohib yang berdedikasi untuk kesehatan mental kamu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {developers.map((dev, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group h-[380px] [perspective:1000px] cursor-pointer"
            >
              {/* Inner Flip Container */}
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl hover:shadow-2xl rounded-[2rem]">

                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-white to-blue-50/50 dark:from-slate-800 dark:to-[#0f172a] border border-blue-100 dark:border-slate-700/50 rounded-[2rem] text-center [backface-visibility:hidden] flex flex-col items-center justify-center p-8 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 dark:bg-primary-900/10 rounded-bl-full rounded-tr-[2rem]"></div>
                  <div className="relative w-36 h-36 mb-6 rounded-full overflow-hidden border-4 border-white dark:border-slate-700 shadow-md">
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-800 dark:text-white mb-2">{dev.name}</h3>
                  <span className="inline-block px-4 py-2 bg-blue-100/50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-bold rounded-full shadow-sm text-[11px] tracking-widest uppercase border border-blue-200/50 dark:border-blue-800/50">
                    {dev.role}
                  </span>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-[#3872F0] to-[#5142E6] dark:from-[#2563EB] dark:to-[#312E81] rounded-[2rem] p-8 text-center [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center text-white overflow-hidden shadow-inner">
                  {/* Decorative Light Flares */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-indigo-900/50 rounded-full blur-[40px] translate-y-1/2 -translate-x-1/4"></div>

                  <div className="w-16 h-16 mb-5 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-md border border-white/20 shadow-lg relative z-10">
                    {dev.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-3 tracking-tight relative z-10">{dev.name}</h3>
                  <p className="text-[13px] text-blue-50 leading-relaxed font-medium relative z-10">
                    {dev.description}
                  </p>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;
