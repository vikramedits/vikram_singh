export const personalInfo = {
  name: "Vikram Singh",
  title: "Full Stack Developer",
  tagline: "Building modern, scalable, high-performance web experiences.",
  description:
    "I'm a passionate Full Stack Developer who specializes in building exceptional digital experiences. I transform complex problems into elegant, user-friendly solutions using Next.js, TypeScript, and modern web technologies.",
  email: "vikram.singh@email.com",
  location: "India",
  github: "https://github.com/vikramsingh",
  linkedin: "https://linkedin.com/in/vikramsingh",
  twitter: "https://twitter.com/vikramsingh",
  resumeUrl: "/resume.pdf",
  availability: "Open to opportunities",
};

export const stats = [
  { label: "Full Stack Projects", value: 3, suffix: "+" },
  { label: "UI Components Built", value: 20, suffix: "+" },
  { label: "Lighthouse Score", value: 95, suffix: "+" },
  { label: "Years Learning", value: 1, suffix: "+" },
];

export const skills = {
  frontend: [
    { name: "Next.js", icon: "nextjs", level: 90 },
    { name: "React", icon: "react", level: 88 },
    { name: "TypeScript", icon: "typescript", level: 85 },
    { name: "Tailwind CSS", icon: "tailwind", level: 92 },
    { name: "Framer Motion", icon: "framer", level: 78 },
  ],
  backend: [
    { name: "Node.js", icon: "nodejs", level: 80 },
    { name: "Express", icon: "express", level: 78 },
    { name: "Prisma", icon: "prisma", level: 75 },
    { name: "MongoDB", icon: "mongodb", level: 72 },
    { name: "PostgreSQL", icon: "postgresql", level: 70 },
  ],
  tools: [
    { name: "Git", icon: "git", level: 88 },
    { name: "GitHub", icon: "github", level: 88 },
    { name: "Vercel", icon: "vercel", level: 85 },
    { name: "Figma", icon: "figma", level: 72 },
    { name: "Cloudinary", icon: "cloudinary", level: 70 },
  ],
};

