import {
  FaComments,
  FaHospital,
} from "react-icons/fa";

const projects = [
  {
    id: 1,

    icon: <FaComments />,

    title: "PulseChat",

    subtitle: "Real-Time Messaging Platform",

    description:
      "A modern messaging platform inspired by WhatsApp, built to explore real-time communication, scalable backend architecture, and modern software engineering practices.",

    technologies: [
      "JavaScript",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redis",
      "Docker",
      "Socket.IO",
    ],

    features: [
      "Email Authentication",
      "Real-Time Messaging",
      "Group Chats",
      "Typing Indicator",
      "Online / Offline Status",
      "Last Seen",
      "Profile Picture",
      "Image Sharing",
      "File Sharing",
      "JWT Authentication",
      "Change Display Name",
    ],

    future: [
      "End-to-End Encryption",
      "Voice Messages",
      "Audio & Video Calls",
      "Status Updates",
      "Message Reactions",
      "Linked Devices",
      "Delete Messages",
      "Message Info",
      "Chat Backup",
      "Settings Panel",
    ],

    github: "https://github.com/Muneeb-ur-Rehman777",

    live: "#",

    featured: true,
  },

  {
    id: 2,

    icon: <FaHospital />,

    title: "City Vets Pet Clinic",

    subtitle: "Business Website",

    description:
      "Developed a production website for a veterinary clinic including appointment booking, online shopping, pet services, and business-focused functionality.",

    technologies: [
      "JavaScript",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
    ],

    features: [
      "Appointment Booking",
      "Online Shop",
      "Pet Services",
      "Business Website",
      "Responsive Design",
      "Modern UI",
    ],

    future: [],

    github: "#",

    live: "https://cityvetspetclinic.com/",

    featured: false,
  },
];

export default projects;