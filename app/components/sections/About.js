import Image from "next/image";
import { FaGraduationCap, FaLaptopCode, FaLightbulb } from "react-icons/fa";

export default function About() {
  const highlights = [
    {
      icon: <FaLaptopCode />,
      title: "Software Development",
      description:
        "I build scalable full-stack applications using the MERN stack with a strong focus on performance, maintainability, and clean architecture.",
    },
    {
      icon: <FaLightbulb />,
      title: "Problem Solving",
      description:
        "I enjoy understanding real business challenges and designing software solutions that improve workflows and create measurable value.",
    },
    {
      icon: <FaGraduationCap />,
      title: "Continuous Learning",
      description:
        "Currently pursuing a BSIT at Punjab University while continuously improving my knowledge through real-world projects and modern technologies.",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 px-6 bg-slate-950 text-white"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-16">

          <p className="text-cyan-400 uppercase tracking-[0.3em] font-semibold">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Solving Business Problems
            <br />
            Through Software
          </h2>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}

          <div className="flex justify-center">

            <div className="relative">

              <Image
                src="/Muneeb.png"
                alt="Muneeb Ur Rehman"
                width={420}
                height={500}
                className="rounded-3xl border border-slate-800 shadow-2xl"
              />

              <div className="absolute -bottom-5 -right-5 bg-cyan-500 text-slate-950 px-6 py-3 rounded-xl font-semibold shadow-lg">
                BSIT Student
              </div>

            </div>

          </div>

          {/* Content */}

          <div>

            <h3 className="text-3xl font-bold mb-6">

              MERN Stack Developer & Problem Solver

            </h3>

            <p className="text-slate-300 leading-8 mb-6">

              I'm <span className="text-white font-semibold">Muneeb Ur Rehman</span>,
              a BS Information Technology student at Punjab University and a
              Full Stack MERN Developer who enjoys building software that solves
              real-world business problems.

            </p>

            <p className="text-slate-300 leading-8 mb-6">

              During my learning journey, I've worked on real projects including
              a veterinary clinic management website with appointment booking,
              e-commerce functionality, and business-focused features. I also
              built <span className="text-cyan-400 font-semibold">PulseChat</span>,
              a real-time messaging platform inspired by modern communication
              systems using Next.js, Node.js, Express, MongoDB, Redis, Docker,
              and Socket.IO.

            </p>

            <p className="text-slate-300 leading-8">

              I'm passionate about understanding how software works behind the
              scenes—from real-time communication and backend architecture to
              scalable systems. My goal isn't just to write code, but to build
              reliable software that helps businesses operate more efficiently.

            </p>

          </div>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-3 gap-8 mt-24">

          {highlights.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <div className="text-4xl text-cyan-400 mb-6">

                {item.icon}

              </div>

              <h3 className="text-xl font-bold mb-4">

                {item.title}

              </h3>

              <p className="text-slate-400 leading-7">

                {item.description}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}