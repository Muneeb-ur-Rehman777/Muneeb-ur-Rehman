import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 px-6 bg-slate-950"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center">

          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Contact
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Let's Work Together
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto mt-6 leading-8">
            If you're looking for a MERN Stack Developer who enjoys building
            scalable software and solving real business problems, I'd be happy
            to connect.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-20">

          <a
            href="mailto:your-email@example.com"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 transition"
          >
            <FaEnvelope className="mx-auto text-4xl text-cyan-400 mb-5" />

            <h3 className="text-xl font-bold">
              Email
            </h3>

            <p className="text-slate-400 mt-3 break-all">
              ch361054@gmail.com
            </p>

          </a>

          <a
            href="https://github.com/Muneeb-ur-Rehman777"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 transition"
          >
            <FaGithub className="mx-auto text-4xl text-cyan-400 mb-5" />

            <h3 className="text-xl font-bold">
              GitHub
            </h3>

            <p className="text-slate-400 mt-3">
              github.com/Muneeb-ur-Rehman777
            </p>

          </a>

          <a
            href="https://www.linkedin.com/in/muneeb-ur-rehman-4264963b7/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center hover:border-cyan-400 transition"
          >
            <FaLinkedin className="mx-auto text-4xl text-cyan-400 mb-5" />

            <h3 className="text-xl font-bold">
              LinkedIn
            </h3>

            <p className="text-slate-400 mt-3">
              Connect with me
            </p>

          </a>

        </div>

      </div>
    </section>
  );
}