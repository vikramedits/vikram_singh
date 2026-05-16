export const personalInfo = {
  name: "Vikram Singh Deora",
  title: "Next.js and AI Developer",
  tagline: "Building modern, scalable, high-performance web experiences.",
  description:
    "I'm a passionate Next.js and AI Developer who specializes in building exceptional digital experiences. I transform complex problems into elegant, user-friendly solutions using Next.js, TypeScript, and modern web technologies.",
  email: "deora.vikramsingh75@gmail.com",
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
      "Built a production-ready luxury villa booking platform for real-world hospitality use. Includes property management system, booking flow, payment gateway integration, and a powerful admin dashboard for controlling listings, availability, and customer bookings. The platform was designed to handle high-traffic booking seasons with zero downtime and sub-second response times.",
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
    images: ["/projects/villa-1.jpg", "/projects/villa-2.jpg", "/projects/villa-3.jpg", "/projects/villa-4.jpg"],
    liveUrl: "https://thepushpaheritage.in",
    githubUrl: "",
    status: "Live",
    featured: true,
    year: 2025,
    problem:
      "Luxury villa booking systems often lack smooth UX and proper backend management for owners and admins. Traditional platforms were slow, failed to handle concurrent bookings effectively, and provided a disjointed experience between the customer-facing site and the management dashboard. The client needed a unified, high-performance solution that felt as premium as the properties themselves.",
    solution:
      "Built a scalable booking system with automated availability handling, secure payments, and a clean admin interface. I implemented a robust state management system to prevent double-bookings and integrated a seamless payment flow using PhonePe. The admin dashboard allows for real-time inventory management, dynamic pricing, and comprehensive booking analytics, all built on a high-speed Next.js architecture.",
    challenges:
      "Handling booking conflicts and ensuring secure payment flow required careful backend logic and validation. One major hurdle was implementing a real-time calendar system that updated across all users simultaneously to prevent overbooking. I solved this by utilizing optimistic UI updates and a highly optimized MongoDB schema designed for atomic operations.",
    performance:
      "Optimized for fast booking flow and responsive UI across devices with Next.js performance optimizations. The platform achieves a 98+ Lighthouse score on desktop and mobile, with a Largest Contentful Paint (LCP) under 1.2 seconds. I utilized ISR (Incremental Static Regeneration) for property listings to ensure they are always up-to-date without sacrificing speed.",
  },

  {
    id: "2",
    slug: "cricket-ai-platform",
    title: "Balls & Boundaries – Cricket Intelligence Platform",
    description:
      "A cricket news and AI-powered insights platform with real-time articles, AI chatbot, and match analysis using OpenAI API.",
    longDescription:
      "A full-stack cricket platform featuring live articles, AI-generated cricket insights, and an intelligent chatbot powered by OpenAI. Includes admin dashboard for managing news content and analytics. This project leverages AI to provide fans with deeper match analysis and personalized cricket trivia, making it a unique hub for sports enthusiasts.",
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
    images: ["/projects/cricket-1.jpg", "/projects/cricket-2.jpg", "/projects/cricket-3.jpg"],
    liveUrl: "https://ballsandboundaries.in",
    githubUrl: "",
    status: "Live",
    featured: true,
    year: 2025,
    problem:
      "Cricket fans need real-time updates and deeper insights beyond basic news articles. Most sports platforms provide generic news without any interactive or data-driven depth, leaving fans wanting more personalized analysis and interactive engagement during matches.",
    solution:
      "Integrated AI-powered summaries, cricket analysis, and chatbot interaction for personalized insights. I used the OpenAI API to analyze match data and generate real-time insights that are then presented to users via a dedicated AI Dashboard. The platform also includes a dynamic CMS for editors to publish news, which the AI then uses to provide context-aware summaries.",
    challenges:
      "Working with OpenAI API efficiently while maintaining fast response times and structured outputs. A key challenge was prompt engineering to ensure the AI maintained a consistent 'cricket expert' persona and provided accurate statistical interpretations without hallucination. I implemented a custom middleware to cache AI responses for frequently asked questions, significantly reducing API costs and latency.",
    performance:
      "Improved content delivery speed using caching and optimized API responses. By utilizing Edge Functions for AI processing and Next.js Image optimization for high-resolution sports photography, the platform remains highly responsive even during peak match hours. Load times were reduced by 40% through aggressive static site generation for news articles.",
  },

  {
    id: "3",
    slug: "vocaply-english-learning-platform",
    title: "Vocaply – English Learning Platform",
    description:
      "An advanced English learning platform with AI tools, lessons, courses, and real-time user progress tracking (currently in development).",
    longDescription:
      "Vocaply is a modern EdTech platform designed to improve English learning through structured lessons, AI-powered tools, quizzes, and real-time progress tracking with an admin dashboard. The platform uses AI to analyze user speech and writing, providing instant feedback on grammar, pronunciation, and vocabulary usage.",
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
    images: ["/projects/vocaply-1.jpg", "/projects/vocaply-2.jpg", "/projects/vocaply-3.jpg"],
    liveUrl: "",
    githubUrl: "",
    status: "In Progress",
    featured: true,
    year: 2026,
    problem:
      "Existing English learning platforms lack personalization and AI-driven practice systems. Many students feel overwhelmed by static content that doesn't adapt to their specific weaknesses, leading to slower progress and reduced motivation.",
    solution:
      "Building an adaptive learning system with AI-based exercises, vocabulary tools, and progress tracking. I'm developing a 'Smart Progress' engine that tracks every interaction and adjusts the curriculum in real-time. The platform includes interactive AI tutors that simulate real-world conversations, allowing students to practice speaking in a low-pressure environment.",
    challenges:
      "Designing a scalable learning system with real-time analytics and user tracking. The primary technical hurdle is managing the complex state of thousands of concurrent learners while providing low-latency AI feedback. I'm utilizing Supabase for real-time data sync and specialized vector databases for efficient content retrieval and recommendation.",
    performance:
      "Currently optimizing architecture for future scale and AI integration. The focus is on minimizing the Time to First Byte (TTFB) for dynamic lessons and ensuring that AI-driven speech analysis happens in near real-time using optimized streaming endpoints.",
  },

  {
    id: "4",
    slug: "portfolio-website",
    title: "Personal Portfolio Website",
    description:
      "A modern developer portfolio built with Next.js showcasing projects, skills, and experience with animations and responsive UI.",
    longDescription:
      "My personal portfolio website built to showcase real-world full-stack and AI projects with smooth UI/UX, animations, and optimized performance. It serves as a living demonstration of my technical capabilities, featuring advanced routing, dynamic content management, and premium animations.",
    category: "Frontend",
    tags: ["Next.js", "Framer Motion", "Tailwind CSS", "UI/UX"],
    thumbnail: "/projects/portfolio.jpg",
    images: ["/projects/portfolio-1.jpg", "/projects/portfolio-2.jpg"],
    liveUrl: "",
    githubUrl: "",
    status: "Live",
    featured: false,
    year: 2026,
    problem:
      "Needed a professional way to showcase projects and technical skills to recruiters and clients. A generic template wouldn't suffice to demonstrate the level of craftsmanship and technical depth I bring to my development work.",
    solution:
      "Built a fast, animated, and responsive portfolio using Next.js and modern UI practices. I focused on creating a high-end aesthetic using glassmorphism, custom shaders, and Framer Motion for micro-interactions. The site is fully SEO-optimized and integrated with Vercel Analytics to track engagement.",
    challenges:
      "Balancing performance, animations, and clean design without overloading the UI. Implementing complex scroll-based animations while maintaining a 60fps frame rate on mobile devices required deep optimization of React renders and CSS properties.",
    performance:
      "Achieved fast load times with optimized assets and static rendering. The site scores a perfect 100/100 on Lighthouse for SEO and Best Practices, with a total bundle size minimized through careful dependency management and tree-shaking.",
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
    content: [
      { type: "paragraph", text: "In the modern web, performance isn't just a feature — it's a requirement. Users expect lightning-fast load times, and search engines penalize slow sites. As a developer, mastering Next.js performance optimization is key to building competitive, user-friendly applications." },
      { type: "subheading", text: "The Role of Image Optimization" },
      { type: "paragraph", text: "Images are often the heaviest assets on a page. By using the Next.js <Image /> component, you automatically gain features like lazy loading, automatic resizing, and modern format conversion (like WebP). This significantly reduces the Largest Contentful Paint (LCP) and improves the overall user experience." },
      { type: "list", text: "Core performance pillars in Next.js:", items: [
        "Server-Side Rendering (SSR) vs. Static Site Generation (SSG)",
        "Efficient use of Incremental Static Regeneration (ISR)",
        "Optimizing third-party scripts with next/script",
        "Reducing JavaScript bundle size through dynamic imports"
      ]},
      { type: "subheading", text: "Leveraging Caching and Edge Middleware" },
      { type: "paragraph", text: "Caching is your best friend when it comes to speed. Next.js provides built-in support for caching data at the edge, reducing latency for users across the globe. Additionally, using Edge Middleware allows you to run logic closer to your users, further optimizing the delivery of content and personalized experiences." }
    ]
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
    content: [
      { type: "paragraph", text: "Animations bring life to a website. They guide the user's attention, provide feedback, and create a sense of premium quality. Framer Motion is the industry standard for React animations, offering a declarative API that makes complex transitions simple to implement." },
      { type: "subheading", text: "The Power of Variants" },
      { type: "paragraph", text: "Variants allow you to define multiple states for an animation and switch between them effortlessly. This is particularly useful for building complex, staggered animations where parent and child elements need to coordinate their entrances and exits." },
      { type: "paragraph", text: "By using variants, you keep your code clean and reusable, making it easy to apply the same animation logic across different components without duplication." },
      { type: "list", text: "Why use Framer Motion for your next project?", items: [
        "Declarative syntax for better maintainability",
        "Physics-based spring animations for a natural feel",
        "Built-in support for gestures like hover, tap, and drag",
        "Seamless integration with React's component lifecycle"
      ]},
      { type: "subheading", text: "Scroll-Triggered Magic" },
      { type: "paragraph", text: "Using the whileInView prop, you can easily trigger animations as elements enter the viewport. This creates a more dynamic browsing experience, making the site feel interactive and responsive to the user's actions." }
    ]
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
    content: [
      { type: "paragraph", text: "As we move into 2025, the React ecosystem continues to evolve. With the full adoption of Server Components and more sophisticated state management patterns, the way we build applications has fundamentally shifted toward better performance and cleaner architecture." },
      { type: "subheading", text: "Embracing Server Components" },
      { type: "paragraph", text: "Server Components allow us to move heavy logic and data fetching to the server, resulting in smaller client bundles and faster initial loads. Understanding when to use Client vs. Server components is now the most critical skill for any modern React developer." },
      { type: "paragraph", text: "Composition over inheritance remains a core pillar. By building small, focused components and composing them together, we create systems that are easier to test, debug, and scale over time." },
      { type: "list", text: "Essential React patterns for 2025:", items: [
        "Strategic use of useOptimistic and useFormStatus for better UX",
        "Efficient state management with hybrid local/global patterns",
        "Strict TypeScript types for every component and hook",
        "Implementing robust error boundaries for resilient apps"
      ]}
    ]
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
    content: [
      { type: "paragraph", text: "Building a great application is only half the battle; people need to find it. Search Engine Optimization (SEO) is the bridge between your content and your audience. In Next.js, SEO is deeply integrated into the framework's core features." },
      { type: "subheading", text: "The New Metadata API" },
      { type: "paragraph", text: "Next.js's Metadata API provides a simple way to manage your site's SEO tags. From titles and descriptions to Open Graph images and Twitter cards, you can define everything in a structured, type-safe manner within your layout and page files." },
      { type: "subheading", text: "Structured Data and Sitemaps" },
      { type: "paragraph", text: "Structured data (JSON-LD) helps search engines understand the content and context of your pages, leading to rich snippets in search results. Combining this with automatically generated sitemaps ensures that your entire site is indexed efficiently." },
      { type: "list", text: "Checklist for a fully SEO-optimized Next.js app:", items: [
        "Unique, descriptive title tags for every page",
        "High-quality Open Graph images for social sharing",
        "Valid semantic HTML hierarchy (H1, H2, etc.)",
        "Fast load times and passing Core Web Vitals",
        "Proper canonical tags to avoid duplicate content"
      ]}
    ]
  },
];

export const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Blog", href: "/#blog" },
  { label: "Contact", href: "/#contact" },
];
