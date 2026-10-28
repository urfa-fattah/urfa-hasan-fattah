import { Github, Linkedin, Globe, Heart, Mail } from 'lucide-react';
import { personalInfo, socialLinks, navLinks } from '../data/portfolio';
import { useScrollTo } from '../hooks/useUtils';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={16} />,
  linkedin: <Linkedin size={16} />,
  globe: <Globe size={16} />,
};

export default function Footer() {
  const scrollTo = useScrollTo();

  return (
    <footer className="relative border-t border-white/5 section-padding">
      <div className="max-w-6xl mx-auto py-12 md:py-16">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">{personalInfo.name}</h3>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              CSE Student at Netrokona University. Building web applications,
              exploring cybersecurity, and pushing boundaries.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Navigation</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm text-white/30 hover:text-white/70 transition-colors text-left focus:outline-none focus:text-accent-violet"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-white/60 uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg glass text-white/30 hover:text-white hover:border-accent-violet/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
                  aria-label={link.name}
                >
                  {iconMap[link.icon] || <Mail size={16} />}
                </a>
              ))}
            </div>
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-block text-sm text-white/30 hover:text-accent-violet transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/20 flex items-center gap-1">
            © {new Date().getFullYear()} {personalInfo.name}. Built with
            <Heart size={10} className="text-accent-violet" /> and code.
          </p>
          <button
            onClick={() => scrollTo('#home')}
            className="text-xs text-white/20 hover:text-white/50 transition-colors focus:outline-none focus:text-accent-violet"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
