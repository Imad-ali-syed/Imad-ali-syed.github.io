// src/app/page.tsx
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <main className="bg-black text-white font-sans scroll-smooth">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center px-6 md:px-12 py-4 fixed top-0 bg-black/80 backdrop-blur-md z-50">
        <h1 className="text-2xl font-bold text-cyan-400">Imad Ali Syed</h1>
        <ul className="flex gap-6">
          <li>
            <Link href="#projects" className="hover:text-cyan-400 transition">
              Projects
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-cyan-400 transition">
              Contact
            </Link>
          </li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section
        className="relative flex flex-col items-center justify-center text-center min-h-screen px-6 md:px-12 pt-24"
        style={{
          backgroundImage: "url('/hacker-hero.png')", // put hero-bg.jpg inside public/
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" /> {/* Overlay */}
        <div className="relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight animate-pulse">
            Imad Ali Syed
          </h1>
          <h2 className="mt-4 text-xl md:text-2xl text-cyan-400">
            Cybersecurity Enthusiast • Frontend Developer
          </h2>
          <p className="mt-6 text-gray-300 text-lg max-w-2xl">
            Building secure and modern web applications while exploring the
            frontiers of cybersecurity.
          </p>
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
            >
              View My Projects
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-2xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold transition"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="px-6 md:px-12 py-20 bg-gray-900">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Example project card */}
          <div className="bg-black rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/50 transition group">
            <Image
              src="/project1.png" // add an image in public/
              alt="Project One"
              width={600}
              height={400}
              className="rounded-lg mb-4 group-hover:scale-105 transition"
            />
            <h3 className="text-xl font-semibold mb-2">Project One</h3>
            <p className="text-gray-400 mb-4">
              Description of your first project goes here.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername/project1"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://yourproject1demo.com"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>

          {/* Duplicate for more projects */}
          <div className="bg-black rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/50 transition group">
            <Image
              src="/project2.png"
              alt="Project Two"
              width={600}
              height={400}
              className="rounded-lg mb-4 group-hover:scale-105 transition"
            />
            <h3 className="text-xl font-semibold mb-2">Project Two</h3>
            <p className="text-gray-400 mb-4">
              Description of your second project goes here.
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/yourusername/project2"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://yourproject2demo.com"
                target="_blank"
                className="text-cyan-400 hover:underline"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 py-20 bg-black">
        <h2 className="text-3xl font-bold text-center text-cyan-400 mb-8">
          Get In Touch
        </h2>
        <div className="max-w-xl mx-auto">
          <form
            action="mailto:your.email@example.com"
            method="POST"
            encType="text/plain"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <textarea
              name="message"
              rows={4}
              placeholder="Your Message"
              className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8 text-center text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Imad Ali Syed. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400"
          >
            Twitter
          </a>
        </div>
      </footer>
    </main>
  );
}
