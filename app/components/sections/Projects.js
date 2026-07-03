import {
  FaGithub,
  FaExternalLinkAlt,
  FaComments,
  FaHospital,
} from "react-icons/fa";

const projects = [
  {
    icon: <FaComments />,
    title: "PulseChat",
    subtitle: "Real-Time Messaging Platform",
    description:
      "PulseChat is a modern messaging application inspired by platforms like WhatsApp. It focuses on scalable real-time communication, efficient backend architecture, and delivering a smooth user experience.",

    technologies: [
      "JavaScript",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Docker",
      "Socket.IO",
    ],

    features: [
      "Email Authentication",
      "One-to-One Chat",
      "Group Chats",
      "Typing Indicator",
      "Online / Offline Status",
      "Last Seen",
      "Profile Picture",
      "Image Sharing",
      "File Sharing",
      "Change Name",
      "JWT Authentication",
    ],

    future: [
      "End-to-End Encryption",
      "Voice Messages",
      "Audio & Video Calls",
      "Status Updates",
      "Linked Devices",
      "Delete Messages",
      "Message Info",
      "Chat Backup",
    ],

    github: "#",
    live: "#",
  },

  {
    icon: <FaHospital />,
    title: "City Vets Pet Clinic",

    subtitle: "Business Website",

    description:
      "Developed a complete business website for a veterinary clinic featuring appointment booking, online shopping, service management, and an intuitive user experience tailored to business needs.",

    technologies: [
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Tailwind CSS",
    ],

    features: [
      "Appointment Booking",
      "Online Shop",
      "Pet Services",
      "Responsive Design",
      "Business Dashboard",
      "Modern UI",
    ],

    github: "#",

    live: "https://cityvetspetclinic.com/",

    future: [],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-28 px-6 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[0.35em] text-cyan-400 font-semibold">
            Projects
          </p>

          <h2 className="text-5xl font-bold mt-4">
            Building Solutions,
            <br />
            Not Just Applications
          </h2>

          <p className="text-slate-400 max-w-3xl mx-auto mt-6 leading-8">

            Every project represents a problem solved, a lesson learned,
            and another step toward building production-ready software.

          </p>

        </div>

        <div className="space-y-16">

          {projects.map((project, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-10 hover:border-cyan-400 transition duration-300"
            >

              {/* Header */}

              <div className="flex items-center gap-5">

                <div className="text-4xl text-cyan-400">

                  {project.icon}

                </div>

                <div>

                  <h3 className="text-3xl font-bold">

                    {project.title}

                  </h3>

                  <p className="text-cyan-400 mt-2">

                    {project.subtitle}

                  </p>

                </div>

              </div>

              {/* Description */}

              <p className="text-slate-300 leading-8 mt-8">

                {project.description}

              </p>

              {/* Technologies */}

              <div className="mt-10">

                <h4 className="font-semibold text-xl mb-5">

                  Technologies

                </h4>

                <div className="flex flex-wrap gap-3">

                  {project.technologies.map((tech) => (

                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-slate-800 text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

              {/* Features */}

              <div className="mt-10">

                <h4 className="font-semibold text-xl mb-5">

                  Key Features

                </h4>

                <div className="grid md:grid-cols-2 gap-4">

                  {project.features.map((feature) => (

                    <div
                      key={feature}
                      className="bg-slate-800 rounded-xl p-4"
                    >
                      {feature}
                    </div>

                  ))}

                </div>

              </div>

              {/* Future */}

              {project.future.length > 0 && (

                <div className="mt-10">

                  <h4 className="font-semibold text-xl mb-5">

                    Future Improvements

                  </h4>

                  <div className="grid md:grid-cols-2 gap-4">

                    {project.future.map((item) => (

                      <div
                        key={item}
                        className="bg-slate-800 rounded-xl p-4"
                      >
                        {item}
                      </div>

                    ))}

                  </div>

                </div>

              )}

              {/* Buttons */}

              <div className="flex gap-5 mt-12">

                <a
                  href={project.github}
                  className="flex items-center gap-3 bg-slate-800 hover:bg-slate-700 transition px-6 py-3 rounded-xl"
                >
                  <FaGithub />

                  GitHub

                </a>

                <a
                  href={project.live}
                  target="_blank"
                  className="flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 transition text-slate-950 px-6 py-3 rounded-xl font-semibold"
                >
                  <FaExternalLinkAlt />

                  Live Demo

                </a>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}