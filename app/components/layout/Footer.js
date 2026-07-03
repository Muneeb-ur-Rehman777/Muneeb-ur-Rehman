import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 mt-32">

      <div className="max-w-7xl mx-auto px-6 py-16">

        {/* Top */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">

          <div>

            <h2 className="text-3xl font-black tracking-widest">

              <span className="text-cyan-400">&lt;</span>

              MR

              <span className="text-cyan-400">/&gt;</span>

            </h2>

            <p className="text-slate-400 mt-4 max-w-md leading-7">

              Building software that solves business problems through
              scalable web applications, real-time systems, and modern
              engineering practices.

            </p>

          </div>

          <div className="flex gap-6 text-2xl">

            <a
              href="https://github.com/Muneeb-ur-Rehman777"
              target="_blank"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/muneeb-ur-rehman-4264963b7/"
              target="_blank"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-5">

          <p className="text-slate-500 text-sm">

            © {new Date().getFullYear()} Muneeb Ur Rehman.
            All Rights Reserved.

          </p>

          <a
            href="#"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition"
          >
            Back to Top

            <FaArrowUp />

          </a>

        </div>

      </div>

    </footer>
  );
}