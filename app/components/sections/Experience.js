import { FaBriefcase, FaCode, FaRocket } from "react-icons/fa";

const experience = [
  {
    icon: <FaBriefcase />,
    title: "Real Client Project",
    company: "City Vets Pet Clinic",
    period: "2025",
    description:
      "Designed and developed a complete business website for a veterinary clinic with appointment booking, online shopping, and business-focused functionality to improve customer experience and streamline operations.",
  },
  {
    icon: <FaCode />,
    title: "Personal Project",
    company: "PulseChat",
    period: "2026 - Present",
    description:
      "Built a real-time messaging application using Next.js, Node.js, Express, MongoDB, Redis, Docker, and Socket.IO. Implemented authentication, file sharing, groups, typing indicators, online presence, and scalable backend architecture while continuing to expand the platform.",
  },
  {
    icon: <FaRocket />,
    title: "Current Focus",
    company: "Software Engineering",
    period: "Present",
    description:
      "Learning system design and building software that solves business problems through scalable backend systems and modern web technologies.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-slate-950 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <p className="uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Experience
          </p>

          <h2 className="text-5xl font-bold mt-4">
            My Journey
          </h2>
        </div>

        <div className="space-y-8">

          {experience.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <div className="flex gap-6">

                <div className="text-cyan-400 text-3xl mt-1">
                  {item.icon}
                </div>

                <div className="flex-1">

                  <div className="flex flex-col md:flex-row md:justify-between">

                    <div>
                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-cyan-400 mt-1">
                        {item.company}
                      </p>
                    </div>

                    <span className="text-slate-400 mt-3 md:mt-0">
                      {item.period}
                    </span>

                  </div>

                  <p className="text-slate-300 mt-6 leading-8">
                    {item.description}
                  </p>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}