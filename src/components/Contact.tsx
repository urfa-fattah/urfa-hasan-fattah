import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin, Globe, MapPin, CheckCircle, AlertCircle, Copy, Check, ExternalLink } from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolio';
import SectionHeading from './SectionHeading';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const viewport = { once: true, margin: '-50px' };

const iconMap: Record<string, React.ReactNode> = {
  github: <Github size={20} />,
  linkedin: <Linkedin size={20} />,
  globe: <Globe size={20} />,
};

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Generate a mailto link with pre-filled subject and body so user's message is preserved
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
      form.subject || 'Portfolio Inquiry from ' + form.name
    )}&body=${encodeURIComponent(
      `Hi Urfa,\n\nMy name: ${form.name}\nMy email: ${form.email}\n\nMessage:\n${form.message}`
    )}`;
    window.location.href = mailtoUrl;
    setStatus('success');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (status !== 'idle') setStatus('idle');
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Get in Touch" subtitle="Open for internships, projects & collaboration" />

        <div className="grid md:grid-cols-5 gap-12 mt-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-7"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="text-white/50 text-sm leading-relaxed">
                I'm open to connecting with developers, recruiters, educators, and collaborators
                interested in software engineering, educational technology, and cybersecurity-oriented projects.
              </p>
            </div>

            {/* Email Card with Copy Feature */}
            <div className="glass rounded-2xl p-4 border border-white/5 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-white/40 uppercase">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1 text-[11px] font-mono text-accent-cyan hover:underline"
                >
                  {copiedEmail ? (
                    <>
                      <Check size={12} className="text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={12} />
                      <span>Copy email</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2.5 text-white/80 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-accent-violet/10 text-accent-violet group-hover:bg-accent-violet/20 transition-colors">
                  <Mail size={16} />
                </div>
                <span className="text-xs sm:text-sm font-mono truncate">{personalInfo.email}</span>
              </a>

              <div className="flex items-center gap-2.5 text-white/50 pt-1 border-t border-white/5">
                <div className="p-2 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                  <MapPin size={16} />
                </div>
                <span className="text-xs sm:text-sm">Netrokona, Bangladesh</span>
              </div>
            </div>

            {/* Availability */}
            <div>
              <p className="text-xs text-white/40 font-mono uppercase tracking-wider mb-2.5">
                Current Availability
              </p>
              <div className="flex flex-wrap gap-1.5">
                {personalInfo.availability.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-white/40 font-mono uppercase tracking-wider mb-2.5">Profiles</p>
              <div className="flex gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl glass text-white/50 hover:text-white hover:border-accent-violet/40 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
                    aria-label={link.name}
                    title={link.name}
                  >
                    {iconMap[link.icon] || <ExternalLink size={18} />}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewport}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-strong rounded-3xl p-6 sm:p-8 space-y-4 border border-white/10">
              <div className="flex items-center justify-between pb-2 border-b border-white/5">
                <h4 className="text-base font-bold text-white">Send a Message</h4>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Active Response
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="c-name" className="block text-xs text-white/50 mb-1.5 font-medium">
                    Your Name
                  </label>
                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-white/20 focus:border-accent-violet/50 focus:outline-none focus:ring-2 focus:ring-accent-violet/20 transition-all duration-300"
                    placeholder="e.g. John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-xs text-white/50 mb-1.5 font-medium">
                    Your Email
                  </label>
                  <input
                    id="c-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-white/20 focus:border-accent-violet/50 focus:outline-none focus:ring-2 focus:ring-accent-violet/20 transition-all duration-300"
                    placeholder="you@domain.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="c-subject" className="block text-xs text-white/50 mb-1.5 font-medium">
                  Subject
                </label>
                <input
                  id="c-subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-white/20 focus:border-accent-violet/50 focus:outline-none focus:ring-2 focus:ring-accent-violet/20 transition-all duration-300"
                  placeholder="Internship / Project Opportunity / Inquiry"
                />
              </div>

              <div>
                <label htmlFor="c-message" className="block text-xs text-white/50 mb-1.5 font-medium">
                  Message
                </label>
                <textarea
                  id="c-message"
                  name="message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder-white/20 resize-none focus:border-accent-violet/50 focus:outline-none focus:ring-2 focus:ring-accent-violet/20 transition-all duration-300"
                  placeholder="Share details about the project or role..."
                />
              </div>

              {status === 'success' && (
                <div className="flex items-center gap-2 text-emerald-400 text-xs sm:text-sm bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                  <CheckCircle size={16} className="shrink-0" />
                  Your message has been drafted in your default email client. Thank you!
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="btn-primary w-full justify-center mt-2"
              >
                <Send size={15} />
                Send Message via Email
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
