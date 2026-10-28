// ─── Portfolio Data ───
// Edit this file to update your portfolio content.

export const personalInfo = {
  name: 'Urfa Hasan Fattah',
  headline: 'Exploring the Intersection of Code, Intelligence & the Cosmos',
  tagline: 'Computer Science Student • Web Developer • Cybersecurity Enthusiast',
  roles: [
    'Web Developer',
    'Universe Explorer',
    'Cybersecurity Enthusiast',
    'AI-Assisted Developer',
    'Competitive Programmer',
  ],
  bio: `I am a Computer Science and Engineering student at Netrokona University, Bangladesh, interested in building frontend-based websites that solve real-world problems. My projects span web development, academic productivity, educational technology, digital tools, and cybersecurity-oriented experimentation.

I enjoy turning ideas into usable applications, designing intuitive interfaces, automating repetitive tasks, and exploring how software systems work. My interests also include ethical hacking, network reconnaissance in authorized environments, competitive programming, and open-source security exploration.

I use AI-assisted development and productivity tools to support research, learning, coding, and problem-solving. I am interested in continuously improving my technical skills through practical projects, collaborative development, and experimentation.

My portfolio reflects a combination of academic interests and hands-on projects, including exam evaluation systems, study tools, QR-based encrypted data transfer, web utilities, and reusable interface components.`,
  email: 'abdulfattah2457851@gmail.com',
  profileImage: '/profile.jpg',
  experienceYears: 4,
  availability: [
    'Internship opportunities',
    'Freelance development projects',
    'Collaborative web development',
    'Open-source contributions',
    'Educational technology projects',
    'Beginner-friendly cybersecurity and software engineering opportunities',
  ],
};

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/urfa-fattah', icon: 'github' },
  { name: 'LinkedIn', url: '#', icon: 'linkedin' }, // Add your LinkedIn URL
  { name: 'Portfolio', url: 'https://urfa-hasan-fattah.vercel.app/', icon: 'globe' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Security', href: '#cybersecurity' },
  { label: 'Education', href: '#education' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

// ─── Skills ───

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Programming & Web',
    description: 'Languages & frameworks',
    color: '#8b5cf6',
    skills: [
      { name: 'C' },
      { name: 'JavaScript' },
      { name: 'Python' },
      { name: 'HTML' },
      { name: 'CSS' },
      { name: 'Tailwind CSS' },
      { name: 'Bootstrap' },
      { name: 'React' },
    ],
  },
  {
    title: 'Cybersecurity & Tools',
    description: 'Security platforms & dev tools',
    color: '#10b981',
    skills: [
      { name: 'Kali Linux' },
      { name: 'Parrot OS' },
      { name: 'Arch Linux' },
      { name: 'BlackArch' },
      { name: 'Metasploit' },
      { name: 'Termux' },
      { name: 'Git' },
      { name: 'Windows CMD' },
      { name: 'PowerShell' },
    ],
  },
  {
    title: 'Development Concepts',
    description: 'Practices & patterns',
    color: '#06b6d4',
    skills: [
      { name: 'Responsive Design' },
      { name: 'Frontend Development' },
      { name: 'LocalStorage Persistence' },
      { name: 'Form Validation' },
      { name: 'Dynamic Grid Layouts' },
      { name: 'State Management' },
      { name: 'UI Components' },
      { name: 'AI-Assisted Development' },
    ],
  },
];

// ─── AI Tools ───

export interface AITool {
  name: string;
  level: 'highly-comfortable' | 'proficient';
}

