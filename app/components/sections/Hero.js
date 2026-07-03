import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="bg-slate-950">

      {/* Hero Section */}
      <div className="min-h-screen flex items-center px-6">

        <div className="max-w-7xl mx-auto w-full">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT */}

            <div>

              <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold mb-5">
                MERN STACK DEVELOPER
              </p>

              <h1 className="text-5xl md:text-7xl font-black leading-tight">

                Building Software

                <br />

                That Solves

                <span className="text-cyan-400">
                  {" "}Business Problems
                </span>

              </h1>

              <p className="text-slate-300 text-lg leading-9 mt-10 max-w-2xl">

                Hi, I'm{" "}
                <span className="font-semibold text-white">
                  Muneeb Ur Rehman
                </span>
                .

                A MERN Stack Developer and BSIT student at Punjab University
                who enjoys designing scalable software, solving real business
                challenges, and building modern web applications with clean
                architecture.

              </p>

              {/* Buttons */}

              <div className="flex flex-wrap gap-5 mt-12">

                <a
                  href="#projects"
                  className="bg-cyan-500 hover:bg-cyan-400 transition px-7 py-4 rounded-xl text-slate-950 font-semibold flex items-center gap-3"
                >
                  View Projects
                  <FaArrowRight />
                </a>

                <a
                  href="#contact"
                  className="border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition px-7 py-4 rounded-xl"
                >
                  Contact Me
                </a>

              </div>

              {/* Social Links */}

              <div className="flex gap-8 mt-12">

                <a
                  href="https://github.com/Muneeb-ur-Rehman777"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-slate-400 hover:text-cyan-400 transition"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/muneeb-ur-rehman-4264963b7/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-slate-400 hover:text-cyan-400 transition"
                >
                  <FaLinkedin />
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex justify-center">

              <div className="relative">

                <Image
                  src="/Muneeb.png"
                  alt="Muneeb Ur Rehman"
                  width={430}
                  height={500}
                  priority
                  className="rounded-3xl border border-slate-800"
                />

                {/* Floating Card */}

                <div className="absolute bottom-6 left-6 bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-2xl">

                  <p className="text-cyan-400 text-sm font-semibold">
                    CURRENTLY BUILDING
                  </p>

                  <h3 className="text-xl font-bold mt-2">
                    PulseChat
                  </h3>

                  <p className="text-slate-400 mt-2">
                    Real-Time Messaging Platform
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

            <h2 className="text-4xl font-bold text-cyan-400">
              2+
            </h2>

            <p className="text-slate-400 mt-3">
              Major Projects
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

            <h2 className="text-4xl font-bold text-cyan-400">
              1
            </h2>

            <p className="text-slate-400 mt-3">
              Real Client Project
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

            <h2 className="text-4xl font-bold text-cyan-400">
              MERN
            </h2>

            <p className="text-slate-400 mt-3">
              Primary Stack
            </p>

          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition">

            <h2 className="text-4xl font-bold text-cyan-400">
              BSIT
            </h2>

            <p className="text-slate-400 mt-3">
              Punjab University
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}