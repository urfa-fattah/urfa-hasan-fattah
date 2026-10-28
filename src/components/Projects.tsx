import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, Search, Sparkles, Filter, CheckCircle2, Code2 } from 'lucide-react';
import { projects, projectCategories, type Project } from '../data/portfolio';
import SectionHeading from './SectionHeading';

const viewport = { once: true, margin: '-50px' };

function ProjectCard({ project, onClick }: { project: Project; onClick: () => void }) {
  const isLive = Boolean(project.live);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick();
      }}
      tabIndex={0}
      role="button"
      aria-label={`View details for ${project.title}`}
      className="glass rounded-2xl overflow-hidden card-hover cursor-pointer group flex flex-col justify-between border border-white/5 hover:border-accent-violet/30 focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
    >
      <div>
        {/* Header thumbnail area */}
        <div className="relative h-36 bg-gradient-to-br from-void-100 via-void-50 to-void-200 overflow-hidden border-b border-white/5">
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-accent-violet/10 border border-accent-violet/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <span className="text-xl gradient-text font-black">
                {project.title.charAt(0)}
              </span>
            </div>
          </div>

          {/* Category Pill */}
          <div className="absolute bottom-2.5 left-3 px-2.5 py-0.5 rounded-full glass text-[10px] font-mono text-white/70 border border-white/10">
            {project.category}
          </div>

          {/* Status Badge */}
          <div className="absolute top-2.5 right-3">
            {isLive ? (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Live Demo
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-accent-violet/15 text-accent-violet border border-accent-violet/25">
                <Code2 size={10} />
                Source Code
              </span>
            )}
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <h3 className="text-base font-bold text-white group-hover:text-accent-cyan transition-colors duration-300 line-clamp-1">
            {project.title}
          </h3>
          <p className="text-xs text-white/55 mt-2 line-clamp-2 leading-relaxed">
            {project.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mt-3.5">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md bg-accent-violet/10 border border-accent-violet/20 text-accent-violet text-[10px] font-mono font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-0.5 rounded-md bg-white/5 text-white/40 text-[10px] font-mono">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Card Footer Actions */}
      <div className="p-5 pt-0">
        <div className="flex items-center justify-between pt-3 border-t border-white/5 text-xs">
          <span className="text-[11px] text-white/40 group-hover:text-accent-cyan transition-colors">
            Click for full details →
          </span>
          <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg glass text-white/50 hover:text-white hover:border-accent-violet/40 transition-colors"
                title="View Source Code"
                aria-label={`GitHub for ${project.title}`}
              >
                <Github size={13} />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="p-1.5 rounded-lg glass text-emerald-400/80 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
                title="Open Live Website"
                aria-label={`Live demo for ${project.title}`}
              >
                <ExternalLink size={13} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-void/85 backdrop-blur-md"
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.92, opacity: 0, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="glass-strong rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 border border-white/10 shadow-2xl"
        role="dialog"
        aria-label={project.title}
      >
        <div className="flex items-start justify-between mb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs font-mono text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/20 mb-2">
              {project.category}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold gradient-text">{project.title}</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-white/50 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-accent-violet/50"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-5">
          <div>
            <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">Description & Purpose</h4>
            <p className="text-white/70 leading-relaxed text-sm">{project.description}</p>
          </div>

          <div>
            <h4 className="text-xs font-mono text-white/40 uppercase tracking-wider mb-2">Technologies & Architecture</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-accent-violet/10 border border-accent-violet/25 text-accent-violet text-xs font-mono font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-3">
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs sm:text-sm"
              >
                <ExternalLink size={15} /> Launch Live Application
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary text-xs sm:text-sm"
              >
                <Github size={15} /> View GitHub Repository
              </a>
            )}
            {!project.live && (
              <div className="inline-flex items-center gap-1.5 text-xs text-white/40 font-mono py-2">
                <CheckCircle2 size={13} className="text-accent-cyan" />
                Backend/desktop utility — run locally via repository instructions
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeCategory === 'All' || project.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="projects" className="relative py-24 md:py-32 section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Project Showcase"
          subtitle={`16 real applications & technical systems`}
        />

        {/* Search & Filter Bar */}
        <div className="mt-12 space-y-5">
          {/* Search Input */}
          <div className="max-w-xl mx-auto relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 16 projects by name, technology (e.g. Python, React, QR, Flask)..."
              className="w-full pl-11 pr-10 py-3 rounded-2xl glass border border-white/10 text-white text-sm placeholder:text-white/30 outline-none focus:border-accent-violet/50 focus:ring-2 focus:ring-accent-violet/20 transition-all duration-300"
              aria-label="Search projects"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-white/40 hover:text-white"
                aria-label="Clear search"
              >
                <X size={16} />
              </button>
            )}
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {projectCategories.map((cat) => {
              const count =
                cat === 'All'
                  ? projects.length
                  : projects.filter((p) => p.category === cat).length;

              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all duration-300 flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-accent-violet/50 ${
                    activeCategory === cat
                      ? 'bg-gradient-to-r from-accent-violet to-accent-cyan text-white font-semibold shadow-lg shadow-accent-violet/20'
                      : 'glass text-white/60 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeCategory === cat ? 'bg-black/30 text-white' : 'bg-white/10 text-white/50'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results count counter */}
          <div className="flex items-center justify-between text-xs text-white/40 font-mono px-2">
            <span>
              Showing <strong className="text-white">{filteredProjects.length}</strong> of{' '}
              {projects.length} projects
            </span>
            {(activeCategory !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="text-accent-cyan hover:underline flex items-center gap-1"
              >
                <Filter size={11} /> Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mt-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state */}
        {filteredProjects.length === 0 && (
          <div className="glass rounded-3xl p-12 text-center max-w-md mx-auto mt-10">
            <p className="text-base font-bold text-white mb-2">No matching projects found</p>
            <p className="text-xs text-white/50 mb-5 leading-relaxed">
              No project matched "{searchQuery}" in category "{activeCategory}".
            </p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="btn-primary text-xs"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
