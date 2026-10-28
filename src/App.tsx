import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import CyberSection from './components/CyberSection';
import Education from './components/Education';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import BackToTop from './components/BackToTop';

export default function App() {
  // Ensure the user always starts strictly at the Hero section upon entering the website
  useEffect(() => {
    // If there is no specific hash target, always start at the top
    if (!window.location.hash || window.location.hash === '#home') {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="relative min-h-screen transition-colors duration-300 selection:bg-accent-violet/30 selection:text-white">
      {/* Top thin gradient scroll progress indicator */}
      <ScrollProgress />

      {/* Atmospheric ambient lighting */}
      <div className="ambient-glow" />

      {/* Navigation bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <CyberSection />
        <Education />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Back To Top button */}
      <BackToTop />
    </div>
  );
}
