"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";

const projects: Project[] = [
  {
    title: "ObuCon",
    description: "Online web application that determines the suitability of an online text-based resource, such as a short story or newspaper article, for people learning a non-native language.",
    images: ["/obucon1.png", "/obucon2.png"],
    tech: ["Go (Gin, GORM)", "React", "TailWind CSS", "PostgreSQL", "Docker", "Terraform", "AWS (EC2, RDS)"],
    site: "https://obucon.com",
    github: "https://github.com/owainjhughes/obucon"
  },
  {
    title: "Discogrify",
    description: "A web app that allows a user to view and sort critical ratings and reviews of the saved albums on Spotify. NOTE: Due to the 13/05/25 changes made to the Spotify API, this app cannot be given an unlimited user quota since I am an individual not an organization. Therefore, all access needs to be manually added - So if you want to take a look at the website, feel free to email me your Spotify account's email address and I will be happy to add you! Or alternatively, use the test account if you just want to test the features. Email: discogrifytest@gmail.com Pass: discogrifytest!",
    images: ["/discog1.png", "/discog2.png", "/discog3.png"],
    tech: ["TypeScript", "Node.js", "Express.js", "BootStrap CSS", "PostgreSQL", "RESTful APIs (Discogs, Spotify)"],
    site: "https://discogrify.vercel.app/",
    github: "https://github.com/owainjhughes/discogrify"
  },
  {
    title: "Secure File Exchange System",
    description: "A secure file exchange client / server system built in Java. Uses AES/RSA for enecryption and MD5/SHA for Hashing / Message Digests.",
    images: ["/javasecure.png"],
    tech: ["Java", "AES", "RSA", "MD5", "SHA"],
    github: "https://github.com/owainjhughes/secure-filetransfer-server"
  },
  {
    title: "COVID-19 ICU Admission Prediction Model",
    description: "A machine learning model to predict ICU admissions during the COVID-19 pandemic. It uses various features from patient data to make predictions. Uses Pandas and NumPy for Data Cleansing, Seaborn for Data Visualisation and PySpark for data processing and analysis. Accuracy: 0.98, F1 Score: 0.97, Precision: 0.96, Recall: 0.98.",
    images: ["/covidmodel.png", "/covidmodel2.png", "/covidmodel3.png", "/covidmodel4.png", "/covidmodel5.png"],
    tech: ["Python", "Jupyter Notebook", "PySpark", "Pandas", "NumPy", "Seaborn"],
    github: "https://github.com/owainjhughes/patient-modelling"
  },
    {
    title: "Linux CLI Clone",
    description: "A Linux command line interface clone built using C++. Mimics basing linux commands such as cd and mkdir, built using a tree-like linked list data structure. (It's a CLI, so not much to have an image of so here's a picture of young Mr Krabs instead)",
    images: ["/Youngmrkrab.png"],
    tech: ["C++"],
    github: "https://github.com/owainjhughes/linux-filesystem-clone"
  },
];

// Arrows
function Arrow({ dir, className }: { dir: "left" | "right"; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}>
      <polyline points={dir === "left" ? "15 18 9 12 15 6" : "9 18 15 12 9 6"} />
    </svg>
  );
}

export default function ProjectsSection() {
  const [current, setCurrent] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  const project = projects[current];

  function handleProjectChange(newIndex: number) {
    setCurrent(newIndex);
    setCurrentImage(0);
  }

  const prevProject = () => {
    handleProjectChange(current === 0 ? projects.length - 1 : current - 1);
  };

  const nextProject = () => {
    handleProjectChange(current === projects.length - 1 ? 0 : current + 1);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section id="projects" className="min-h-screen bg-neutral-950 text-white flex items-center justify-center px-4 py-16 relative">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-white text-center">
          Projects
        </h2>

        {/* Navigation Arrows */}
        <button
          onClick={prevProject}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/5 text-white hover:bg-blue-400 hover:text-black transition-colors border border-white/10"
          aria-label="Previous project">
          <Arrow dir="left" className="w-6 h-6" />
        </button>

        {/* Main Content */}
        <div className="w-full max-w-7xl h-[80vh] mx-auto flex flex-col md:flex-row gap-0 items-stretch overflow-hidden">
          <div className="relative flex-shrink-0 w-full md:w-1/2 h-[42vh] md:h-[80vh] flex flex-col items-center justify-center bg-neutral-900 md:rounded-l-2xl p-5 md:p-10">
            <div className="relative w-full h-full flex items-center justify-center">
              {projects.flatMap((p, pIdx) =>
                p.images.map((src, iIdx) => (
                  <Image
                    key={src}
                    src={src}
                    alt={p.title}
                    fill
                    style={{ objectFit: "contain" }}
                    className={`rounded-none md:rounded-l-2xl shadow-lg bg-neutral-900 ${
                      pIdx === current && iIdx === currentImage ? "" : "opacity-0 pointer-events-none"
                    }`}
                    priority={pIdx === 0} />
                ))
              )}
            </div>
            {project.images.length > 1 && (
              <div className="flex flex-col items-center mt-4">
                <div className="flex flex-row items-center gap-6">
                  <button
                    onClick={prevImage}
                    className="text-white hover:text-blue-400 transition-colors"
                    aria-label="Previous image">
                    <Arrow dir="left" className="w-5 h-5" />
                  </button>
                  <div className="flex gap-2">
                    {project.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-3 h-3 rounded-full border border-white ${idx === currentImage
                            ? "bg-blue-400"
                            : "bg-black"
                          } transition`} />
                    ))}
                  </div>
                  <button
                    onClick={nextImage}
                    className="text-white hover:text-blue-400 transition-colors"
                    aria-label="Next image">
                    <Arrow dir="right" className="w-5 h-5" />
                  </button>
                </div>
                <span className="mt-2 text-xs text-gray-300">
                  {currentImage + 1} / {project.images.length}
                </span>
              </div>
            )}
          </div>

          <div className="flex-1 flex flex-col justify-center items-start w-full md:w-1/2 h-full px-8 py-10 bg-neutral-900 md:rounded-r-2xl">
            <h3 className="text-4xl font-extrabold mb-4 text-white">{project.title}</h3>
            <p className="text-lg text-gray-200 mb-6">{project.description}</p>
            <div className="mb-6">
              <span className="font-semibold text-white flex items-center mb-2">Tech Stack:</span>
              <ul className="list-disc list-inside text-gray-200 ml-2">
                {project.tech.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="flex gap-4 mt-2">
              {project.site && (
                <a
                  href={project.site}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2 rounded-full bg-blue-400 text-white font-semibold shadow hover:bg-blue-500 transition">
                  View Site
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-blue-400 text-blue-400 font-semibold shadow hover:bg-blue-400 hover:text-white transition">
                GitHub
              </a>
            </div>
            <span className="text-sm text-gray-400 mt-6">
              {current + 1} / {projects.length}
            </span>
          </div>
        </div>

        <button
          onClick={nextProject}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/5 text-white hover:bg-blue-400 hover:text-black transition-colors border border-white/10"
          aria-label="Next project">
          <Arrow dir="right" className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
}