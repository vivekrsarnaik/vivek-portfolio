"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import ThemeToggle from "./theme-toggle";
export default function Home() {
  
  return (
     <main className="min-h-screen bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-300 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-8 py-6">
          <h1 className="text-2xl font-bold">
            Vivek<span className="text-blue-500">.dev</span>
          </h1>

          <div className="flex items-center gap-6">
            <a
              href="#home"
              className="text-gray-600 dark:text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              Home
            </a>

            <a
              href="#about"
              className="text-gray-600 dark:text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              About
            </a>

            <a
              href="#skills"
              className="text-gray-600 dark:text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="text-gray-600 dark:text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="text-gray-600 dark:text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
            >
              Contact
            </a>

            <ThemeToggle />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="flex items-center justify-center min-h-[80vh]"
      >
        <div className="text-center px-6">
        
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
  <TypeAnimation
    sequence={[
      "Hi, I'm Vivek Sarnaik",
      2000,
      "Software Engineer",
      2000,
      "Full-Stack Developer",
      2000,
      "Cloud & Distributed Systems Engineer",
      2000,
    ]}
    wrapper="span"
    speed={50}
    repeat={Infinity}
  />
</h1>

          <h2 className="text-xl md:text-2xl text-gray-500 dark:text-gray-500 dark:text-gray-400 mb-6">
            Software Engineer | Full-Stack Development | Cloud & Distributed Systems
          </h2>

          <p className="max-w-2xl mx-auto text-gray-700 dark:text-gray-300 text-lg mb-8">
            M.S. Computer Science graduate passionate about backend engineering,
            distributed systems, cloud technologies, and AI-powered applications.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
  href="#projects"
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
>
  View Projects
</a>

            <a
  href="/resume.pdf"
  download
  className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold"
>
  Download Resume
</a>
          </div>
        </div>
      </section>
      <div className="max-w-4xl mx-auto border-b border-gray-800"></div>
      {/* About Section */}
      <section id="about" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-8 text-center">
            I'm a Software Engineer with a background in Computer Science and
            Information Science. My interests include distributed systems,
            cloud computing, backend engineering, and AI-powered applications.
          </p>

          <p className="text-gray-700 dark:text-gray-300 text-lg leading-8 text-center mt-6">
            I enjoy building scalable software using Python, Java, React, AWS,
            Docker, and modern development practices.
          </p>
        </div>
      </section>
      <div className="max-w-4xl mx-auto border-b border-gray-800"></div>
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
      <div className="max-w-4xl mx-auto border-b border-gray-800"></div>
      {/* Projects Section */}
<section id="projects" className="py-24 px-6">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">
      Projects
    </h2>

    <div className="grid md:grid-cols-2 gap-8">

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
          <a
            href="https://github.com/vivekrsarnaik/gRPC-chat"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            gRPC ChatHub →
          </a>
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
            className="inline-block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
          >
            View on GitHub
          </a>
        </div>
      </motion.div>

      {/* Next Project */}
      <div className="border border-gray-300 dark:border-gray-800 rounded-xl p-6 transition-colors duration-300">
        <h3 className="text-2xl font-semibold mb-4">
          Next Project
        </h3>

        <p className="text-gray-700 dark:text-gray-300">
          Working...
        </p>
      </div>

    </div>
  </div>
</section>

<div className="max-w-4xl mx-auto border-b border-gray-300 dark:border-gray-800"></div>
      {/* Contact Section */}
<section id="contact" className="py-24 px-6">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="text-4xl font-bold mb-8">
      Contact
    </h2>

    <p className="text-gray-700 dark:text-gray-300 mb-10">
      Feel free to connect with me or check out my work.
    </p>

    <div className="flex flex-col md:flex-row justify-center gap-6">
      <motion.a
  href="mailto:vivekrsarnaik@gmail.com"
  whileHover={{
    x: [-3, 3, -3, 3, 0],
  }}
  transition={{
    duration: 0.3,
  }}
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold"
>
  📧 Email Me
</motion.a>

      <a
  href="https://www.linkedin.com/in/vivekrsarnaik/"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300"
>
  LinkedIn
</a>

      <a
        href="https://github.com/vivekrsarnaik"
        target="_blank"
        rel="noopener noreferrer"
        className="border border-gray-600 hover:border-white hover:bg-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
      >
        GitHub
      </a>
    </div>
  </div>
</section>

    </main>
  );
}