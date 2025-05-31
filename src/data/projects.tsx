import { ReactNode } from 'react';
import { GitHubIcon, AppStoreIcon } from '@/components/icons';

export interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  date: string;
  links: {
    label: string;
    url: string;
    icon: ReactNode;
  }[];
  tech: string[];
}

export const projects: Project[] = [
  {
    title: "Project One",
    description: "A beautiful web app with scroll-driven motion and crisp UI.",
    longDescription: "This project showcases modern web development techniques with a focus on user experience and performance. Built with Next.js and Framer Motion, it demonstrates smooth animations and responsive design.",
    image: "/next.svg",
    date: "Jan 2024 - Present",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/app/your-app-id",
        icon: <AppStoreIcon />
      },
      {
        label: "GitHub",
        url: "https://github.com/yourusername/project-one",
        icon: <GitHubIcon />
      },
    ],
    tech: ["Next.js", "React", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Project Two",
    description: "A minimal portfolio site inspired by Apple's product pages.",
    longDescription: "An elegant portfolio website that takes inspiration from Apple's design language. Features include smooth scroll animations, parallax effects, and a clean, minimalist interface.",
    image: "/vercel.svg",
    date: "Dec 2023 - Jan 2024",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/app/your-app-id",
        icon: <AppStoreIcon />
      },
      {
        label: "GitHub",
        url: "https://github.com/yourusername/project-two",
        icon: <GitHubIcon />
      }
    ],
    tech: ["React", "Tailwind CSS", "Framer Motion", "TypeScript"]
  }
]; 