export const aiTools: AITool[] = [
  // Highly Comfortable
  { name: 'Claude', level: 'highly-comfortable' },
  { name: 'Antigravity', level: 'highly-comfortable' },
  { name: 'Cursor', level: 'highly-comfortable' },
  { name: 'NotebookLM', level: 'highly-comfortable' },
  { name: 'Prism', level: 'highly-comfortable' },
  { name: 'Consensus', level: 'highly-comfortable' },
  { name: 'Notion', level: 'highly-comfortable' },
  { name: 'Perplexity', level: 'highly-comfortable' },
  // Proficient
  { name: 'Gemini', level: 'proficient' },
  { name: 'ChatGPT', level: 'proficient' },
  { name: 'Kimi', level: 'proficient' },
  { name: 'DeepSeek', level: 'proficient' },
  { name: 'Grok', level: 'proficient' },
  { name: 'GitHub Copilot', level: 'proficient' },
  { name: 'Sora', level: 'proficient' },
  { name: 'Google Flow', level: 'proficient' },
  { name: 'Gamma', level: 'proficient' },
  { name: 'Nano Banana', level: 'proficient' },
  { name: 'Qoder', level: 'proficient' },
  { name: 'Canva', level: 'proficient' },
  { name: 'Ollama (Local LLM)', level: 'proficient' },
  { name: 'Meta', level: 'proficient' },
];

// ─── Projects ───

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  live?: string;
  category: string;
}

export const projectCategories = [
  'All',
  'Exam Tools',
  'Productivity',
  'Academic Tools',
  'Educational Technology',
  'Mathematics Olympiad',
  'UI & Development',
  'Cybersecurity & Privacy',
  'Media Utilities',
  'E-Commerce',
];

export const projects: Project[] = [
  {
    id: 'grabbit',
    title: 'Grabbit: Advanced Video Downloader',
    description:
      'A video and audio downloading application built with Python, Flask, and yt-dlp. Features a modern interface with dark/light themes for downloading publicly accessible media from supported platforms.',
    technologies: ['Python', 'Flask', 'yt-dlp', 'HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/urfa-fattah/video-downloader',
    category: 'Media Utilities',
  },
  {
    id: 'aegisqr',
    title: 'AegisQR™: Encrypted QR Data Vault',
    description:
      'A browser-based application for encoding, encrypting, transferring, and recovering data through QR codes. Features AES-256-GCM encryption, multi-frame QR streaming, and client-side cryptography.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Web Crypto API', 'AES-256-GCM', 'jsQR'],
    github: 'https://github.com/urfa-fattah/qr_code',
    live: 'https://qrcode-roan-eight.vercel.app/',
    category: 'Cybersecurity & Privacy',
  },
  {
    id: 'techbridge-bd',
    title: 'TechBridge BD: Pre-Order Store',
    description:
      'A Bangladesh-focused e-commerce storefront for products sourced from China. Features product browsing, shopping cart, pre-order workflows, custom product requests, and WhatsApp-oriented purchasing.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/urfa-fattah/tech-bridge-bd',
    live: 'https://tech-bridge-bd.vercel.app/',
    category: 'E-Commerce',
  },
  {
    id: 'cover-page-gen',
    title: 'Academic Cover Page Generator',
    description:
      'A browser-based utility for creating formatted academic cover pages with form-based entry, structured layouts, and document export to PDF and DOCX formats.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'html2pdf.js', 'docx'],
    github: 'https://github.com/urfa-fattah/Cover-LaTeX',
    live: 'https://cover-la-te-x.vercel.app/',
    category: 'Academic Tools',
  },
  {
    id: '3d-solid-state',
    title: '3D Solid State',
    description:
      'An educational website focused on the Solid State Physics chapter, designed to help students study core concepts through interactive and visually supported learning experiences.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/urfa-fattah/3D-solid-state',
    live: 'https://3d-solid-state.netlify.app/',
    category: 'Educational Technology',
  },
  {
    id: 'smart-gallery',
    title: 'Smart-Gallery',
    description:
      'A browser-based gallery application for presenting and browsing organized media content with structured data, thumbnail metadata, service worker support, and offline caching.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Service Worker', 'JSON'],
    github: 'https://github.com/urfa-fattah/gallery-bit',
    live: 'https://gallery-bit.vercel.app/',
    category: 'Media Utilities',
  },
  {
    id: 'money-manager',
    title: 'Money Manager: Finance Cockpit',
    description:
      'A personal finance interface for organizing and reviewing financial activity including income/expense tracking, transaction organization, and financial summaries.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    github: 'https://github.com/urfa-fattah/Mange-Money-',
    live: 'https://mange-money.vercel.app/',
    category: 'Productivity',
  },
  {
    id: 'vertex-coders',
    title: 'Vertex Coders',
    description:
      'An academic web project for CSE students at Netrokona University featuring organized student content, image/video gallery, structured data, and academic journey presentation.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'JSON'],
    github: 'https://github.com/urfa-fattah/NeU-CSE-7',
    live: 'https://neu-cse-7.vercel.app/',
    category: 'Academic Tools',
  },
  {
    id: 'omr-master-pro',
    title: 'OMR Master Pro',
    description:
      'An offline-first digital OMR evaluation system supporting MCQ/MSQ generation, automated scoring (+1/−0.25), university-specific countdown timers, and performance analytics.',
    technologies: ['JavaScript', 'CSS', 'LocalStorage', 'State Machine'],
    live: 'https://omr-master-pro.vercel.app/',
    category: 'Exam Tools',
  },
  {
    id: 'trackme',
    title: 'TrackMe',
    description:
      'A visual task-allocation and timeline-management application designed to help users organize academic responsibilities and personal tasks with persistent state.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage', 'CSS Grid'],
    live: 'https://trackme-steel.vercel.app/',
    category: 'Productivity',
  },
  {
    id: 'bdmo-seat-tracker',
    title: 'BDMO Seat Tracker',
    description:
      'A seating-plan distribution and event-navigation interface to help Bangladesh Mathematical Olympiad participants locate their seating arrangements with dynamic grid layouts.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'Dynamic Grid'],
    live: 'https://bdmo-seat.vercel.app/',
    category: 'Mathematics Olympiad',
  },
  {
    id: 'elementa-nu',
    title: 'Elementa NU',
    description:
      'A reusable UI component kit for technology portals at Netrokona University, featuring glassmorphic design, custom widgets, layout primitives, and navigation panels.',
    technologies: ['React', 'Tailwind CSS', 'UMD', 'Glassmorphism'],
    live: 'https://elementa-nu.vercel.app/',
    category: 'UI & Development',
  },
  {
    id: 'subject-choice',
    title: 'Subject Choice Portal',
    description:
      'A priority-based subject and elective selection tool supporting CGPA-based ranking logic, prerequisite validation, form processing, and data filtering.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://subjectchoice.vercel.app/',
    category: 'Academic Tools',
  },
  {
    id: 'studybuddy-pro',
    title: 'StudyBuddy-Pro',
    description:
      'A study-management application for organizing daily routines, monthly schedules, exam preparation, progress tracking, and adaptive study timelines.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'LocalStorage'],
    live: 'https://studybuddy-pro.vercel.app/',
    category: 'Productivity',
  },
  {
    id: 'university-countdown',
    title: 'University Countdown',
    description:
      'A countdown-oriented web utility for tracking university admission examination windows, registration deadlines, and science examination schedules.',
    technologies: ['JavaScript', 'Date API', 'LocalStorage'],
    live: 'https://admission-vert.vercel.app/',
    category: 'Academic Tools',
  },
  {
    id: 'secure-login-ui',
    title: 'Secure Login UI',
    description:
      'A security-oriented authentication interface demonstrating frontend validation, password-strength feedback, and identity-related interface patterns.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://our-logger.vercel.app/',
    category: 'UI & Development',
  },
];

