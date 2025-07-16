"use client";
import React, { useState, useEffect, useRef } from "react";
import AboutSection from "@/components/about";
import SkillsGrid from "@/components/skillgrid";
import ProjectsSection from "@/components/projects";
import AnimatedBackground from "@/components/background";
import { Skill } from "@/types";

const CIRCLE_COUNT = 250;
const CIRCLE_SIZE = 6;

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
  const [entered, setEntered] = useState(false);
  const [fade, setFade] = useState(false);
  const [circles, setCircles] = useState<
    { left: string; top: string; size: string; delay: string; duration: string; key: string }[]>([]);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generated = Array.from({ length: CIRCLE_COUNT }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${CIRCLE_SIZE}px`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 2}s`,
      key: `circle-${i}`,
    }));
    setCircles(generated);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleEnter = () => {
    setFade(true);
    // Show header when entering
    const header = document.getElementById('main-header');
    if (header) {
      header.style.display = 'block';
    }
    setTimeout(() => setEntered(true), 500);
  };

  useEffect(() => {
    // Hide header initially
    const header = document.getElementById('main-header');
    if (header && !entered) {
      header.style.display = 'none';
    }
  }, [entered]);

  useEffect(() => {
    if(!entered) {
      skills.forEach(skill => {
        const img = new Image();
        img.src = skill.src;
      });
    }
  }, [entered]);

  return (
    <div className="bg-black relative">
      {/* Main Content - Always Rendered */}
      <div className="bg-black">
        {/* About & Skills Section */}
        <section id="about" className={`min-h-screen bg-black text-white flex items-center justify-center px-4 ${entered ? 'pt-20 pb-16' : 'py-16'}`}>
          <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
            <AboutSection />
            <SkillsGrid skills={skills} />
          </div>
        </section>

        {/* Projects Section */}
        <ProjectsSection />
      </div>

      {/* Animated Background Overlay */}
      {!entered && (
        <AnimatedBackground
          circles={circles}
          mouse={mouse}
          containerRef={containerRef}
          onEnter={handleEnter}
          fade={fade}/>
      )}
    </div>
  );
}