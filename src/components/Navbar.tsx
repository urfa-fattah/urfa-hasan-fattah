import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu,
  X,
  Briefcase,
  Download,
  Home,
  User,
  Layers,
  FolderGit2,
  Shield,
  GraduationCap,
  Trophy,
  Mail,
  Github,
  Linkedin,
  Globe,
  Sparkles,
  Sun,
  Moon,
} from 'lucide-react';
import { navLinks, personalInfo, socialLinks } from '../data/portfolio';
import { useActiveSection, useScrollTo } from '../hooks/useUtils';
import { useTheme } from '../hooks/useTheme';

const navIcons: Record<string, React.ReactNode> = {
  Home: <Home size={16} />,
  About: <User size={16} />,
  Skills: <Layers size={16} />,
  Projects: <FolderGit2 size={16} />,
  Security: <Shield size={16} />,
  Education: <GraduationCap size={16} />,
  Achievements: <Trophy size={16} />,
  Contact: <Mail size={16} />,
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [theme, toggleTheme] = useTheme();
  const activeSection = useActiveSection(navLinks.map((l) => l.href.replace('#', '')));
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setMobileOpen(false);
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = '';
    }
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    scrollTo(href);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Floating Island Navigation Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 md:px-8 ${
          scrolled ? 'pt-2.5 sm:pt-3' : 'pt-4 sm:pt-5'
        }`}
      >
        <div
          className={`max-w-6xl mx-auto rounded-full transition-all duration-300 border ${
            theme === 'light'
              ? scrolled
                ? 'bg-white/85 backdrop-blur-2xl border-slate-200/90 shadow-[0_12px_40px_rgba(15,23,42,0.08)] py-2 px-3.5 sm:px-5'
                : 'bg-white/75 backdrop-blur-xl border-slate-200/70 py-2.5 px-4 sm:px-6 shadow-[0_8px_24px_rgba(15,23,42,0.05)]'
              : scrolled
              ? 'bg-[#030014]/85 backdrop-blur-2xl border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.65)] py-2 px-3.5 sm:px-5'
              : 'bg-[#030014]/60 backdrop-blur-xl border-white/5 py-2.5 px-4 sm:px-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)]'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            {/* Logo + Status Indicator */}
            <button
              onClick={() => handleNavClick('#home')}
              className="relative group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-accent-violet/50 rounded-full px-1 py-0.5"
              aria-label="Fattah.dev - Return to Home"
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent-violet to-accent-cyan p-[1px] shadow-sm">
                <div className={`w-full h-full rounded-full flex items-center justify-center group-hover:bg-transparent transition-colors duration-300 ${
                  theme === 'light' ? 'bg-white' : 'bg-void'
                }`}>
                  <span className={`text-xs font-black tracking-wider ${theme === 'light' ? 'text-slate-900' : 'text-white'}`}>F</span>
                </div>
              </div>

              <div className="flex flex-col text-left">
                <span className={`text-sm font-extrabold tracking-tight transition-colors ${
                  theme === 'light' ? 'text-slate-900 group-hover:text-accent-violet' : 'text-white group-hover:text-accent-cyan'
                }`}>
                  Fattah<span className="text-accent-violet">.dev</span>
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[9px] font-mono text-emerald-500 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>
            </button>

            {/* Desktop Navigation Pills */}
            <nav
              className={`hidden lg:flex items-center gap-0.5 relative p-1 rounded-full border ${
                theme === 'light' ? 'bg-slate-100/70 border-slate-200/80' : 'bg-white/[0.02] border-white/5'
              }`}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {navLinks.map((link) => {
                const id = link.href.replace('#', '');
                const isActive = activeSection === id;
                const isHovered = hoveredLink === link.href;

                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    onMouseEnter={() => setHoveredLink(link.href)}
                    className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-violet/50 z-10 ${
                      isActive
                        ? theme === 'light'
                          ? 'text-accent-violet font-semibold'
                          : 'text-white font-semibold'
                        : theme === 'light'
                        ? 'text-slate-600 hover:text-slate-900'
                        : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {/* Active Background Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className={`absolute inset-0 rounded-full shadow-sm ${
                          theme === 'light'
                            ? 'bg-white border border-violet-200/80 shadow-[0_2px_8px_rgba(139,92,246,0.12)]'
                            : 'bg-gradient-to-r from-accent-violet/25 to-accent-cyan/20 border border-accent-violet/40'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Hover Glow Pill */}
                    {isHovered && !isActive && (
                      <motion.div
                        layoutId="hoverNavPill"
                        className={`absolute inset-0 rounded-full ${
                          theme === 'light' ? 'bg-slate-200/50' : 'bg-white/5'
                        }`}
                        transition={{ type: 'spring', stiffness: 450, damping: 35 }}
                      />
                    )}

                    <span className="relative z-10 flex items-center gap-1.5">
                      {isActive && (
                        <span className="w-1 h-1 rounded-full bg-accent-cyan shadow-[0_0_8px_#06b6d4]" />
                      )}
                      {link.label}
                    </span>
                  </button>
                );
              })}
            </nav>

            {/* Action CTA Buttons & Theme Toggle */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle Button */}
              <button
                onClick={toggleTheme}
                aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                className="p-2 rounded-full glass hover:border-accent-violet/40 text-white/80 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
                title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
              >
                <motion.div
                  key={theme}
                  initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0.8, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  {theme === 'dark' ? (
                    <Sun size={15} className="text-amber-400" />
                  ) : (
                    <Moon size={15} className="text-indigo-600" />
                  )}
                </motion.div>
              </button>

              {/* Resume Download Pill (Desktop & Tablet) */}
              <a
                href="/resume.pdf"
                download
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono font-medium text-white/70 hover:text-white glass hover:border-accent-violet/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
                title="Download CV / Resume"
              >
                <Download size={13} className="text-accent-cyan" />
                <span>CV</span>
              </a>

              {/* Hire Me CTA */}
              <button
                onClick={() => handleNavClick('#contact')}
                className="hidden sm:inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-accent-violet via-purple-600 to-accent-cyan shadow-md shadow-accent-violet/20 hover:shadow-lg hover:shadow-accent-violet/35 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
              >
                <Briefcase size={13} />
                <span>Hire Me</span>
              </button>

              {/* Mobile Hamburger Toggle Button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-full glass text-white/80 hover:text-white hover:border-accent-violet/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
                aria-label={mobileOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileOpen}
              >
                {mobileOpen ? <X size={20} className="text-accent-cyan" /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Advanced Responsive Mobile Drawer / Sheet */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Backdrop Blur Overlay */}
            <div
              className={`absolute inset-0 backdrop-blur-2xl transition-colors duration-300 ${
                theme === 'light' ? 'bg-slate-900/35' : 'bg-void/90'
              }`}
              onClick={() => setMobileOpen(false)}
            />

            {/* Drawer Container */}
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative z-10 pt-24 pb-8 px-5 sm:px-8 max-w-lg mx-auto flex flex-col justify-between min-h-screen"
            >
              {/* Menu Header Card */}
              <div className="glass-strong rounded-3xl p-5 border border-white/10 shadow-2xl mb-4">
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/5">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-mono text-white/60">Fattah.dev</span>
                  </div>

                  {/* Mobile Theme Toggle */}
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-1.5 text-[11px] font-mono px-3 py-1 rounded-full glass border border-white/10 hover:border-accent-violet/40 transition-colors"
                  >
                    {theme === 'dark' ? (
                      <>
                        <Sun size={12} className="text-amber-400" />
                        <span>Light Mode</span>
                      </>
                    ) : (
                      <>
                        <Moon size={12} className="text-indigo-600" />
                        <span>Dark Mode</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Staggered Navigation Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {navLinks.map((link) => {
                    const id = link.href.replace('#', '');
                    const isActive = activeSection === id;

                    return (
                      <button
                        key={link.href}
                        onClick={() => handleNavClick(link.href)}
                        className={`flex items-center gap-2.5 px-3.5 py-3 rounded-2xl text-xs font-medium transition-all duration-200 text-left ${
                          isActive
                            ? 'bg-gradient-to-r from-accent-violet/30 to-accent-cyan/20 text-white font-bold border border-accent-violet/40 shadow-sm'
                            : 'glass text-white/70 hover:text-white hover:bg-white/5'
                        }`}
                      >
                        <span className={isActive ? 'text-accent-cyan' : 'text-white/40'}>
                          {navIcons[link.label] || <Sparkles size={16} />}
                        </span>
                        <span>{link.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Actions Card */}
              <div className="glass-strong rounded-3xl p-5 border border-white/10 space-y-3">
                <div className="grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => handleNavClick('#contact')}
                    className="btn-hire justify-center text-xs py-3 w-full"
                  >
                    <Briefcase size={14} />
                    <span>Hire Me</span>
                  </button>

                  <a
                    href="/resume.pdf"
                    download
                    className="btn-secondary justify-center text-xs py-3 w-full"
                  >
                    <Download size={14} />
                    <span>Download CV</span>
                  </a>
                </div>

                {/* Direct contact link */}
                <div className="text-center pt-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-[11px] font-mono text-white/40 hover:text-accent-cyan transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                {/* Social Profiles Row */}
                <div className="flex items-center justify-center gap-3 pt-2 border-t border-white/5">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-xl glass text-white/50 hover:text-white hover:border-accent-violet/40 transition-colors"
                      title={s.name}
                      aria-label={s.name}
                    >
                      {s.icon === 'github' && <Github size={16} />}
                      {s.icon === 'linkedin' && <Linkedin size={16} />}
                      {s.icon === 'globe' && <Globe size={16} />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
