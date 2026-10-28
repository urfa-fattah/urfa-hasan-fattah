import { motion } from 'framer-motion';

interface Props {
  title: string;
  subtitle: string;
}

const viewport = { once: true, margin: '-50px' };

export default function SectionHeading({ title, subtitle }: Props) {
  return (
    <div className="text-center mb-4">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.5 }}
        className="text-sm text-accent-violet font-mono tracking-wider uppercase mb-3"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={viewport}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold"
      >
        <span className="gradient-text">{title}</span>
      </motion.h2>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-accent-violet/50 to-transparent"
      />
    </div>
  );
}
