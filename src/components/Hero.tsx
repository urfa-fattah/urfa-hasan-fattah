import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Mail, Github, Linkedin, Globe, Download, Briefcase, Sparkles, Award } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import { useScrollTo } from '../hooks/useUtils';
import ParticleField from './three/ParticleField';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={18} />,
  linkedin: <Linkedin size={18} />,
  globe: <Globe size={18} />,
};

function useTypingEffect(words: string[], speed = 65, pause = 2200) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    const timeout = deleting ? speed / 2 : speed;

    if (!deleting && charIdx === word.length) {
      const t = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(t);
    }
    if (deleting && charIdx === 0) {
      setDeleting(false);
      setWordIdx((prev) => (prev + 1) % words.length);
      return;
    }

    const t = setTimeout(() => {
      setCharIdx((prev) => prev + (deleting ? -1 : 1));
      setDisplay(word.substring(0, charIdx + (deleting ? -1 : 1)));
    }, timeout);
    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default function Hero() {
  const scrollTo = useScrollTo();
  const typedRole = useTypingEffect(personalInfo.roles, 65, 2400);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay: 0.15 + i * 0.1, ease: 'easeOut' },
    }),
  };

  const coreTech = ['React', 'Python', 'JavaScript', 'C / C++', 'Tailwind CSS', 'Kali Linux', 'AI Workflows'];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >
      <ParticleField />

      {/* Ambient glows */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute top-[12%] left-[18%] w-[550px] h-[550px] bg-gradient-radial from-accent-violet/10 via-transparent to-transparent" />
        <div className="absolute bottom-[18%] right-[12%] w-[450px] h-[450px] bg-gradient-radial from-accent-cyan/8 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <motion.div initial="hidden" animate="visible" className="flex flex-col items-center gap-5 sm:gap-6">
          {/* Availability Badge */}
          <motion.div custom={0} variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-emerald-500/20 text-xs font-medium text-emerald-400 shadow-lg shadow-emerald-500/5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Internships & Projects
            </div>
          </motion.div>

          {/* Greeting */}
          <motion.p custom={1} variants={fadeUp} className="text-sm sm:text-base text-white/50 font-mono tracking-wide">
            WELCOME TO MY DIGITAL WORKSPACE
          </motion.p>

          {/* Name */}
          <motion.h1
            custom={2}
            variants={fadeUp}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.08]"
          >
            <span className="gradient-text text-glow">{personalInfo.name}</span>
          </motion.h1>

          {/* Typed role */}
          <motion.div custom={3} variants={fadeUp} className="h-10 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl glass border border-white/5 text-base sm:text-xl font-mono">
              <span className="text-accent-violet font-bold">{'>'}</span>
              <span className="text-white/85 font-medium">{typedRole}</span>
              <span className="text-accent-cyan animate-pulse">|</span>
            </div>
          </motion.div>

          {/* Concise Headline & Summary */}
          <motion.p
            custom={4}
            variants={fadeUp}
            className="text-sm sm:text-base md:text-lg text-white/60 max-w-2xl leading-relaxed font-light"
          >
            CSE Student at Netrokona University with <span className="text-white font-medium">4+ years</span> of
            practical website development experience. Passionate about frontend architecture,
            cybersecurity exploration, algorithmic problem solving, and the cosmos.
          </motion.p>

          {/* Core Tech Pill Strip */}
          <motion.div custom={5} variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2 max-w-2xl">
            <span className="text-xs text-white/30 font-mono mr-1 flex items-center gap-1">
              <Sparkles size={12} className="text-accent-violet" /> Core:
            </span>
            {coreTech.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.03] border border-white/10 text-white/70 hover:border-accent-violet/40 hover:text-white transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            custom={6}
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full max-w-2xl mt-1"
          >
            {[
              { value: '16', label: 'Verified Projects', sub: 'Web, Security & Tools' },
              { value: '4+', label: 'Years Experience', sub: 'Practical Development' },
              { value: '3×', label: 'BdMO Regional', sub: 'Math Olympiad Champ' },
            ].map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-4 text-center card-hover border border-white/5 hover:border-accent-violet/30"
              >
                <p className="text-2xl sm:text-3xl font-extrabold gradient-text">{s.value}</p>
                <p className="text-xs font-semibold text-white/80 mt-1">{s.label}</p>
                <p className="text-[10px] text-white/35 mt-0.5">{s.sub}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            custom={7}
            variants={fadeUp}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-2"
          >
            <button onClick={() => scrollTo('#projects')} className="btn-primary">
              <ExternalLink size={16} />
              Explore 16 Projects
            </button>
            <button onClick={() => scrollTo('#contact')} className="btn-hire">
              <Briefcase size={16} />
              Hire Me
            </button>
            <a
              href="/resume.pdf"
              download
              className="btn-secondary"
              aria-label="Download CV or Resume"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div custom={8} variants={fadeUp} className="flex items-center gap-3 mt-1">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass text-white/40 hover:text-white hover:border-accent-violet/40
                  transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
                aria-label={link.name}
              >
                {iconMap[link.icon] || <ExternalLink size={18} />}
              </a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <button
          onClick={() => scrollTo('#about')}
          className="flex flex-col items-center gap-1.5 text-white/30 hover:text-white/70 transition-colors
            focus:outline-none focus:ring-2 focus:ring-accent-violet/50 rounded-lg p-2"
          aria-label="Scroll to next section"
        >
          <span className="text-[10px] font-mono tracking-[0.25em] uppercase">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ArrowDown size={14} />
          </motion.div>
        </button>
      </motion.div>
    </section>
  );
}
