import { ReactNode } from 'react';
import { ExternalLinkIcon } from '@/components/icons';

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
    title: "Puctee",
    description: "iOS app to encourage people to prevent being late for appointments with friends",
    longDescription: `
      Transform your time management with Puctee, the social-accountability iOS app that will help you prevent being late for appointments with friends. By allowing you to set predefined penalties when creating events, Puctee harnesses 
      peer pressure and behavioral economics to dramatically improve punctuality. Under the hood, iOS frontend is 
      powered by SwiftUI, while a FastAPI backend running on AWS Lambda and API Gateway powers secure, serverless 
      operations; PostgreSQL on RDS stores your data; and JWT authentication plus push notifications ensure reliable 
      coordination. With its clean, intuitive interface and science-backed approach, Puctee not only helps 
      you arrive on time today—it evolves with you, making every commitment count.
    `,
    image: "/next.svg",
    date: "April 2025 - Present",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/app/your-app-id",
        icon: <ExternalLinkIcon />
      },
      {
        label: "Backend GitHub",
        url: "https://github.com/KojiroTsugaru/puctee-backend",
        icon: <ExternalLinkIcon />
      },
      {
        label: "Frontend GitHub",
        url: "https://github.com/KojiroTsugaru/puctee",
        icon: <ExternalLinkIcon />
      },
    ],
    tech: ["SwiftUI", "FastAPI", "AWS(S3, RDS, Lambda, API Gateway)"]
  },
  {
    title: "Flair",
    description: "AI-powered iOS app to generate reply suggestion from just a screenshot of a chat",
    longDescription: `Flair AI revolutionizes messaging by providing intelligent 
    reply suggestions through screenshot analysis. The app uses OpenAI's GPT models 
    to understand chat context and generate relevant responses. Built with SwiftUI for a 
    seamless iOS experience, it features a custom FastAPI backend deployed on Railway that 
    securely handles API credentials and enables dynamic prompt engineering. The architecture 
    allows for rapid iteration of AI behavior without requiring app updates.`,
    image: "/flair-img.png",
    date: "Feb 2025 - March 2025",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/us/app/%E7%A5%9E%E3%83%AC%E3%82%B9ai-%E3%82%BB%E3%83%B3%E3%82%B9%E3%81%82%E3%82%8B%E8%BF%94%E4%BF%A1%E3%82%92%E4%B8%80%E7%9E%AC%E3%81%A7%E7%94%9F%E6%88%90%E3%81%A7%E3%81%8D%E3%82%8Bai%E3%83%84%E3%83%BC%E3%83%AB/id6741389098",
        icon: <ExternalLinkIcon />
      },
      {
        label: "Backend GitHub",
        url: "https://github.com/KojiroTsugaru/flair-backend",
        icon: <ExternalLinkIcon />
      },
      {
        label: "Frontend GitHub",
        url: "https://github.com/KojiroTsugaru/flair-ios",
        icon: <ExternalLinkIcon />
      },
    ],
    tech: ["SwiftUI", "FastAPI", "Railway", "OpenAI API"]
  },
  {
    title: "Lunon",
    description: "Flutter-based anonynmous social app for closed school community",
    longDescription: `This project showcases 
    the power of Flutter for building 
    cross-platform apps with a 
    modern, intuitive interface. 
    It features a custom backend 
    deployed on Firebase that 
    securely handles user authentication 
    and data storage. The app 
    also includes push notifications 
    to keep users engaged and 
    informed about new content.`,
    image: "/lunon-img.png",
    date: "December 2023 - March 2024",
    links: [
      {
        label: "App Store",
        url: "https://apps.apple.com/gt/app/lunon/id6736573377",
        icon: <ExternalLinkIcon />
      }
    ],
    tech: ["Flutter/Dart", "Firebase(Auth, Firestore, Storage, Messaging)"]
  },
];