"use client";

import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-950/70 border-b border-slate-800">
      <nav className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">

        {/* Logo */}

        <Link
          href="/"
          className="text-3xl font-black tracking-widest text-white"
        >
          <span className="text-cyan-400">&lt;</span>
          MR
          <span className="text-cyan-400">/&gt;</span>
        </Link>

        {/* Navigation */}

        <div className="hidden md:flex items-center gap-10">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-cyan-400 transition duration-300"
            >
              {link.name}
            </a>
          ))}

        </div>

        {/* Right Side */}

        <div className="flex items-center gap-5">

          <a
            href="https://github.com/Muneeb-ur-Rehman777/"
            target="_blank"
            className="text-xl text-slate-300 hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/muneeb-ur-rehman-4264963b7/"
            target="_blank"
            className="text-xl text-slate-300 hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="#contact"
            className="hidden md:flex bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-5 py-2 rounded-xl font-semibold transition"
          >
            Let's Talk
          </a>

        </div>

      </nav>
    </header>
  );
}c