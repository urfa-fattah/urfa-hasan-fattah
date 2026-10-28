import { motion } from 'framer-motion';
import { GraduationCap, BookOpen, School } from 'lucide-react';
import { education, type EducationItem } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const viewport = { once: true, margin: '-50px' };

const typeIcon: Record<EducationItem['type'], React.ReactNode> = {
  university: <GraduationCap size={18} />,
  college: <BookOpen size={18} />,
  school: <School size={18} />,
};

const typeColor: Record<EducationItem['type'], string> = {
  university: '#8b5cf6',
  college: '#06b6d4',
  school: '#10b981',
};

export default function Education() {
  return (
    <section id="education" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Education" subtitle="Academic foundations & achievements" />

        <div className="mt-16 relative">
          {/* Vertical line */}
          <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent-violet/40 via-accent-cyan/20 to-transparent" />

          {education.map((item, i) => {
            const color = typeColor[item.type];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative flex items-start gap-4 sm:gap-6 mb-10 pl-10 sm:pl-14"
              >
                {/* Node icon badge */}
                <div
                  className="absolute left-0 sm:left-2 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center z-10 border-2 border-void shrink-0 shadow-lg"
                  style={{ backgroundColor: color + '25', color }}
                >
                  {typeIcon[item.type]}
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-5 sm:p-6 card-hover flex-1 border border-white/5 hover:border-white/10">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-xs font-mono text-white/50">{item.period}</span>
                    {item.status && (
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-mono font-medium border border-emerald-500/20">
                        {item.status}
                      </span>
                    )}
                    {item.gpa && (
                      <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-accent-violet/20 text-accent-violet font-mono font-bold border border-accent-violet/30">
                        GPA: {item.gpa}
                      </span>
                    )}
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white">{item.degree}</h4>
                  <p className="text-xs sm:text-sm text-white/60 mt-1">{item.institution}</p>

                  <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/5">
                    {item.department && (
                      <span className="text-[11px] text-white/45 bg-white/5 px-2.5 py-0.5 rounded-md font-mono">
                        Dept: {item.department}
                      </span>
                    )}
                    {item.group && (
                      <span className="text-[11px] text-white/45 bg-white/5 px-2.5 py-0.5 rounded-md font-mono">
                        Group: {item.group}
                      </span>
                    )}
                    {item.board && (
                      <span className="text-[11px] text-white/45 bg-white/5 px-2.5 py-0.5 rounded-md font-mono">
                        Board: {item.board}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
