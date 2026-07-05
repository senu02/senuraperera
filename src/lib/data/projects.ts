export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  type: "Group Project" | "Individual Project";
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "online-pharmacy",
    title: "Online Pharmacy",
    description:
      "A user-friendly online pharmacy platform enabling seamless prescription uploads, secure medication ordering, convenient payment options, direct customer support, and detailed user reviews.",
    image: "/images/projects/online-pharmacy.jpg",
    tags: ["HTML", "CSS", "PHP"],
    type: "Group Project",
    featured: true,
  },
  {
    slug: "micro-service-center",
    title: "Micro Service Center",
    description:
      "A vehicle service management system built as a website for a vehicle service center, covering bookings and service tracking.",
    image: "/images/projects/micro-service-center.jpg",
    tags: ["React Js", "HTML", "CSS", "JavaScript", "Figma"],
    type: "Group Project",
    githubUrl: "https://github.com/senu02/MicroService.git",
    featured: true,
  },
  {
    slug: "ecobin",
    title: "EcoBin: Smart Waste Management",
    description:
      "A smart waste management website that promotes efficient waste disposal and recycling for communities.",
    image: "/images/projects/ecobin.jpg",
    tags: ["React Js", "Node.js", "Spring Boot", "JavaScript", "Tailwind CSS"],
    type: "Group Project",
    githubUrl: "https://github.com/senu02/EcoBin.git",
    featured: true,
  },
  {
    slug: "learn-lab",
    title: "Learn Lab: SkillShare Platform",
    description:
      "A collaborative web-based platform designed for users to share and track skills with peers.",
    image: "/images/projects/learn-lab.jpg",
    tags: ["React Js", "Spring Boot", "JavaScript", "Java"],
    type: "Group Project",
    githubUrl: "https://github.com/RavinduThilinaka/Learn-lab.git",
  },
  {
    slug: "festivo",
    title: "Festivo: Event Planning Website",
    description:
      "A website built for seamless event planning and management, from scheduling to guest coordination.",
    image: "/images/projects/festivo.jpg",
    tags: ["React Js", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
    type: "Group Project",
    githubUrl: "https://github.com/senu02/EventPlan.git",
  },
  {
    slug: "mindful-moments",
    title: "Mindful Moments: UI/UX Design",
    description:
      "A mobile application concept designed to enhance mental well-being through guided mindfulness and meditation practices.",
    image: "/images/projects/mindful-moments.jpg",
    tags: ["Figma"],
    type: "Individual Project",
  },
  {
    slug: "task-master",
    title: "Task Master",
    description:
      "A user-friendly task management mobile application designed to help users efficiently organize and track their daily tasks.",
    image: "/images/projects/task-master.jpg",
    tags: ["Android Studio"],
    type: "Individual Project",
  },
  {
    slug: "note-master",
    title: "Note Master",
    description:
      "A mobile application that enables users to create, view, update, and delete personal notes.",
    image: "/images/projects/note-master.jpg",
    tags: ["Android Studio", "SQLite"],
    type: "Individual Project",
  },
];
