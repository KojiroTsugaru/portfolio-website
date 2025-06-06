import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[60vh] w-full bg-gradient-to-b from-black to-zinc-900 py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-screen-2xl px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col items-center gap-8 max-w-3xl mx-auto">
          <div className="rounded-full overflow-hidden shadow-2xl w-32 h-32 sm:w-40 sm:h-40 bg-zinc-800 flex items-center justify-center ring-1 ring-zinc-700">
            <Image src="/profile-image.jpg" alt="Profile" width={180} height={180} className="w-32 h-32 sm:w-40 sm:h-40 object-cover scale-110" />
          </div>
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white">Kojiro Tsugaru</h1>
            <p className="text-base sm:text-lg text-zinc-400 mb-6">
              I&apos;m an iOS & backend developer studying Computer Science at UC Berkeley, <br />
              passionate about building efficient, scalable systems and seamless mobile experiences.
            </p>  
            
            {/* Social Links */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <div className="flex items-center justify-center gap-6">
                <a
                  href="https://linkedin.com/in/kojiro-tsugaru-a53bb7207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/KojiroTsugaru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
              <span className="text-zinc-400 text-sm">ktsugaru@berkeley.edu</span>
            </div>

            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block rounded-full bg-white text-black px-6 py-3 text-base font-semibold hover:bg-zinc-200 transition-colors"
            >
              View Projects
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 