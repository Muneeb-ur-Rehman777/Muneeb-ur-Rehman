import {
  FaBriefcase,
  FaCode,
  FaRocket,
} from "react-icons/fa";

const experience = [
  {
    id: 1,

    icon: <FaBriefcase />,

    title: "Real Client Project",

    company: "City Vets Pet Clinic",

    period: "2025",

    description:
      "Designed and developed a complete veterinary clinic website featuring appointment booking, an online shopping system, service pages, and business-oriented functionality.",
  },

  {
    id: 2,

    icon: <FaCode />,

    title: "PulseChat",

    company: "Personal Project",

    period: "2026 – Present",

    description:
      "Built a real-time messaging platform using Next.js, Node.js, Express.js, MongoDB, Redis, Docker, and Socket.IO while exploring scalable backend architecture and production-ready development practices.",
  },

  {
    id: 3,

    icon: <FaRocket />,

    title: "Learning Journey",

    company: "Punjab University",

    period: "Present",

    description:
      "Currently pursuing a BSIT degree while continuously improving my knowledge through real-world software projects, system design, backend engineering, and solving business problems.",
  },
];

export default experience;