import {
  Briefcase,
  Building2,
  Globe,
  GraduationCap,
  Laptop,
  MapPin,
  Phone,
  CircleCheckBig,
  type LucideIcon,
} from 'lucide-react';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiBootstrap,
  SiGithub,
  SiFirebase,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';

export const PROFILE_IMAGE =
  '/profile.jpeg.jpeg';

export const LOGO_IMAGE = PROFILE_IMAGE;

export const NAME = 'Mohammad Arshad';
export const NAME_SHORT = 'Arshad';

export interface Stat {
  end: number;
  suffix: string;
  title: string;
}

export const heroStats: Stat[] = [
  { end: 50, suffix: '+', title: 'Projects Completed' },
  { end: 15, suffix: '+', title: 'Technologies' },
  { end: 100, suffix: '%', title: 'Responsive Design' },
  { end: 24, suffix: '/7', title: 'Learning Mindset' },
];

export interface AchievementStat {
  number: number;
  label: string;
}

export const achievementStats: AchievementStat[] = [
  { number: 50, label: 'Projects' },
  { number: 300, label: 'Clients' },
  { number: 3, label: 'Years Experience' },
  { number: 100, label: 'Success Rate' },
];

export interface Skill {
  name: string;
  value: number;
  icon: React.ReactNode;
}

export const skills: Skill[] = [
  { name: 'React.js', value: 95, icon: <SiReact /> },
  { name: 'JavaScript (ES6+)', value: 92, icon: <SiJavascript /> },
  { name: 'Node.js', value: 90, icon: <SiNodedotjs /> },
  { name: 'Express.js', value: 88, icon: <SiExpress /> },
  { name: 'MongoDB', value: 87, icon: <SiMongodb /> },
  { name: 'REST API', value: 90, icon: <TbApi /> },
  { name: 'HTML5', value: 95, icon: <SiHtml5 /> },
  { name: 'CSS3', value: 92, icon: <SiCss /> },
  { name: 'Tailwind CSS', value: 94, icon: <SiTailwindcss /> },
  { name: 'Bootstrap', value: 90, icon: <SiBootstrap /> },
  { name: 'Git & GitHub', value: 88, icon: <SiGithub /> },
  { name: 'Firebase', value: 85, icon: <SiFirebase /> },
];

export interface Service {
  title: string;
  featured: boolean;
}

export const services: Service[] = [
  { title: 'Full Stack Web Development', featured: true },
  { title: 'Frontend Development', featured: true },
  { title: 'Backend Development', featured: true },
  { title: 'REST API Development', featured: true },
  { title: 'Database Design & Integration', featured: true },
  { title: 'Responsive Web Design', featured: true },
  { title: 'Firebase Integration', featured: false },
  { title: 'Authentication & Authorization', featured: false },
  { title: 'Website Deployment', featured: false },
  { title: 'Website Maintenance', featured: false },
  { title: 'Admin Dashboard Development', featured: false },
  { title: 'Bug Fixing & Performance Optimization', featured: false },
];

export interface Experience {
  year: string;
  role: string;
  company: string;
  desc: string;
  tech: string[];
  current: boolean;
}

export const experiences: Experience[] = [
  {
    year: '2025 - Present',
    role: 'Full Stack MERN Developer',
    company: 'Freelance',
    desc: 'Developing responsive and scalable web applications using React.js, Node.js, Express.js, MongoDB, Firebase, and REST APIs.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase'],
    current: true,
  },
  {
    year: '15 July 2026 - Present',
    role: 'Full Stack MERN Developer',
    company: 'SyntexHub',
    desc: 'Developing modern, responsive, and scalable web applications using React.js, Node.js, Express.js, MongoDB, and Firebase. Building secure REST APIs, optimizing application performance, and delivering high-quality solutions for real-world business requirements.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Firebase', 'REST API'],
    current: true,
  },
  {
    year: '2024 - 2025',
    role: 'React.js Developer',
    company: 'Personal Projects',
    desc: 'Built multiple responsive websites, admin dashboards, portfolio websites, and full-stack MERN applications with clean UI and optimized performance.',
    tech: ['React', 'Tailwind', 'JavaScript', 'REST API', 'Git'],
    current: false,
  },
];

export interface JourneyItem {
  year: string;
  title: string;
  company: string;
  badge: string;
  description: string;
  technologies: string[];
}

export const journeyItems: JourneyItem[] = [
  {
    year: '2026',
    title: 'Freelance MERN Stack Developer',
    company: 'Self Employed',
    badge: 'Current',
    description: 'Developing modern, scalable, and responsive full-stack web applications, portfolio websites, ERP systems, admin dashboards, and business solutions.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Firebase'],
  },
  {
    year: '2025',
    title: 'Advanced React.js Development',
    company: 'Personal Projects',
    badge: 'Completed',
    description: 'Built high-performance React applications with authentication, REST APIs, reusable components, and responsive UI using Tailwind CSS.',
    technologies: ['React.js', 'JavaScript', 'REST API', 'Tailwind CSS', 'Git'],
  },
  {
    year: '2024',
    title: 'Web Development Journey',
    company: 'Learning Phase',
    badge: 'Completed',
    description: 'Started my web development journey by mastering HTML5, CSS3, JavaScript, Bootstrap, Git & GitHub while creating real-world projects.',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'GitHub'],
  },
];

export interface Project {
  title: string;
  description: string;
  details: string;
  video: string;
  github: string;
  demo: string;
  tech: string[];
  image: string;
}

