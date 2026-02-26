import React from 'react';
import { motion } from 'framer-motion';

const developers = [


  {
    name: 'Nanda Candikia',
    role: 'Hipster - UI/UX Designer',
    image: 'https://i.imgur.com/VjILWAN.jpeg'
  },
  {
    name: 'Johanes Darren Yehuda',
    role: 'Hustler - Research & Strategy',
    image: 'https://i.imgur.com/Ry1s3sD.jpeg'
  },
  {
    name: 'Amelda Chisana Mardi',
    role: 'Hacker- Front-End & AI Integration',
    image: 'https://i.imgur.com/7oIHEBV.jpeg'
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
              className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-soft hover:shadow-glow transition-all duration-300 text-center group"
            >
              <div className="relative w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary-50 dark:border-primary-900/50 group-hover:border-primary-100 dark:group-hover:border-primary-800 transition-colors">
                <img
                  src={dev.image}
                  alt={dev.name}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{dev.name}</h3>
              <p className="text-primary dark:text-primary-400 font-medium">{dev.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Developers;
