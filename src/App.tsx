import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaPhone, FaSun, FaMoon } from 'react-icons/fa';
import '@/index.css';

/**
 * Simple type‑writer hook
 */
function useTypewriter(text: string, speed = 120) {
  const [display, setDisplay] = useState('');
  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      setDisplay((p) => p + text.charAt(i));
      i += 1;
      if (i >= text.length) clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);
  return display;
}

export default function PortfolioOnePager() {
  /* theme toggle */
  const [dark, setDark] = useState(true);
  const toggleTheme = () => setDark((d) => !d);

  /* scroll progress */
  const { scrollYProgress } = useScroll();
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const headline = useTypewriter('Application Developer @ Joker IT AG');

  /* demo projects */
  const projects = [
    {
      title: 'Task Tracker',
      desc: 'Echtzeit‑Aufgabenverwaltung mit Live‑Updates.'
    },
    {
      title: 'E‑Commerce CMS',
      desc: 'Individuelles CMS mit Zahlungsintegration.'
    },
    {
      title: 'Data Viz Dashboard',
      desc: 'Interaktive D3‑Visualisierungen.'
    },
    {
      title: 'Landing Animations',
      desc: 'Mobile‑first Landing mit Scroll‑Animationen.'
    }
  ];

  /* ---  JSX  --- */
  return (
    <div className={dark ? 'dark' : ''}>
      {/* global container */}
      <div className="relative min-h-screen overflow-x-hidden bg-gradient-to-br from-indigo-950 via-purple-950 to-black text-white font-sans dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300">
        {/* top progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-fuchsia-500 via-indigo-400 to-sky-400 origin-left z-50"
          style={{ scaleX }}
        />

        {/* theme toggle */}
        <button
          onClick={toggleTheme}
          aria-label="toggle theme"
          className="fixed right-4 top-4 z-50 rounded-full border border-white/20 backdrop-blur p-2 hover:scale-105 transition-transform"
        >
          {dark ? <FaSun /> : <FaMoon />}
        </button>

        {/* HERO */}
        <section className="flex flex-col items-center justify-center py-32 md:py-40 text-center relative px-6">
          {/* glass morph backing circle */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.1 }}
            transition={{ duration: 1.2 }}
            className="absolute -z-10 w-[35rem] h-[35rem] rounded-full bg-purple-500/40 blur-3xl"
          />

          <motion.img
            src="/profilbild.png"
            alt="Profilbild Dines Nimalthas"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
          />

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-fuchsia-400 via-indigo-400 to-sky-400 bg-clip-text text-transparent"
          >
            Dines Nimalthas
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-xl md:text-3xl font-light mt-4 min-h-[2em]"
          >
            {headline}
          </motion.h2>

          {/* contact icons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="flex flex-wrap items-center justify-center gap-6 mt-8"
          >
            <a href="mailto:dinesnimal@gmail.com" className="flex items-center gap-2 hover:text-fuchsia-400 transition-colors">
              <FaEnvelope /> <span className="hidden sm:inline">dinesnimal@gmail.com</span>
            </a>
            <a href="tel:+41768051026" className="flex items-center gap-2 hover:text-fuchsia-400 transition-colors">
              <FaPhone /> <span className="hidden sm:inline">076 805 10 26</span>
            </a>
            <a href="https://www.linkedin.com/in/dines-nimalthas-b06981230" target="_blank" rel="noopener noreferrer" className="hover:text-fuchsia-400 transition-colors">
              <FaLinkedin size={22} />
            </a>
          </motion.div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="py-28 md:py-32 px-6 backdrop-blur-md/60">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-semibold text-center mb-16"
          >
            IT‑Projekte
          </motion.h2>

          <div className="grid gap-10 sm:grid-cols-2 max-w-5xl mx-auto">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="group relative rounded-2xl p-6 bg-white/10 backdrop-blur-md ring-1 ring-white/10 hover:ring-fuchsia-400 transition-all overflow-hidden shadow-xl"
              >
                {/* animated gradient border */}
                <motion.span
                  layoutId="gradient-border"
                  className="absolute inset-px rounded-[inherit] bg-gradient-to-r from-fuchsia-600/40 via-indigo-500/40 to-sky-400/40 opacity-0 group-hover:opacity-100 transition-opacity"
                />

                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2">{p.title}</h3>
                  <p className="text-sm opacity-80 leading-relaxed">{p.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-10 text-center text-sm text-white/70">
          © {new Date().getFullYear()}DinesNimalthas
        </footer>
      </div>
    </div>
  );
}
