"use client";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { useEffect, useState } from "react";
import { SiGmail } from "react-icons/si";


export default function Home() {
  const [hovered, setHovered] = useState(false);

  const [hideIcons, setHideIcons] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
  const sections = [
    "home",
    "about",
    "experience",
    "skills",
    "education",
    "projects",
    "contact",
  ];

  const handleScroll = () => {
  const scrollPosition = window.scrollY + 200;

  if (
  window.innerHeight + window.scrollY >=
  document.documentElement.scrollHeight - 50
) {
  setActiveSection("contact");
  return;
}

    sections.forEach((section) => {
      const element = document.getElementById(section);

      if (
        element &&
        scrollPosition >= element.offsetTop &&
        scrollPosition < element.offsetTop + element.offsetHeight
      ) {
        setActiveSection(section);
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  

  return () => window.removeEventListener("scroll", handleScroll);
}, []);
const navLink = (section: string) =>
  `px-4 py-2 rounded-full transition-all duration-300 ${
    activeSection === section
      ? "bg-blue-600 text-white shadow-lg"
      : "hover:bg-blue-600/30 hover:text-white"
  }`;

  return (
     <main className="relative min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <div className="absolute inset-0 -z-10 overflow-hidden">

  <div className="
    absolute top-20 left-1/2 -translate-x-1/2
    w-[600px] h-[600px]
    rounded-full blur-[120px]

    bg-blue-500/5
    dark:bg-blue-500/10
  " />

</div>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-300 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-6">
      <h1
  className={`text-lg md:text-xl font-bold cursor-pointer transition-all duration-300 ${
    hovered ? "text-blue-500" : ""
  }`}
  onMouseEnter={() => setHovered(true)}
  onMouseLeave={() => setHovered(false)}
>
  {hovered ? "Always improving." : "Build. Learn. Repeat."}
  <span className="animate-pulse text-blue-500 ml-1">|</span>
</h1>

          <div className="flex items-center gap-2">

  <a href="#home" className={navLink("home")}>
  Home
</a>

  <a href="#about" className={navLink("about")}>
  About
</a>

  <a href="#experience" className={navLink("experience")}>
  Experience
</a>

  <a href="#skills" className={navLink("skills")}>
  Skills
</a>

  <a href="#education" className={navLink("education")}>
  Education
</a>

  <a href="#projects" className={navLink("projects")}>
  Projects
</a>

  <a href="#contact" className={navLink("contact")}>
  Contact
</a>

  <ThemeToggle />

</div>
        </div>
      </nav>
  <div
  id="social-sidebar"
  className={`fixed left-6 top-1/2 -translate-y-1/2 z-[9999] flex flex-col gap-6 transition-all duration-700 ${
    hideIcons
      ? "-translate-x-40 opacity-0"
      : "translate-x-0 opacity-100"
  }`}
>
  <a
    href="https://github.com/vivekrsarnaik"
    target="_blank"
    rel="noopener noreferrer"
    className="text-4xl text-gray-500 hover:text-white transition-all duration-300 hover:scale-110"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/vivekrsarnaik/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-4xl text-gray-500 hover:text-blue-500 transition-all duration-300 hover:scale-110"
  >
    <FaLinkedin />
  </a>

  <div className="w-px h-24 bg-gray-600 mx-auto"></div>
</div>
      {/* Hero Section */}
      
     <section
  id="home"
  className="min-h-[85vh] flex flex-col justify-center items-center text-center px-6"
>

  <motion.img
    src="/profile.jpg"
    alt="Vivek Sarnaik"
    className="w-32 h-32 md:w-36 md:h-36 rounded-full object-cover border-4 border-blue-500 shadow-xl mb-6"
    animate={{ y: [0, -8, 0] }}
    transition={{
      duration: 3,
      repeat: Infinity,
    }}
  />

  <h1 className="text-5xl md:text-7xl font-bold mb-4">
    Hi, I'm Vivek Sarnaik
  </h1>

  <TypeAnimation
  sequence={[
    "Software Engineer",
    2000,
    "Backend Engineer",
    2000,
    "Cloud Engineer",
    2000,
    "Distributed Systems Enthusiast",
    2000,
    "Building Scalable Applications",
    2000,
  ]}
  wrapper="span"
  speed={50}
  repeat={Infinity}
  className="text-xl md:text-3xl text-gray-400 mb-6 block"
/>

  <p className="max-w-3xl text-lg text-gray-400 leading-relaxed">
    I recently completed my Master's degree and have a strong interest in backend
    development, distributed systems, cloud technologies, and AI-powered software.
    I enjoy building scalable applications, solving challenging problems, and
    creating systems that are reliable and efficient.
  </p>

  <div className="flex flex-wrap justify-center gap-4 mt-10">

    <a
      href="#projects"
      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
>
    
      View Projects
    </a>

    <a
  href="/Vivek_Sarnaik_Resume.pdf"
  download
  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
>
  Download Resume
</a>

  </div>

</section>
      <div className="max-w-4xl mx-auto border-b border-gray-800"></div>
      
{/* About Section */}
<section id="about" className="py-24 px-6">

  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="max-w-4xl mx-auto"
  >

    <h2 className="text-4xl font-bold mb-8 text-center">
      About Me
    </h2>

    <p className="max-w-3xl mx-auto text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
      Hi, I'm Vivek, a Software Engineer who enjoys turning ideas into real applications.
      I recently completed my Master's degree and have a strong interest in backend
      development, distributed systems, cloud technologies, and AI-powered software.
      From building real-time chat platforms and distributed job schedulers to AI-powered
      applications, I enjoy solving complex problems and creating systems that are scalable,
      reliable, and easy to use.
    </p>

  </motion.div>

</section>
      <div className="max-w-4xl mx-auto border-b border-gray-800"></div>

      {/* Experience Section */}
<section id="experience" className="pt-24 pb-12 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Experience
    </h2>

    <div className="space-y-8">

      {/* SkillShare */}
      <div className="border border-gray-300 dark:border-gray-800 rounded-xl p-6">
        <h3 className="text-2xl font-semibold">
          Full-Stack Developer
        </h3>

        <p className="text-blue-500 mb-4">
          SkillShare • Remote • Jun 2024 – Dec 2025
        </p>

        <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-4">
  <li>• Improved page load performance by 35% using React and Next.js.</li>

  <li>• Built REST APIs and optimized PostgreSQL queries for high-volume workflows.</li>

  <li>• Implemented JWT/OAuth authentication and role-based access control.</li>

  <li>• Automated deployments with Docker and GitHub Actions, reducing release time by 60%.</li>
</ul>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Next.js</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Django</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Node.js</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">PostgreSQL</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Docker</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">AWS</span>
        </div>
      </div>

      {/* Genpact */}
      <div className="border border-gray-300 dark:border-gray-800 rounded-xl p-6">
        <h3 className="text-2xl font-semibold">
          Software Engineer
        </h3>

        <p className="text-blue-500 mb-4">
          Genpact • Pune, India • Dec 2020 – Dec 2021
        </p>

        <ul className="text-gray-700 dark:text-gray-300 space-y-2 mb-4">
  <li>• Developed scalable backend services using Python and Node.js.</li>

  <li>• Built responsive web applications with React and Next.js.</li>

  <li>• Optimized PostgreSQL performance, reducing database latency by 40%.</li>

  <li>• Collaborated in Agile teams to deliver customer-facing features.</li>
</ul>

        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Python</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">FastAPI</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Flask</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">Next.js</span>
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">PostgreSQL</span>
        </div>
      </div>

    </div>
  </div>
</section>

<div className="max-w-4xl mx-auto border-b border-gray-300 dark:border-gray-800"></div>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
  initial={{ opacity: 0, y: 80, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.7, delay: 0 }}
  viewport={{ once: true }}
  className="border border-gray-300 dark:border-gray-800 rounded-xl p-6"
>
  <h3 className="text-2xl font-semibold mb-6 text-center">
    Languages
  </h3>

  <div className="grid grid-cols-3 gap-6 text-center">
    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        className="w-12 h-12 mx-auto"
      />
      <p className="mt-2 text-sm">Python</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        className="w-12 h-12 mx-auto"
      />
      <p className="mt-2 text-sm">Java</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
        className="w-12 h-12 mx-auto"
      />
      <p className="mt-2 text-sm">Go</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        className="w-12 h-12 mx-auto"
      />
      <p className="mt-2 text-sm">JavaScript</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        className="w-12 h-12 mx-auto"
      />
      <p className="mt-2 text-sm">TypeScript</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        className="w-12 h-12 mx-auto"
      />
      <p className="mt-2 text-sm">SQL</p>
    </div>
  </div>
</motion.div>

            <motion.div
  initial={{ opacity: 0, y: 80, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.7, delay: 0 }}
  viewport={{ once: true }}
  className="border border-gray-300 dark:border-gray-800 rounded-xl p-6"
>
  <h3 className="text-2xl font-semibold mb-6 text-center">
    Frontend
  </h3>

  <div className="grid grid-cols-2 gap-6 text-center">
    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        className="w-12 h-12 mx-auto"
      />
      <p className="mt-2 text-sm">React</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
        className="w-12 h-12 mx-auto dark:invert"
      />
      <p className="mt-2 text-sm">Next.js</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg"
        className="w-12 h-12 mx-auto"
      />
      <p className="mt-2 text-sm">Angular</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        className="w-12 h-12 mx-auto"
      />
      <p className="mt-2 text-sm">Tailwind</p>
    </div>
  </div>
</motion.div>

            <motion.div
  initial={{ opacity: 0, y: 80, scale: 0.9 }}
  whileInView={{ opacity: 1, y: 0, scale: 1 }}
  transition={{ duration: 0.7, delay: 0 }}
  viewport={{ once: true }}
  className="border border-gray-300 dark:border-gray-800 rounded-xl p-6"
>
  <h3 className="text-2xl font-semibold mb-6 text-center">
    Backend & Cloud
  </h3>

  <div className="grid grid-cols-2 gap-6 text-center">
    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
        className="w-12 h-12 mx-auto transition-transform duration-300 hover:scale-125"
      />
      <p className="mt-2 text-sm">Spring Boot</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
        className="w-12 h-12 mx-auto transition-transform duration-300 hover:scale-125"
      />
      <p className="mt-2 text-sm">FastAPI</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        className="w-12 h-12 mx-auto transition-transform duration-300 hover:scale-125"
      />
      <p className="mt-2 text-sm">Docker</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        className="w-12 h-12 mx-auto dark:invert transition-transform duration-300 hover:scale-125"
      />
      <p className="mt-2 text-sm">AWS</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        className="w-12 h-12 mx-auto transition-transform duration-300 hover:scale-125"
      />
      <p className="mt-2 text-sm">PostgreSQL</p>
    </div>

    <div>
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg"
        className="w-12 h-12 mx-auto transition-transform duration-300 hover:scale-125"
      />
      <p className="mt-2 text-sm">Kubernetes</p>
    </div>
  </div>
</motion.div>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto border-b border-gray-300 dark:border-gray-800"></div>
      {/* Education Section */}
<section id="education" className="py-24 px-6">
  <div className="max-w-5xl mx-auto">

    <h2 className="text-4xl font-bold text-center mb-12">
      Education
    </h2>

    <div className="space-y-6">

      <div className="border border-gray-300 dark:border-gray-800 rounded-xl p-6">
        <h3 className="text-2xl font-semibold">
          M.S. Information Science
        </h3>

        <p className="text-blue-500">
          Trine University • 2026
        </p>

        <p className="text-gray-400 mt-2">
          Cloud Computing, Advanced Databases, Software Engineering
        </p>
      </div>

      <div className="border border-gray-300 dark:border-gray-800 rounded-xl p-6">
        <h3 className="text-2xl font-semibold">
          M.S. Computer Science
        </h3>

        <p className="text-blue-500">
          University of Texas at Arlington • 2024
        </p>

        <p className="text-gray-400 mt-2">
          Distributed Systems, Machine Learning, Algorithms, Databases
        </p>
      </div>

      <div className="border border-gray-300 dark:border-gray-800 rounded-xl p-6">
        <h3 className="text-2xl font-semibold">
          B.E. Computer Engineering
        </h3>

        <p className="text-blue-500">
          Savitribai Phule Pune University • 2021
        </p>

        <p className="text-gray-400 mt-2">
          Computer Networks, Data Structures, Operating Systems
        </p>
      </div>

    </div>

  </div>
</section>
      
      <div className="max-w-4xl mx-auto border-b border-gray-300 dark:border-gray-800"></div>


      {/* Projects Section */}
<section id="projects" className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Projects
    </h2>
<motion.div className="text-center mb-8">
  <a
    href="https://github.com/vivekrsarnaik/PetPulse-App"
    target="_blank"
    rel="noopener noreferrer"
    className="
      inline-flex items-center gap-3
      px-5 py-3
      rounded-full
      bg-blue-600
      hover:bg-blue-700
      text-white
      font-medium
      shadow-lg
      transition-all duration-300
    "
  >
    <motion.span
      animate={{ rotate: [0, -20, 20, -20, 0] }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatDelay: 2,
      }}
    >
      🔨
    </motion.span>

    Currently Building: PetPulse

    <FaGithub className="text-lg" />

    <span className="transition-transform duration-300 group-hover:translate-x-1">
      →
    </span>
  </a>
</motion.div>
    <div className="grid md:grid-cols-3 gap-8">

      {/* gRPC Project */}
      <motion.div
  initial={{ opacity: 0, x: -80 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  className="border border-gray-300 dark:border-gray-800 rounded-xl p-6 transition-colors duration-300 shadow-lg hover:shadow-blue-500/20"
>
        <h3 className="text-2xl font-semibold mb-4">
  gRPC ChatHub
</h3>

        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Real-time chat application built with Go, gRPC,
          Protocol Buffers, PostgreSQL, and Docker.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm transition-colors duration-300">
            Go
          </span>

          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm transition-colors duration-300">
            gRPC
          </span>

          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm transition-colors duration-300">
            PostgreSQL
          </span>

          <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm transition-colors duration-300">
            Docker
          </span>
        </div>

        <ul className="text-gray-500 dark:text-gray-400 space-y-2">
          <li>• Direct Messaging</li>
          <li>• Broadcast Messaging</li>
          <li>• Bidirectional Streaming</li>
          <li>• Message Persistence</li>
          <li>• Docker Deployment</li>
        </ul>

        <div className="mt-6">
          <a
  href="https://github.com/vivekrsarnaik/gRPC-chat"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
>
  <FaGithub />

  View on GitHub

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
        </div>
      </motion.div>

      {/* Distributed Job Scheduler */}
      <motion.div
  initial={{ opacity: 0, y: 80 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  whileHover={{ y: -8 }}
  className="border border-gray-300 dark:border-gray-800 rounded-xl p-6 shadow-lg"
>
  <h3 className="text-2xl font-semibold mb-4">
    Distributed Job Scheduler
</h3>

  <p className="text-gray-700 dark:text-gray-300 mb-4">
    Asynchronous task processing platform built with FastAPI,
    Redis, PostgreSQL and Docker.
  </p>

  <div className="flex flex-wrap gap-2 mb-6">
    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
      Python
    </span>
    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
      FastAPI
    </span>
    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
      Redis
    </span>
    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
      PostgreSQL
    </span>
  </div>

  <ul className="text-gray-500 dark:text-gray-400 space-y-2">
    <li>• Background Task Processing</li>
    <li>• Retry Mechanism</li>
    <li>• Status Tracking</li>
    <li>• Docker Deployment</li>
  </ul>
  <div className="mt-6">
    <a
  href="https://github.com/vivekrsarnaik/distributed-job-scheduler"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
>
  <FaGithub />

  View on GitHub

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a>
</div>
</motion.div>



<motion.div
  whileHover={{ y: -8 }}
  className="
    border border-gray-300 dark:border-gray-800
    rounded-3xl p-8
    hover:border-blue-500
    hover:shadow-[0_0_25px_rgba(37,99,235,0.25)]
    transition-all duration-300
  "
>
 <div
  className="relative group cursor-pointer mb-6"
  onClick={() => setSelectedImage("/projects/ai-review.png")}
>
  <img
    src="/projects/ai-review.png"
    alt="AI Code Review Assistant"
    className="w-full h-44 object-cover rounded-xl"
  />

  <div
    className="
      absolute inset-0
      bg-black/60
      opacity-0
      group-hover:opacity-100
      transition-all duration-300
      flex items-center justify-center
      rounded-lg
      
    "
  >
    <span className="text-white font-medium">
      🔍 View Screenshot
    </span>
  </div>
</div>
  <h3 className="text-3xl font-bold mb-4">
    AI Code Review Assistant
</h3>

  <p className="text-gray-700 dark:text-gray-300 mb-4">
    AI-powered application that reviews source code and
    provides feedback on quality, bugs and best practices.
  </p>

  <div className="flex flex-wrap gap-2 mb-6">
    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
      React
    </span>
    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
      FastAPI
    </span>
    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
      OpenAI
    </span>
    <span className="px-3 py-1 bg-gray-200 dark:bg-gray-800 rounded-full text-sm">
      PostgreSQL
    </span>
  </div>

  <ul className="text-gray-500 dark:text-gray-400 space-y-2">
    <li>• AI-Powered Reviews</li>
    <li>• Code Quality Analysis</li>
    <li>• Dark Mode UI</li>
    <li>• Review History</li>
  </ul>
  <div className="mt-6">
   <a
  href="https://github.com/vivekrsarnaik/ai-code-review-assistant"
  target="_blank"
  rel="noopener noreferrer"
  className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-all duration-300"
>
  <FaGithub />

  View on GitHub

  <span className="transition-transform duration-300 group-hover:translate-x-1">
    →
  </span>
</a> 
</div>
</motion.div>

    </div>
  </div>
</section>

<div className="max-w-4xl mx-auto my-10 border-b border-gray-300 dark:border-gray-800"></div>

{/* Contact Section */}
<section id="contact" className="pt-16 pb-12 px-6">
  <div className="max-w-4xl mx-auto text-center">

    <h2 className="text-4xl font-bold mb-8">
      Contact
    </h2>

    <p className="text-gray-700 dark:text-gray-300 mb-10">
      Feel free to connect with me or check out my work.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-6">

      <a
  href="mailto:vivekrsarnaik@gmail.com"
  className="flex items-center justify-center gap-2 bg-white text-black border border-gray-300 px-6 py-3 rounded-lg font-semibold"
>
  <img
    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
    alt="Gmail"
    className="w-5 h-5"
  />
  Email Me
</a>

      <a
        href="https://www.linkedin.com/in/vivekrsarnaik/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-[#0A66C2] hover:bg-[#004182] px-6 py-3 rounded-lg font-semibold text-white transition-all duration-300"
      >
        <FaLinkedin />
        LinkedIn
      </a>

      <a
        href="https://github.com/vivekrsarnaik"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 bg-black text-white border border-gray-700 hover:border-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
      >
        <FaGithub />
        GitHub
      </a>

    </div>

  </div>
</section>
{selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)}
  >
    <img
      src={selectedImage}
      alt="Full Screenshot"
      className="max-w-6xl max-h-[90vh] rounded-xl shadow-2xl"
    />
  </div>
)}
{/* Footer */}
<footer className="mt-12 border-t border-gray-300 dark:border-gray-800 py-8">

  <div className="max-w-6xl mx-auto px-6 text-center">

    <p className="text-gray-600 dark:text-gray-400">
      Built with Next.js, Tailwind CSS & Framer Motion
    </p>

    <p className="text-sm text-gray-500 mt-2">
      © 2026 Vivek Sarnaik. All rights reserved.
    </p>

  </div>

</footer>
    </main>
  );
}