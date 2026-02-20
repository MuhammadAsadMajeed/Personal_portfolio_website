
import { Project, Skill, Review, FAQ } from './types';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "EcoSphere Dashboard",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800&h=1200",
    link: "#"
  },
  {
    id: 2,
    title: "Lumina Mobile",
    category: "Mobile UI",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#"
  },
  {
    id: 3,
    title: "Neon Nexus",
    category: "Platform",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#"
  },
  {
    id: 4,
    title: "Vortex Analytics",
    category: "Data Viz",
    image: "https://images.unsplash.com/photo-1551288049-bbda48658a7d?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#"
  },
  {
    id: 5,
    title: "Aether Cloud",
    category: "SaaS",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800&h=600",
    link: "#"
  },
  {
    id: 6,
    title: "Zenith Commerce",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800&h=1200",
    link: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "GSAP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MS Access", icon: "/icons/technologies/ms_access.png" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "Machine Learning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "Linear Regression", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
  { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
  { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
  { name: "Matplotlib", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
  { name: "Seaborn", icon: "/icons/technologies/seaborn.svg" },
  { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg" },
  { name: "PowerBI", icon: "https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" },
  { name: "AWS", icon: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "CEO at TechFlow",
    content: "An exceptional eye for detail. The project was delivered ahead of schedule with top-tier quality.",
    avatar: "https://picsum.photos/100/100?random=10"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Manager",
    content: "The animations and user experience designed were beyond what we imagined. Highly recommended!",
    avatar: "https://picsum.photos/100/100?random=11"
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Founder, GreenSpace",
    content: "Working with this developer was a game-changer for our brand identity. The UI is absolutely stunning.",
    avatar: "https://picsum.photos/100/100?random=12"
  },
  {
    id: 4,
    name: "James Wilson",
    role: "CTO at Vortex",
    content: "Highly technical and creative. A rare combination that solved our most complex frontend challenges.",
    avatar: "https://picsum.photos/100/100?random=13"
  },
  {
    id: 5,
    name: "Aria Gupta",
    role: "Creative Director",
    content: "The attention to motion design is incredible. The transitions are butter smooth and very engaging.",
    avatar: "https://picsum.photos/100/100?random=14"
  },
  {
    id: 6,
    name: "David Smith",
    role: "Lead Designer",
    content: "Transformed our legacy platform into a modern masterpiece. Fast, reliable, and extremely talented.",
    avatar: "https://picsum.photos/100/100?random=15"
  }
];

export const FAQS: FAQ[] = [
  {
    question: "What is your typical turnaround time?",
    answer: "For standard landing pages, usually 1-2 weeks. Complex web applications vary depending on requirements."
  },
  {
    question: "Do you work with international clients?",
    answer: "Yes, I have experience working with teams across multiple time zones globally."
  }
];
