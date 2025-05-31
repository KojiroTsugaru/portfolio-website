// page.tsx
// Single-page portfolio with about and project sections.
'use client';

import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-black text-white">
      <About />
      <Projects projects={projects} />
      <Footer />
    </main>
  );
}
