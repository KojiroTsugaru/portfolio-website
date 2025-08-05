import Image from "next/image";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Project {
  title: string;
  description: string;
  longDescription: string;
  image: string;
  links: {
    label: string;
    url: string;
    icon: ReactNode;
  }[];
  tech: string[];
  date: string;
}

interface ProjectsProps {
  projects: Project[];
}

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section className="w-full bg-black py-16 sm:py-24 flex flex-col items-center" id="projects">
      <div className="max-w-screen-2xl w-full px-8 sm:px-12 lg:px-16 xl:px-20">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 sm:mb-16 text-white text-center">
          Projects
        </h2>
        
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="mb-16 sm:mb-24 last:mb-0 px-6 sm:px-8 lg:px-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="order-2 md:order-1 text-center md:text-left">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                  <span className="text-sm text-zinc-500">{project.date}</span>
                </div>
                <p className="text-sm italic text-zinc-400 mb-3">{project.description}</p>
                <div className="border-b border-zinc-700 w-16 mb-4" />
                <p className="text-base sm:text-lg text-zinc-300 mb-4 sm:mb-6">{project.longDescription}</p>
                <div className="mb-4 sm:mb-6">
                  <h4 className="text-base sm:text-lg font-semibold mb-2 text-white">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                    {project.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-zinc-800 rounded-full text-sm text-zinc-300 ring-1 ring-zinc-700">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  {project.links.map((link, linkIndex) => (
                    <a
                      key={linkIndex}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-white font-medium hover:text-zinc-300 transition-colors group"
                    >
                      {link.label}
                      <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        {link.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <motion.div 
                className="order-1 md:order-2 flex justify-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <div className="relative w-full max-w-[500px] aspect-[4/3] rounded-2xl overflow-hidden group">
                  {/* Glass-like background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 to-zinc-800/50 backdrop-blur-sm" />
                  
                  {/* Subtle border gradient */}
                  <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-br from-zinc-700/50 to-zinc-900/50">
                    <div className="absolute inset-0 rounded-2xl bg-black/50" />
                  </div>

                  {/* Image container */}
                  <div className="relative w-full h-full rounded-2xl overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-contain p-4 sm:p-8 transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 