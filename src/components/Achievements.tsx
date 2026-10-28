import { motion } from 'framer-motion';
import { Trophy, Medal, Award, Code2 } from 'lucide-react';
import { achievements, type Achievement } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const viewport = { once: true, margin: '-50px' };

const iconMap: Record<Achievement['icon'], React.ReactNode> = {
  trophy: <Trophy size={24} />,
  medal: <Medal size={24} />,
  award: <Award size={24} />,
  code: <Code2 size={24} />,
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 md:py-32 section-padding">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading title="Achievements" subtitle="Recognition & competitions" />

        <div className="grid sm:grid-cols-2 gap-6 mt-16">
          {achievements.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="glass rounded-2xl p-6 md:p-7 card-hover group relative overflow-hidden"
            >
              {/* Corner glow */}
              <div
                className="absolute top-0 right-0 w-32 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                style={{
                  background: `radial-gradient(circle at 100% 0%, ${item.color}12 0%, transparent 70%)`,
                }}
              />

              <div className="relative z-10">
                <div className="flex items-start gap-4">
                  <div
                    className="p-3 rounded-xl shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: item.color + '15', color: item.color }}
                  >
                    {iconMap[item.icon]}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white leading-snug">{item.title}</h3>
                    <p className="text-sm text-white/45 mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
