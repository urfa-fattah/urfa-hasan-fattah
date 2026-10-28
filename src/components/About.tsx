import { motion } from 'framer-motion';
import { personalInfo, interestCards } from '../data/portfolio';
import { Shield, Brain, Orbit, Code2, Download, Briefcase } from 'lucide-react';
import { useScrollTo } from '../hooks/useUtils';
import SectionHeading from './SectionHeading';

const viewport = { once: true, margin: '-50px' };

const iconMap: Record<string, React.ReactNode> = {
  shield: <Shield size={18} />,
  brain: <Brain size={18} />,
  orbit: <Orbit size={18} />,
  code: <Code2 size={18} />,
};

export default function About() {
  const scrollTo = useScrollTo();

  return (
    <section id="about" className="relative py-20 md:py-28 lg:py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" subtitle="Who I am and what drives me" />

        <div className="grid md:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-start mt-12 md:mt-16">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8 }}
            className="md:col-span-4 flex flex-col items-center gap-5"
          >
            <div className="relative group w-full max-w-[280px]">
              {/* Glow */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-br from-accent-violet/25 to-accent-cyan/15 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-void/50">
                <img
                  src={personalInfo.profileImage}
                  alt={`Portrait of ${personalInfo.name}`}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
                {/* Name overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-sm font-bold text-white">{personalInfo.name}</p>
                  <p className="text-[11px] text-white/50">CSE @ Netrokona University</p>
                </div>
              </div>
              {/* Decorative corners */}
              <div className="absolute -top-2 -left-2 w-5 h-5 border-t-2 border-l-2 border-accent-violet/50 rounded-tl-lg" />
              <div className="absolute -bottom-2 -right-2 w-5 h-5 border-b-2 border-r-2 border-accent-cyan/50 rounded-br-lg" />
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-2.5 w-full max-w-[280px]">
              {[
                { label: 'Projects', value: '16' },
                { label: 'Experience', value: '4+ yrs' },
                { label: 'BdMO Champ', value: '3×' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl py-2.5 px-2 text-center card-hover">
                  <p className="text-sm font-bold gradient-text">{stat.value}</p>
                  <p className="text-[9px] text-white/35 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* About CTAs */}
            <div className="flex flex-col gap-2 w-full max-w-[280px]">
              <button
                onClick={() => scrollTo('#contact')}
                className="btn-hire w-full justify-center text-xs py-2.5"
              >
                <Briefcase size={14} /> Hire Me
              </button>
              <a href="/resume.pdf" download className="btn-secondary w-full justify-center text-xs py-2.5">
                <Download size={14} /> Download CV
              </a>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="md:col-span-8 space-y-5"
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold leading-snug">
              Hello, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h3>

            {personalInfo.bio.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-white/50 leading-relaxed text-sm sm:text-[15px]">
                {paragraph}
              </p>
            ))}

            {/* Interests Grid */}
            <div className="pt-3">
              <p className="text-[11px] text-white/25 font-mono uppercase tracking-wider mb-3">Professional Interests</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {interestCards.map((card) => (
                  <div
                    key={card.title}
                    className="flex items-center gap-3 glass rounded-xl px-4 py-3 card-hover group"
                  >
                    <div
                      className="p-1.5 rounded-lg shrink-0 transition-colors duration-300"
                      style={{ backgroundColor: card.color + '12', color: card.color }}
                    >
                      {iconMap[card.icon] || <Code2 size={18} />}
                    </div>
                    <div className="min-w-0">
                      <span className="text-xs font-semibold text-white/70 group-hover:text-white transition-colors block truncate">
                        {card.title}
                      </span>
                      <span className="text-[10px] text-white/30 line-clamp-1 block">{card.description}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="pt-2">
              <p className="text-[11px] text-white/25 font-mono uppercase tracking-wider mb-3">Open To</p>
              <div className="flex flex-wrap gap-1.5">
                {personalInfo.availability.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-full bg-emerald-500/8 border border-emerald-500/15 text-emerald-400/80 text-[11px] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
