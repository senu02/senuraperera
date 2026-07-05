export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  date: string; // e.g. "July 5, 2026"
  readTime?: string; // e.g. "5 min read"
}

export const blogPosts: BlogPost[] = [
  {
    slug: "getting-started-with-nextjs",
    title: "Getting Started with Next.js 15",
    description:
      "A practical walkthrough of setting up a modern Next.js project — routing, server components, and the App Router patterns I use in real projects, explained from the ground up for developers making the jump from plain React.",
    image: "/images/blog/nextjs-15.jpg",
    tags: ["Next.js", "React", "Web Development"],
    date: "June 12, 2026",
    readTime: "6 min read",
  },
  {
    slug: "building-responsive-uis-with-tailwind",
    title: "Building Responsive UIs with Tailwind CSS",
    description:
      "How I approach responsive design using Tailwind's utility classes, breakpoints, and container queries — with real examples pulled from my own portfolio and client projects.",
    image: "/images/blog/tailwind-responsive.jpg",
    tags: ["Tailwind CSS", "CSS", "UI Design"],
    date: "May 28, 2026",
    readTime: "5 min read",
  },
  {
    slug: "react-state-management-2026",
    title: "React State Management in 2026",
    description:
      "Comparing built-in hooks, Context, and lightweight external libraries to help you decide when you actually need a state management library — and when you don't.",
    image: "/images/blog/react-state.jpg",
    tags: ["React", "JavaScript"],
    date: "May 10, 2026",
    readTime: "7 min read",
  },
  {
    slug: "figma-to-code-workflow",
    title: "My Figma-to-Code Workflow",
    description:
      "A behind-the-scenes look at how I take a design from Figma and turn it into a pixel-accurate, responsive front-end — including the handoff details that save the most time.",
    image: "/images/blog/figma-to-code.jpg",
    tags: ["Figma", "UI/UX", "Frontend"],
    date: "April 22, 2026",
    readTime: "4 min read",
  },
];