export const projects: Project[] = [
  {
    title: 'Weather App',
    description: 'REAL-TIME WEB APP',
    details: 'A real-time weather application that fetches live data from a public API and displays current conditions, forecasts and location-based results with a clean responsive interface.',
    video: '',
    github: 'https://github.com/arshad-sheikh305/weather',
    demo: 'https://weather-taupe-two.vercel.app/',
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
    image:
      'https://images.pexels.com/photos/39258975/pexels-photo-39258975.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
  {
    title: 'E-COMMERCE STORE',
    description: 'FULL-STACK APPLICATION',
    details: 'A full-featured e-commerce platform with product listings, cart management, authentication and a checkout flow built across frontend and backend layers.',
    video: '',
    github: 'https://github.com/arshad-sheikh305/ecommerce-store',
    demo: 'https://ecommerce-store-kim9.vercel.app/',
    tech: ['React', 'Express', 'MongoDB', 'JWT'],
    image:
      'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
   {
    title: 'EMPLOYEE MANAGEMENT SYSTEM',
    description: 'MANAGEMENT SYSTEM',
    details: 'A management system for handling employee records, departments and attendance with CRUD operations and a structured database layer for persistent storage.',
    video: '',
    github: 'https://github.com/arshad-sheikh305/employee-management-system',
    demo: 'https://employee-management-system-bay-omega-80.vercel.app/',
    tech: ['React', 'Express', 'MongoDB', 'JWT'],
    image:
      'https://images.pexels.com/photos/6285113/pexels-photo-6285113.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200',
  },
];

export interface Certificate {
  title: string;
  issuer: string;
  year: string;
  image: string;
  featured: boolean;
}

export const certificates: Certificate[] = [
  {
    title: 'Web Development Internship',
    issuer: 'SyntexHub',
    year: '2026',
    image:
      '/6.jpeg.jpeg',
    featured: true,
  },
  {
    title: 'YUVA AI FOR ALL',
    issuer: 'TCS',
    year: '2026',
    image:
      '/3.jpeg.jpeg',
    featured: false,
  },
  {
    title: 'Data Analytics ',
    issuer: 'Deloitte',
    year: '2026',
    image:
      '/4.jpeg.jpeg',
    featured: false,
  },
   {
    title: '.NET FUll Stack Developer ',
    issuer: 'C# Corner',
    year: '2025',
    image:
      '/2.jpeg.jpeg',
    featured: false,
  },
   {
    title: 'Career Guidance Webinar ',
    issuer: 'IIT Hyderabad',
    year: '2023',
    image:
      '/1.jpeg.jpeg',
    featured: false,
  },
   {
    title: 'Android Hacking Masterclass ',
    issuer: 'CYBER MIND SPACE',
    year: '2023',
    image:
      '/4.jpeg.jpeg',
    featured: false,
  },
];

export interface Testimonial {
  name: string;
  image: string;
  rating: number;
  text: string;
}

export const defaultTestimonials: Testimonial[] = [
  {
    name: 'John Smith',
    image: 'https://randomuser.me/api/portraits/men/32.jpg',
    rating: 5,
    text: 'Excellent developer with strong React skills.',
  },
  {
    name: 'Sarah Wilson',
    image: 'https://randomuser.me/api/portraits/women/44.jpg',
    rating: 5,
    text: 'Delivered the project on time and exceeded expectations.',
  },
];

export interface QuickInfo {
  icon: LucideIcon;
  label: string;
  value: string;
}

export const quickInfo: QuickInfo[] = [
  { icon: CircleCheckBig, label: 'Open to Work:', value: ' Yes' },
  { icon: Laptop, label: 'Role:', value: ' Full Stack MERN Developer' },
  { icon: Globe, label: 'Current Focus:', value: ' React.js, Node.js, Express.js & MongoDB' },
  { icon: MapPin, label: 'Location:', value: ' Bareilly, Uttar Pradesh, India' },
  { icon: GraduationCap, label: 'Education:', value: ' B.Tech in Computer Science & Engineering' },
  { icon: Briefcase, label: 'Languages:', value: ' Hindi & English' },
  { icon: Phone, label: 'Phone:', value: ' +91 7037712898' },
  { icon: CircleCheckBig, label: 'Freelance:', value: ' Available' },
];

export interface FloatingTech {
  name: string;
  className: string;
  icon: React.ReactNode;
}

export const floatingTech: FloatingTech[] = [
  { name: 'React', className: 'top-6 -left-8', icon: <SiReact /> },
  { name: 'Node.js', className: 'top-12 -right-10', icon: <SiNodedotjs /> },
  { name: 'MongoDB', className: 'bottom-12 -left-10', icon: <SiMongodb /> },
  { name: 'Express', className: 'bottom-6 -right-8', icon: <SiExpress /> },
];

export const footerLinks = ['Home', 'About', 'Skills', 'Services', 'Projects', 'Timeline', 'Contact'];

export const footerServices = ['Web Development', 'Frontend', 'Backend', 'REST API', 'MongoDB', 'Firebase'];

export const socialLinks = [
  { link: 'https://github.com/settings/profile', label: 'GitHub' },
  { link: 'https://www.linkedin.com/in/mohammad-arshad-a1b7b33a8?utm_source=share_via&utm_content=profile&utm_medium=member_android', label: 'LinkedIn' },
  { link: 'https://www.instagram.com/as1_4.3?stkn=MXZneTZobmw3emtqMw==', label: 'Instagram' },
  { link: 'mailto:arshadsheikh7037@gmail.com', label: 'Email' },
];

export const contactInfo = {
  location: 'Bareilly, Uttar Pradesh, India',
  email: 'arshadsheikh7037@gmail.com',
  phone: '+91 7037712898',
};

export { Building2 };
