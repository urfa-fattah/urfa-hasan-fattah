import { motion } from 'framer-motion';
import { Code2, Shield, Layers, Zap, Star } from 'lucide-react';
import { skillCategories, aiTools } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const categoryIcons: Record<string, React.ReactNode> = {
  'Programming & Web': <Code2 size={22} />,
  'Cybersecurity & Tools': <Shield size={22} />,
  'Development Concepts': <Layers size={22} />,
};

const viewport = { once: true, margin: '-50px' };

export default function Skills() {
  const highlyComfortable = aiTools.filter((t) => t.level === 'highly-comfortable');
  const proficient = aiTools.filter((t) => t.level === 'proficient');

  return (
    <section id="skills" className="relative py-24 md:py-32 section-padding">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading title="Skills & Technologies" subtitle="What I work with" />

        {/* Technical Skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {skillCategories.map((cat, catIdx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              className="glass rounded-2xl p-6 card-hover group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="p-2.5 rounded-xl"
                  style={{ backgroundColor: cat.color + '15', color: cat.color }}
                >
                  {categoryIcons[cat.title] || <Code2 size={22} />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{cat.title}</h3>
                  <p className="text-[11px] text-white/40">{cat.description}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-300 cursor-default hover:scale-105"
                    style={{
                      borderColor: cat.color + '25',
                      color: cat.color,
                      backgroundColor: cat.color + '08',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = cat.color + '18';
                      e.currentTarget.style.borderColor = cat.color + '50';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = cat.color + '08';
                      e.currentTarget.style.borderColor = cat.color + '25';
                    }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* AI Tools & Platforms */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2.5 rounded-xl bg-accent-violet/15 text-accent-violet">
              <Zap size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">AI Tools & Productivity</h3>
              <p className="text-xs text-white/40">Platforms I use for development and research</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {/* Highly Comfortable */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Star size={14} className="text-amber-400" />
                <h4 className="text-sm font-semibold text-white/70">Highly Comfortable</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {highlyComfortable.map((tool) => (
                  <span
                    key={tool.name}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-amber-500/25 text-amber-400 bg-amber-500/8 hover:bg-amber-500/15 hover:border-amber-500/50 transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Proficient */}
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Zap size={14} className="text-blue-400" />
                <h4 className="text-sm font-semibold text-white/70">Proficient</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {proficient.map((tool) => (
                  <span
                    key={tool.name}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium border border-blue-500/25 text-blue-400 bg-blue-500/8 hover:bg-blue-500/15 hover:border-blue-500/50 transition-all duration-300 cursor-default hover:scale-105"
                  >
                    {tool.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewport}
          transition={{ delay: 0.5 }}
          className="text-center text-xs text-white/25 mt-8"
        >
          Skills and familiarity levels — not professional certifications
        </motion.p>
      </div>
    </section>
  );
}
