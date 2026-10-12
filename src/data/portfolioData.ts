import { Experience, SkillCategory, Language } from '../types';

export const experiences: Experience[] = [
  {
    company: 'Happiest Minds Technologies',
    subtext: '(formerly Macmillan Learning India)',
    location: 'Bhubaneswar, India',
    role: 'Module Lead',
    duration: 'Feb 2023 – Present',
    current: true,
    skills: ['Angular', 'RxJS', 'Pusher.js', 'WebSockets', 'Electron', 'Technical Leadership', 'Architecture'],
    bullets: [
      'Own technical direction and architecture decisions for multiple core modules within the iClicker suite — Instructor, Student, Participant, and Insights applications — supporting classroom sessions with thousands of concurrent real-time users.',
      'Built and maintained real-time polling and engagement features using Pusher.js and WebSockets, ensuring low-latency data synchronization across concurrent sessions.',
      'Designed a reactive, RxJS-based state management layer to handle high-frequency data streams and complex event orchestration across the application suite.',
      'Established a shared component and library architecture reused across Web and Desktop (Electron) builds, reducing duplicate development effort across platforms.',
      'Mentored engineers within a 2–3 person immediate team through code review and technical guidance, upholding Angular best practices across the module.',
    ],
  },
  {
    company: 'Xoriant Solutions Pvt. Ltd.',
    subtext: 'Advanced Technology Group (ATG)',
    location: 'Bangalore, India',
    role: 'Software Engineer',
    duration: 'Aug 2021 – Feb 2023',
    current: false,
    skills: ['Angular', 'Electron.js', 'Enterprise R&D', 'Cross-Platform', 'TypeScript'],
    bullets: [
      'Built high-performance, cross-platform applications for enterprise clients as part of an internal R&D-focused technology group.',
      'Developed hybrid desktop applications using Angular and Electron.js, delivering consistent functionality across Windows and macOS.',
    ],
  },
  {
    company: 'Wipro Ltd.',
    subtext: 'Center of Excellence (COE)',
    location: 'Bangalore, India',
    role: 'Project Engineer',
    duration: 'Aug 2019 – Jul 2021',
    current: false,
    skills: ['Angular', 'Ionic', 'Hybrid Mobile', 'UI Component Libraries', 'Mobile iOS/Android'],
    bullets: [
      'Selected for the Center of Excellence (COE) to build reusable UI component libraries adopted across multiple project teams organization-wide.',
      'Built and deployed cross-platform hybrid mobile applications using Angular and Ionic, ensuring consistent performance on iOS and Android.',
    ],
  },
];

export const technicalSkills: SkillCategory[] = [
  {
    category: 'Frontend Core',
    skills: ['Angular (Advanced)', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3 / SCSS'],
  },
  {
    category: 'Real-Time & State Management',
    skills: ['RxJS (Expert)', 'Pusher.js', 'WebSockets', 'Subject-based state management'],
  },
  {
    category: 'Testing & Quality',
    skills: ['Jasmine', 'Karma', 'Virtuoso', 'TestRail'],
  },
  {
    category: 'Tools & Cloud',
    skills: ['AWS Amplify', 'AWS S3', 'REST API Integration', 'Git'],
  },
];

export const softSkills: string[] = [
  'Technical Leadership & Decision Making',
  'Reactive Architecture & System Design',
  'Team Mentorship & Code Reviews',
  'Cross-functional Collaboration',
  'Agile / Scrum Delivery',
];

export const languages: Language[] = [
  { name: 'English', level: 'Full Professional Proficiency' },
  { name: 'Hindi', level: 'Native' },
  { name: 'Odia', level: 'Native' },
];
