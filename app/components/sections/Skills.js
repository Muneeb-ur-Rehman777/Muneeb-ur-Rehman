import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiRedis,
  SiSocketdotio,
  SiTailwindcss,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript className="text-yellow-400 text-4xl" />,
      },
      {
        name: "Next.js",
        icon: <SiNextdotjs className="text-white text-4xl" />,
      },
      {
        name: "React",
        icon: <FaReact className="text-cyan-400 text-4xl" />,
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss className="text-sky-400 text-4xl" />,
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: <FaNodeJs className="text-green-500 text-4xl" />,
      },
      {
        name: "Express.js",
        icon: <SiExpress className="text-white text-4xl" />,
      },
      {
        name: "Socket.IO",
        icon: <SiSocketdotio className="text-white text-4xl" />,
      },
      {
        name: "Redis",
        icon: <SiRedis className="text-red-500 text-4xl" />,
      },
    ],
  },

  {
    title: "Database & DevOps",
    skills: [
      {
        name: "MongoDB",
        icon: <SiMongodb className="text-green-500 text-4xl" />,
      },
      {
        name: "Docker",
        icon: <FaDocker className="text-blue-400 text-4xl" />,
      },
      {
        name: "Git & GitHub",
        icon: <FaGithub className="text-white text-4xl" />,
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-28 bg-slate-950 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold">

            Skills

          </p>

          <h2 className="text-5xl font-bold mt-4">

            Technologies I Work With

          </h2>

          <p className="text-slate-400 mt-6 max-w-3xl mx-auto leading-8">

            I focus on building scalable web applications using modern
            JavaScript technologies while continuously improving my
            understanding of software engineering and backend systems.

          </p>

        </div>

        {/* Categories */}

        <div className="space-y-12">

          {skillCategories.map((category) => (

            <div
              key={category.title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-8"
            >

              <h3 className="text-2xl font-bold mb-8">

                {category.title}

              </h3>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

                {category.skills.map((skill) => (

                  <div
                    key={skill.name}
                    className="bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:border hover:border-cyan-400 transition-all duration-300 hover:-translate-y-2"
                  >

                    {skill.icon}

                    <p className="font-medium text-center">

                      {skill.name}

                    </p>

                  </div>

                ))}

              </div>

            </div>

          ))}

        </div>

        {/* Learning Section */}

        <div className="mt-20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-10">

          <h3 className="text-3xl font-bold">

            Currently Exploring

          </h3>

          <p className="text-slate-300 mt-5 leading-8">

            Beyond my current MERN stack expertise, I'm actively learning
            concepts that help build production-ready software, including
            system design, scalable architectures, event-driven systems,
            application security, and software design patterns.

          </p>

          <div className="flex flex-wrap gap-4 mt-8">

            {[
              "System Design",
              "Software Architecture",
              "Event-Driven Systems",
              "Application Security",
              "Scalable Backend",
              "Performance Optimization",
            ].map((item) => (
              <span
                key={item}
                className="px-5 py-3 rounded-full bg-slate-800"
              >
                {item}
              </span>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}