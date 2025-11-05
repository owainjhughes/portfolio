"use client";
import React, { useEffect } from "react";
import AboutSection from "@/components/about";
import SkillsGrid from "@/components/skillgrid";
import ProjectsSection from "@/components/projects";
import { Skill } from "@/types";

const skills: Skill[] = [
  { src: "/skills/python.png", label: "Python" },
  { src: "/skills/java.png", label: "Java" },
  { src: "/skills/sql.png", label: "SQL" },
  { src: "/skills/docker.png", label: "Docker" },
  { src: "/skills/kubernetes.png", label: "Kubernetes" },
  { src: "/skills/git.png", label: "Git" },
  { src: "/skills/javascript.png", label: "JavaScript" },
  { src: "/skills/typescript.png", label: "TypeScript" },
  { src: "/skills/react.png", label: "React" },
  { src: "/skills/nextjs.png", label: "Next.js" },
  { src: "/skills/nodejs.png", label: "Node.js" },
  { src: "/skills/express.png", label: "Express.js" },
];

export default function Home() {
  useEffect(() => {
    // Preload skill images
    skills.forEach(skill => {
      const img = new Image();
      img.src = skill.src;
    });
  }, []);

  return (
    <div className="bg-black">
      <section id="about" className="min-h-screen bg-black text-white flex items-center justify-center px-4 pt-20 pb-16">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
          <AboutSection />
          <SkillsGrid skills={skills} />
        </div>
      </section>
      <ProjectsSection />
    </div>
  );
}