export const projects = [
  {
    id: "1",
    slug: "villa-booking-platform",
    title: "The Pushpa Heritage – Villa Booking Platform",
    description:
      "A full-stack villa booking platform with secure payment gateway integration, property listings, and an admin dashboard for managing bookings and users.",
    longDescription:
      "Built a production-ready luxury villa booking platform for real-world hospitality use. Includes property management system, booking flow, payment gateway integration, and a powerful admin dashboard for controlling listings, availability, and customer bookings.",
    category: "Full Stack",
    tags: [
      "Next.js",
      "Full Stack",
      "Payment Gateway",
      "Admin Dashboard",
      "MongoDB",
      "Tailwind CSS",
    ],
    thumbnail: "/projects/villa-booking.jpg",
    images: ["/projects/villa-1.jpg", "/projects/villa-2.jpg"],
    liveUrl: "https://thepushpaheritage.in",
    githubUrl: "",
    status: "Live",
    featured: true,
    year: 2025,
    problem:
      "Luxury villa booking systems often lack smooth UX and proper backend management for owners and admins.",
    solution:
      "Built a scalable booking system with automated availability handling, secure payments, and a clean admin interface.",
    challenges:
      "Handling booking conflicts and ensuring secure payment flow required careful backend logic and validation.",
    performance:
      "Optimized for fast booking flow and responsive UI across devices with Next.js performance optimizations.",
  },

  {
    id: "2",
    slug: "cricket-ai-platform",
    title: "Balls & Boundaries – Cricket Intelligence Platform",
    description:
      "A cricket news and AI-powered insights platform with real-time articles, AI chatbot, and match analysis using OpenAI API.",
    longDescription:
      "A full-stack cricket platform featuring live articles, AI-generated cricket insights, and an intelligent chatbot powered by OpenAI. Includes admin dashboard for managing news content and analytics.",
    category: "Full Stack",
    tags: [
      "Next.js",
      "OpenAI API",
      "AI Chatbot",
      "Admin Dashboard",
      "Node.js",
      "MongoDB",
    ],
    thumbnail: "/projects/cricket.jpg",
    images: ["/projects/cricket-1.jpg", "/projects/cricket-2.jpg"],
    liveUrl: "https://ballsandboundaries.in",
    githubUrl: "",
    status: "Live",
    featured: true,
    year: 2025,
    problem:
      "Cricket fans need real-time updates and deeper insights beyond basic news articles.",
    solution:
      "Integrated AI-powered summaries, cricket analysis, and chatbot interaction for personalized insights.",
    challenges:
      "Working with OpenAI API efficiently while maintaining fast response times and structured outputs.",
    performance:
      "Improved content delivery speed using caching and optimized API responses.",
  },

  {
    id: "3",
    slug: "vocaply-english-learning-platform",
    title: "Vocaply – English Learning Platform",
    description:
      "An advanced English learning platform with AI tools, lessons, courses, and real-time user progress tracking (currently in development).",
    longDescription:
      "Vocaply is a modern EdTech platform designed to improve English learning through structured lessons, AI-powered tools, quizzes, and real-time progress tracking with an admin dashboard.",
    category: "EdTech",
    tags: [
      "Next.js",
      "AI Tools",
      "EdTech",
      "Learning Platform",
      "Admin Dashboard",
      "Real-time Tracking",
    ],
    thumbnail: "/projects/vocaply.jpg",
    images: ["/projects/vocaply-1.jpg", "/projects/vocaply-2.jpg"],
    liveUrl: "",
    githubUrl: "",
    status: "In Progress",
    featured: true,
    year: 2026,
    problem:
      "Existing English learning platforms lack personalization and AI-driven practice systems.",
    solution:
      "Building an adaptive learning system with AI-based exercises, vocabulary tools, and progress tracking.",
    challenges:
      "Designing a scalable learning system with real-time analytics and user tracking.",
    performance:
      "Currently optimizing architecture for future scale and AI integration.",
  },

  {
    id: "4",
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "A modern developer portfolio built with Next.js showcasing projects, skills, and experience with animations and responsive UI.",
    longDescription:
      "My personal portfolio website built to showcase real-world full-stack and AI projects with smooth UI/UX, animations, and optimized performance.",
    category: "Frontend",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "UI/UX"],
    thumbnail: "/projects/portfolio.jpg",
    images: ["/projects/portfolio-1.jpg"],
    liveUrl: "",
    githubUrl: "",
    status: "Live",
    featured: false,
    year: 2026,
    problem:
      "Needed a professional way to showcase projects and technical skills to recruiters and clients.",
    solution:
      "Built a fast, animated, and responsive portfolio using Next.js and modern UI practices.",
    challenges:
      "Balancing performance, animations, and clean design without overloading the UI.",
    performance:
      "Achieved fast load times with optimized assets and static rendering.",
  },
];
export const experience = [
  {
    id: "1",
    title: "Full Stack Development Journey",
    company: "Self-Learning",
    type: "Learning",
    period: "2024 – Present",
    description: "Deep diving into full-stack development, mastering Next.js, TypeScript, databases, and modern deployment practices through hands-on project building.",
    skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel"],
    icon: "code",
  },
  {
    id: "2",
    title: "Freelance Web Developer",
    company: "Freelance",
    type: "Work",
    period: "2024",
    description: "Developed responsive landing pages and small web applications for local businesses, focusing on performance and modern design.",
    skills: ["React", "Tailwind CSS", "JavaScript", "Figma"],
    icon: "briefcase",
  },
  {
    id: "3",
    title: "Open Source Contributions",
    company: "GitHub",
    type: "Achievement",
    period: "2024 – Present",
    description: "Actively contributing to open source projects, improving documentation, fixing bugs, and building community tools.",
    skills: ["Git", "GitHub", "TypeScript", "Documentation"],
    icon: "github",
  },
  {
    id: "4",
    title: "UI/UX Design Exploration",
    company: "Figma & Design Systems",
    type: "Learning",
    period: "2023",
    description: "Explored design principles, typography, color theory, and component design systems to build better, more intuitive user interfaces.",
    skills: ["Figma", "Design Systems", "Typography", "Color Theory"],
    icon: "palette",
  },
];

