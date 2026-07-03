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

const skills = [
  {
    title: "Frontend",
    items: [
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
    items: [
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
    items: [
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

export default skills;