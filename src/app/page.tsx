"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";

const CIRCLE_COUNT = 250;
const CIRCLE_SIZE = 6;
const LINE_RANGE = 60; // px

export default function Home() {
  const [entered, setEntered] = useState(false);
  const [fade, setFade] = useState(false);
  const [circles, setCircles] = useState<
    { left: string; top: string; size: string; delay: string; duration: string; key: string }[]
  >([]);
  const [mouse, setMouse] = useState<{ x: number; y: number } | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Generate circles only on the client after mount
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

  // Track mouse position relative to the container
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
    setTimeout(() => setEntered(true), 500); // match fade-out duration
  };

  if (!entered) {
    return (
      <div
        ref={containerRef}
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
          fade ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
        style={{ overflow: "hidden" }}>
        {/* Animated Circles and Lines */}
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          {/* SVG for lines */}
          {mouse && (
            <svg
              width="100%"
              height="100%"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "100vw",
                height: "100vh",
                pointerEvents: "none",
                zIndex: 1,
              }}>
              {circles.map((circle) => {
                // Calculate circle center in px
                const leftPx =
                  (parseFloat(circle.left) / 100) *
                  (containerRef.current?.offsetWidth || window.innerWidth);
                const topPx =
                  (parseFloat(circle.top) / 100) *
                  (containerRef.current?.offsetHeight || window.innerHeight);
                const dx = mouse.x - leftPx;
                const dy = mouse.y - topPx;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < LINE_RANGE) {
                  return (
                    <line
                      key={circle.key + "-line"}
                      x1={leftPx + CIRCLE_SIZE / 2}
                      y1={topPx + CIRCLE_SIZE / 2}
                      x2={mouse.x}
                      y2={mouse.y}
                      stroke="rgba(96,165,250,0.5)"
                      strokeWidth="1"/>
                  );
                }
                return null;
              })}
            </svg>
          )}
          {/* Circles */}
          {circles.map((circle) => (
            <span
              key={circle.key}
              className="absolute rounded-full bg-gradient-to-r from-blue-400 to-pink-400 opacity-30 animate-bob"
              style={{
                left: circle.left,
                top: circle.top,
                width: circle.size,
                height: circle.size,
                animationDelay: circle.delay,
                animationDuration: circle.duration,
                zIndex: 2,
              }}/>
          ))}
        </div>
        <button
          onClick={handleEnter}
          className="px-10 py-4 rounded-full bg-gradient-to-r from-blue-400 to-pink-400 text-white text-2xl font-bold shadow-lg hover:scale-105 transition-transform z-10">
          Click here to enter
        </button>
        <style jsx global>{`
          @keyframes bob {
            0% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-8px);
            }
            100% {
              transform: translateY(0);
            }
          }
          .animate-bob {
            animation-name: bob;
            animation-timing-function: ease-in-out;
            animation-iteration-count: infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Left: Icon and About */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="mb-8">
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
              <path
                d="M80 30c19.33 0 35 15.67 35 35s-15.67 35-35 35-35-15.67-35-35 15.67-35 35-35zm0 80c30 0 54 12 54 27v13H26v-13c0-15 24-27 54-27z"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"/>
              <defs>
                <linearGradient
                  id="gradient"
                  x1="0"
                  y1="0"
                  x2="160"
                  y2="160"
                  gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60a5fa" />
                  <stop offset="1" stopColor="#f472b6" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h1 className="text-5xl font-extrabold mb-6 text-white tracking-tight md:text-left text-center">
            About Me
          </h1>
          <p className="text-lg text-gray-200 mb-4 max-w-xl md:text-left text-center">
            Hi there! My name is Owain. I&#39;m a Computer Science Masters student with a deep passion for all things software development.
            <br/>
            <br/>
            My favourite thing about software engineering is the distinct combination of logic and creativity it contains. This unique combination drives my passion for software development. Outside of software engineering and my studies, I enjoy music, video games, films, lingustics and hanging out with my friends.
            <br/>
            <br/>
            Email: owainjhughes@gmail.com
          </p>
        </div>
        {/* Right: Skills Grid */}
        <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
          {[
            { src: "/skills/python.png", label: "Python" },
            { src: "/skills/java.png", label: "Java" },
            { src: "/skills/git.png", label: "Git" },
            { src: "/skills/html.png", label: "HTML" },
            { src: "/skills/css.png", label: "CSS" },
            { src: "/skills/sql.png", label: "SQL" },
            { src: "/skills/javascript.png", label: "JavaScript" },
            { src: "/skills/typescript.png", label: "TypeScript" },
            { src: "/skills/react.png", label: "React" },
            { src: "/skills/nextjs.png", label: "Next.js" },
            { src: "/skills/nodejs.png", label: "Node.js" },
            { src: "/skills/express.png", label: "Express.js" },
          ].map((skill) => (
            <div
              key={skill.label}
              className="flex flex-col items-center bg-black rounded-xl p-4 w-32 h-32 justify-center border-[2px] border-transparent"
              style={{
                borderImage: "linear-gradient(135deg, #60a5fa, #f472b6) 1",
              }}
            >
              <Image src={skill.src} alt={skill.label} width={48} height={48} />
              <span className="mt-3 font-semibold">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}