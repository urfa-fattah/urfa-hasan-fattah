import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal as TerminalIcon, Shield, Wifi, Server, Play, Copy, Check, RotateCcw } from 'lucide-react';
import { terminalCommands } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const viewport = { once: true, margin: '-50px' };

function TerminalSimulator() {
  const [history, setHistory] = useState<Array<{ input: string; output: string }>>([
    {
      input: '',
      output: `┌────────────────────────────────────────────────────────┐
│  Urfa Hasan Fattah — CyberSec & Linux Interactive Shell │
│  Type 'help' or click any quick command below.         │
└────────────────────────────────────────────────────────┘`,
    },
  ]);
  const [input, setInput] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const isFirstRender = useRef(true);

  // Scroll ONLY the internal container and only when user interacts (not on page load)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  const runCommand = (rawCmd: string) => {
    const cmd = rawCmd.trim().toLowerCase();
    if (!cmd) return;

    if (cmd === 'clear') {
      setHistory([]);
      setInput('');
      return;
    }

    const output =
      terminalCommands[cmd] ||
      `Command not recognized: '${cmd}'\nType 'help' or click a command shortcut above to view options.`;
    setHistory((prev) => [...prev, { input: cmd, output }]);
    setInput('');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runCommand(input);
  };

  const quickCommands = ['whoami', 'skills', 'projects', 'education', 'contact', 'help', 'clear'];

  const copyTerminalText = () => {
    const fullText = history
      .map((h) => (h.input ? `$ ${h.input}\n${h.output}` : h.output))
      .join('\n\n');
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="glass-strong rounded-2xl overflow-hidden max-w-3xl mx-auto border border-white/10 shadow-2xl shadow-void/80">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.03]">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/70 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/70 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/70 inline-block" />
          </div>
          <span className="text-xs text-white/40 terminal-text font-medium ml-2">
            fattah@parrot-sec:~ (simulated sandbox)
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => runCommand('clear')}
            title="Reset Terminal"
            className="p-1.5 rounded-md hover:bg-white/10 text-white/40 hover:text-white transition-colors text-xs flex items-center gap-1"
          >
            <RotateCcw size={12} />
            <span className="text-[11px] hidden sm:inline">Reset</span>
          </button>
          <button
            onClick={copyTerminalText}
            title="Copy Terminal History"
            className="p-1.5 rounded-md hover:bg-white/10 text-white/40 hover:text-white transition-colors text-xs flex items-center gap-1"
          >
            {copied ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
            <span className="text-[11px] hidden sm:inline">{copied ? 'Copied!' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Quick command buttons */}
      <div className="px-4 py-2.5 bg-black/40 border-b border-white/5 flex flex-wrap items-center gap-1.5 text-xs">
        <span className="text-white/30 text-[11px] font-mono mr-1 flex items-center gap-1">
          <Play size={10} className="text-accent-cyan" /> Shortcuts:
        </span>
        {quickCommands.map((cmd) => (
          <button
            key={cmd}
            onClick={() => runCommand(cmd)}
            className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-accent-violet/20 hover:text-accent-cyan text-white/60 text-[11px] font-mono border border-white/5 hover:border-accent-violet/30 transition-all duration-200"
          >
            {cmd}
          </button>
        ))}
      </div>

      {/* Terminal body */}
      <div
        ref={terminalBodyRef}
        className="p-5 h-80 overflow-y-auto terminal-text text-sm bg-black/60 scroll-smooth"
        onClick={() => inputRef.current?.focus()}
      >
        {history.map((entry, i) => (
          <div key={i} className="mb-3.5">
            {entry.input && (
              <div className="flex items-center gap-2 text-accent-cyan text-xs font-mono">
                <span className="text-emerald-400 font-bold">fattah@neu</span>
                <span className="text-white/40">:</span>
                <span className="text-accent-violet font-semibold">~</span>
                <span className="text-white/60">$</span>
                <span className="text-white font-medium">{entry.input}</span>
              </div>
            )}
            <pre className="text-white/65 whitespace-pre-wrap mt-1 text-xs leading-relaxed font-mono pl-3 border-l-2 border-accent-violet/20">
              {entry.output}
            </pre>
          </div>
        ))}

        {/* Input line */}
        <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2 pt-1">
          <span className="text-emerald-400 font-mono text-xs font-bold">fattah@neu</span>
          <span className="text-white/40 font-mono text-xs">:</span>
          <span className="text-accent-violet font-mono text-xs font-semibold">~</span>
          <span className="text-white/60 font-mono text-xs">$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-transparent text-white text-xs font-mono outline-none caret-accent-cyan placeholder:text-white/20"
            placeholder="Type 'help' or click any shortcut above..."
            aria-label="Simulated terminal input"
            autoComplete="off"
            spellCheck="false"
          />
        </form>
      </div>
    </div>
  );
}

export default function CyberSection() {
  const features = [
    {
      icon: <Shield size={20} />,
      label: 'Security Reconnaissance',
      desc: 'Authorized scanning, network mapping, and vulnerability assessment fundamentals.',
      badge: 'Ethical Hacking',
    },
    {
      icon: <TerminalIcon size={20} />,
      label: 'Linux Environments',
      desc: 'Hands-on familiarity with Kali Linux, Parrot OS, Arch, BlackArch, and Tails OS.',
      badge: 'Multi-Distro',
    },
    {
      icon: <Wifi size={20} />,
      label: 'Network Security',
      desc: 'Exploring OSI protocols, packet inspection, wireless defense, and client-side encryption.',
      badge: 'Protocols',
    },
    {
      icon: <Server size={20} />,
      label: 'System Hardening',
      desc: 'Configuring safe sandboxes, permission boundaries, and secure shell automation.',
      badge: 'DevSecOps',
    },
  ];

  return (
    <section id="cybersecurity" className="relative py-24 md:py-32 section-padding overflow-hidden">
      {/* Subtle matrix-like grid bg */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <SectionHeading
          title="Cybersecurity & Linux"
          subtitle="Security experimentation & system architectures"
        />

        <div className="mt-16 space-y-12">
          {/* Feature cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feat, i) => (
              <motion.div
                key={feat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-xl p-5 card-hover group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                      {feat.icon}
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400/90 border border-emerald-500/20">
                      {feat.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white group-hover:text-emerald-300 transition-colors">
                    {feat.label}
                  </h4>
                  <p className="text-xs text-white/50 mt-1.5 leading-relaxed">{feat.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Interactive Terminal Simulator */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="text-center mb-5">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                Live Terminal Sandbox — click any shortcut or enter a command
              </span>
            </div>

            <TerminalSimulator />

            <p className="text-center text-[11px] text-white/30 mt-3 font-mono">
              Safe simulated client environment. Demonstrates profile knowledge and system interaction.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
