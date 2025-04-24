import React, { useEffect, useState } from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

// Typewriter effect hook
function useTypewriter(text: string, speed = 120) {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    let index = 0;
    const iv = setInterval(() => {
      setDisplay(prev => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);
  return display;
}

export default function PortfolioOnePager() {
  const { scrollYProgress } = useViewportScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const headline = useTypewriter('Application Developer @ Joker IT AG');

  const projects = [
    { title: 'Task Tracker', desc: 'Echtzeit-Aufgabenverwaltung mit Live-Updates.' },
    { title: 'E-Commerce CMS', desc: 'Individuelles CMS mit Zahlungsintegration.' },
    { title: 'Data Viz Dashboard', desc: 'Interaktive D3.js-Visualisierungen.' },
    { title: 'Landing Animations', desc: 'Mobile-first Landing mit Scroll-Animationen.' }
  ];

  return (
    <div className="relative overflow-x-hidden bg-gray-900 text-white">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 origin-left"
        style={{ scaleX }}
      />
      {/* Animated BG */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-purple-800 via-indigo-900 to-black"
        animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        style={{ backgroundSize: '200% 200%' }}
      />

      {/* Hero & Contact */}
      <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.img
          src="/profilbild.png"
          alt="Profilbild Dines Nimalthas"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="w-40 h-40 rounded-full mb-6 border-4 border-white shadow-lg"
        />
        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl font-extrabold mb-2"
        >
          Dines Nimalthas
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-2xl md:text-3xl font-light mb-6 min-h-[2em]"
        >
          {headline}
        </motion.h2>
        <motion.div
          className="flex items-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <a href="mailto:dinesnimal@gmail.com" className="flex items-center gap-2 hover:text-indigo-400">
            <FaEnvelope /> dinesnimal@gmail.com
          </a>
          <a href="tel:+41768051026" className="flex items-center gap-2 hover:text-indigo-400">
            <FaPhone /> 076 805 10 26
          </a>
          <a href="https://www.linkedin.com/in/dines-nimalthas-b06981230/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400">
            <FaLinkedin />
          </a>
        </motion.div>
      </section>

      {/* Objective & Qualifications */}
      <section id="objective" className="py-20 px-6 bg-gray-800">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl font-semibold text-center mb-6">
          Zielsetzung
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
          Motivierter, lernbereiter Informatiker in Ausbildung mit Leidenschaft für IT und Motorrad. Strebe eine Position an, in der ich meine Fähigkeiten weiterentwickeln und einen positiven Beitrag in einem dynamischen Umfeld leisten kann.
        </motion.p>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.8 }} className="max-w-3xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
          {[
            { lang: 'Deutsch', level: 'Muttersprache' },
            { lang: 'Tamil', level: 'Muttersprache' },
            { lang: 'English', level: 'C1' },
            { lang: 'Français', level: 'Grundlagen' }
          ].map(({ lang, level }) => (
            <div key={lang} className="p-4 bg-gray-700 rounded-xl">
              <h4 className="text-xl font-medium">{lang}</h4>
              <p className="mt-1">{level}</p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Experience */}
      <section id="experience" className="py-20 px-6">
        <motion.h2 initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl font-semibold text-center mb-12">
          Erfahrung
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Joker IT AG */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gray-800 p-6 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold">Application Developer @ Joker IT AG</h3>
            <p className="italic text-gray-400">August 2024 – Jetzt</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Mitverantwortung für Entwicklung und Wartung von Softwarelösungen.</li>
              <li>Prozessautomatisierung und Datenbankverwaltung.</li>
              <li>Automatisierte Deployment-Skripte mit PowerShell.</li>
              <li>Integration von Bettercollab-Tools für Team-Collaboration.</li>
            </ul>
          </motion.div>
          {/* McDonald's */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gray-800 p-6 rounded-2xl shadow-2xl">
            <h3 className="text-2xl font-bold">Crew Mitarbeiter @ McDonald's</h3>
            <p className="italic text-gray-400">August 2023 – Jetzt</p>
            <ul className="list-disc list-inside mt-4 space-y-2">
              <li>Kundenbetreuung und reibungsloser Ablauf der Schicht.</li>
              <li>Sicherstellung von Qualitäts- und Hygienestandards.</li>
              <li>Arbeiten in einem schnelllebigen, teamorientierten Umfeld.</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-20 px-6 bg-gray-800">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-4xl font-semibold text-center mb-12">
          IT-Projekte
        </motion.h2>
        <div className="max-w-6xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map(proj => (
            <motion.div key={proj.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-gray-700 rounded-2xl p-6 shadow-2xl">
              <h4 className="text-2xl font-bold mb-2">{proj.title}</h4>
              <p>{proj.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education & Certification */}
      <section id="education" className="py-20 px-6">
        <motion.h2 initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl font-semibold text-center mb-12">
          Ausbildung & Zertifikate
        </motion.h2>
        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gray-800 p-6 rounded-2xl shadow-2xl">
            <h4 className="text-2xl font-bold">Berufsmaturität FMZ Luzern</h4>
            <p className="italic text-gray-400">Juni 2025 – Schwerpunkt Wirtschaft & Recht</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="bg-gray-800 p-6 rounded-2xl shadow-2xl">
            <h4 className="text-2xl font-bold">Cambridge Certificate in Advanced English</h4>
            <p className="italic text-gray-400">7. Dezember 2024 – Score: 185 (Grade C, CEFR C1)</p>
          </motion.div>
        </div>
      </section>

      {/* Other Activities */}
      <section id="activities" className="py-20 px-6 bg-gray-800">
        <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-4xl font-semibold text-center mb-6">
          Weitere Tätigkeiten
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.8 }} className="max-w-3xl mx-auto text-lg leading-relaxed text-center">
          Schiedsrichter beim Schweizer Fussballverband (SFV)
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center bg-gray-900">
        <p className="text-sm text-gray-500">© {new Date().getFullYear()} Dines Nimalthas. All rights reserved.</p>
      </footer>
    </div>
  );
}