// ─── Education ───

export interface EducationItem {
  institution: string;
  degree: string;
  department?: string;
  group?: string;
  period: string;
  board?: string;
  gpa?: string;
  status?: string;
  type: 'university' | 'college' | 'school';
}

export const education: EducationItem[] = [
  {
    institution: 'Netrokona University',
    degree: 'Bachelor of Science (B.Sc.)',
    department: 'Computer Science and Engineering',
    period: '2026 – Present',
    status: 'Currently Enrolled',
    type: 'university',
  },
  {
    institution: 'Safiuddin Sarker Academy and College',
    degree: 'Higher Secondary Certificate (HSC)',
    group: 'Science',
    period: '2023 – 2024',
    board: 'Dhaka Board',
    gpa: '5.00 / 5.00',
    type: 'college',
  },
  {
    institution: 'Mohangoanj Adarsha High School',
    degree: 'Secondary School Certificate (SSC)',
    group: 'Science',
    period: '2021 – 2022',
    board: 'Mymensingh Board',
    gpa: '4.94 / 5.00',
    type: 'school',
  },
  {
    institution: 'Mohangoanj Adarsha High School',
    degree: 'Junior School Certificate (JSC)',
    group: 'General Studies',
    period: '2019',
    board: 'Mymensingh Board',
    gpa: '3.94 / 5.00',
    type: 'school',
  },
];

