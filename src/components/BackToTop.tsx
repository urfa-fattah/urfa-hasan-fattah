import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { useScrollTo } from '../hooks/useUtils';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={() => scrollTo('#home')}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full glass-strong border border-accent-violet/30 text-white shadow-xl shadow-void/80 hover:scale-110 hover:border-accent-cyan/60 hover:text-accent-cyan transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
          aria-label="Scroll back to top"
        >
          <ArrowUp size={18} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