export const services = [
  {
    title: "Full Stack Development",
    description: "End-to-end web application development from database design to pixel-perfect UI using Next.js, TypeScript, and modern databases.",
    icon: "layers",
    color: "from-violet-500 to-purple-600",
  },
  {
    title: "UI Development",
    description: "Building beautiful, responsive, and accessible user interfaces with Tailwind CSS, Framer Motion, and modern design systems.",
    icon: "layout",
    color: "from-blue-500 to-cyan-600",
  },
  {
    title: "Landing Page Design",
    description: "High-converting, visually stunning landing pages optimized for performance, SEO, and user engagement.",
    icon: "monitor",
    color: "from-emerald-500 to-teal-600",
  },
  {
    title: "API Integration",
    description: "Seamlessly integrating third-party APIs, payment gateways, authentication systems, and external services.",
    icon: "zap",
    color: "from-orange-500 to-amber-600",
  },
  {
    title: "Performance Optimization",
    description: "Auditing and optimizing web applications to achieve 90+ Lighthouse scores, faster load times, and better Core Web Vitals.",
    icon: "gauge",
    color: "from-rose-500 to-pink-600",
  },
  {
    title: "Responsive Development",
    description: "Creating flawless experiences across all devices — mobile, tablet, desktop, and ultrawide — with mobile-first development.",
    icon: "smartphone",
    color: "from-indigo-500 to-blue-600",
  },
];

export const testimonials = [
  {
    id: "1",
    name: "Arjun Mehta",
    role: "Startup Founder",
    company: "TechFlow",
    avatar: "/avatars/arjun.jpg",
    content: "Vikram delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail, clean code, and communication made the entire process seamless. Highly recommended!",
    rating: 5,
  },
  {
    id: "2",
    name: "Priya Sharma",
    role: "Product Manager",
    company: "InnovateLabs",
    avatar: "/avatars/priya.jpg",
    content: "Working with Vikram was a pleasure. He quickly understood our requirements and delivered a beautiful, performant dashboard ahead of schedule. The code quality is outstanding.",
    rating: 5,
  },
  {
    id: "3",
    name: "Rahul Kapoor",
    role: "CEO",
    company: "DigitalVentures",
    avatar: "/avatars/rahul.jpg",
    content: "Vikram's expertise in Next.js and modern web technologies helped us build a platform that's fast, scalable, and visually impressive. He's a truly talented developer.",
    rating: 5,
  },
];

export const blogPosts = [
  {
    id: "1",
    slug: "nextjs-performance-optimization",
    title: "Next.js Performance Optimization: A Complete Guide",
    excerpt: "Learn how to optimize your Next.js application for peak performance, achieving 90+ Lighthouse scores with image optimization, code splitting, and smart caching strategies.",
    category: "Next.js",
    readingTime: "8 min read",
    date: "2024-12-15",
    thumbnail: "/blog/nextjs-performance.jpg",
    featured: true,
    tags: ["Next.js", "Performance", "Optimization", "Web Vitals"],
  },
  {
    id: "2",
    slug: "framer-motion-animations",
    title: "Mastering Framer Motion: Building Premium Animations",
    excerpt: "A deep dive into Framer Motion's advanced features — stagger animations, scroll-triggered reveals, gesture-based interactions, and page transitions that feel native.",
    category: "Animation",
    readingTime: "6 min read",
    date: "2024-11-20",
    thumbnail: "/blog/framer-motion.jpg",
    featured: true,
    tags: ["Framer Motion", "Animation", "React", "UX"],
  },
  {
    id: "3",
    slug: "react-best-practices-2025",
    title: "React Best Practices for 2025",
    excerpt: "Essential patterns and practices for writing scalable, maintainable React code in 2025 — Server Components, composition patterns, and performance optimization techniques.",
    category: "React",
    readingTime: "10 min read",
    date: "2024-10-05",
    thumbnail: "/blog/react-best-practices.jpg",
    featured: false,
    tags: ["React", "Best Practices", "TypeScript", "Performance"],
  },
  {
    id: "4",
    slug: "seo-nextjs-guide",
    title: "The Complete SEO Guide for Next.js Applications",
    excerpt: "Everything you need to know about SEO in Next.js — metadata API, Open Graph, structured data, sitemaps, and how to dominate Google search rankings.",
    category: "SEO",
    readingTime: "7 min read",
    date: "2024-09-18",
    thumbnail: "/blog/seo-nextjs.jpg",
    featured: false,
    tags: ["SEO", "Next.js", "Metadata", "Google"],
  },
];

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];