// ─── Achievements ───

export interface Achievement {
  title: string;
  description: string;
  icon: 'trophy' | 'medal' | 'award' | 'code';
  color: string;
}

export const achievements: Achievement[] = [
  {
    title: 'First Place — Divisional Science Quiz',
    description:
      'Achieved first place in a divisional science quiz involving district-level finalists, representing the Netrokona division in a multidisciplinary science competition.',
    icon: 'trophy',
    color: '#f59e0b',
  },
  {
    title: 'Third Place — Regional ICT Competition',
    description:
      'Recognized for technical problem-solving, code optimization, and applied engineering logic in a regional ICT competition.',
    icon: 'medal',
    color: '#8b5cf6',
  },
  {
    title: 'Three-Time Regional Math Olympiad Champion',
    description:
      'Achieved regional championship placements on three occasions in Bangladesh Mathematical Olympiad (BdMO) competitions, and participated in a divisional Mathematical Olympiad.',
    icon: 'award',
    color: '#06b6d4',
  },
  {
    title: 'Competitive Programming & Open-Source Security',
    description:
      'Actively engaged in algorithmic programming, university coding challenges, competitive programming, and open-source security exploration in authorized sandbox environments.',
    icon: 'code',
    color: '#10b981',
  },
];

// ─── Interest Cards ───

export const interestCards = [
  {
    title: 'Cybersecurity & Ethical Hacking',
    description:
      'Exploring ethical hacking, network reconnaissance in authorized environments, and open-source security tools. Passionate about understanding how systems can be defended.',
    icon: 'shield',
    color: '#10b981',
  },
  {
    title: 'AI-Assisted Development',
    description:
      'Leveraging AI tools like Claude, Cursor, and Copilot to accelerate development workflows, research, and problem-solving across projects.',
    icon: 'brain',
    color: '#8b5cf6',
  },
  {
    title: 'Universe & Astrophysics',
    description:
      'Captivated by the cosmos — from black holes and quantum mechanics to the fundamental laws governing the universe. Where science meets wonder.',
    icon: 'orbit',
    color: '#f59e0b',
  },
  {
    title: 'Competitive Programming',
    description:
      'Engaged in algorithmic problem-solving, data structures, and mathematical reasoning through competitive programming challenges and university contests.',
    icon: 'code',
    color: '#06b6d4',
  },
];

// ─── Terminal Commands ───

export const terminalCommands: Record<string, string> = {
  help: `Available commands:
  whoami      - Display identity
  skills      - List technical skills
  interests   - Show areas of interest
  education   - Current studies
  contact     - Contact information
  projects    - Project count
  clear       - Clear terminal
  help        - Show this help message`,
  whoami: `Urfa Hasan Fattah
CSE Student @ Netrokona University
Web Developer | Cybersecurity Enthusiast
4+ years of web development experience`,
  skills: `Programming:  C, JavaScript, Python, HTML, CSS
Frameworks:   React, Bootstrap, Tailwind CSS
Security:     Kali Linux, Parrot OS, BlackArch, Metasploit
Tools:        Git, Termux, PowerShell, VS Code`,
  interests: `> Cybersecurity & Ethical Hacking
> AI-Assisted Development
> Competitive Programming
> Universe & Astrophysics
> Educational Technology
> Open-Source Security`,
  education: `Netrokona University
Department: Computer Science & Engineering (CSE)
Degree:     B.Sc. (Currently Enrolled)
HSC GPA:    5.00/5.00 (Dhaka Board)
SSC GPA:    4.94/5.00 (Mymensingh Board)`,
  contact: `Email:    abdulfattah2457851@gmail.com
GitHub:   github.com/urfa-fattah
Portfolio: urfa-hasan-fattah.vercel.app`,
  projects: `Total Projects: 16
Categories: Exam Tools, Productivity, Academic,
  Educational Tech, Math Olympiad, UI/Dev,
  Cybersecurity, Media, E-Commerce`,
};
