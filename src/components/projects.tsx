"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";

const projects: Project[] = [
  {
    title: "Spotify Popularity Tracker",
    description: "A small web app made for my Bachelors Dissertation. I continued to improve it after graduating since it was a passion project. NOTE: Not yet open to the public due to Spotify restrictions on API usage since it is still considered to be in development mode. Therefore all access needs to be manually added - So if you want to take a look at the website, feel free to email me your Spotify account's email address and I will be happy to add you!",
    images: ["/spotifytracker.png", "/spotifytracker2.png"],
    tech: ["TypeScript", "Node.js", "Express.js", "BootStrap CSS", "Spotify API"],
    site: "https://spotify-popularity-tracker.vercel.app/",
    github: "https://github.com/owainjhughes/spotify-popularity-tracker",
  },
  {
    title: "Secure File Exchange System",
    description: "A secure file exchange client / server system built in Java. Uses AES/RSA for enecryption and MD5/SHA for Hashing / Message Digests.",
    images: ["/javasecure.png"],
    tech: ["Java", "AES", "RSA", "MD5", "SHA"],
    github: "https://github.com/owainjhughes/secure-filetransfer-server",
  },
  {
    title: "COVID-19 ICU Admission Prediction Model",
    description: "A machine learning model to predict ICU admissions during the COVID-19 pandemic. It uses various features from patient data to make predictions. Uses Pandas and NumPy for Data Cleansing, Seaborn for Data Visualisation and PySpark for data processing and analysis. Accuracy: 0.98, F1 Score: 0.97, Precision: 0.96, Recall: 0.98.",
    images: ["/covidmodel.png", "/covidmodel2.png", "/covidmodel3.png", "/covidmodel4.png", "/covidmodel5.png"],
    tech: ["Python", "Jupyter Notebook", "PySpark", "Pandas", "NumPy", "Seaborn"],
    github: "https://github.com/owainjhughes/patient-modelling",
  },
];

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
    <section id="projects" className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16 relative">
      <div className="w-full max-w-6xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-12 text-white text-center">
          Projects
        </h2>
        
        {/* Project Navigation Arrows */}
        <button
          onClick={prevProject}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 text-5xl text-white hover:text-blue-400 transition-colors bg-transparent shadow-none p-0 border-none"
          aria-label="Previous project"
          style={{ background: "none" }}>
          <span>&lt;</span>
        </button>

        {/* Project Content */}
        <div className="w-full max-w-7xl h-[70vh] mx-auto flex flex-col md:flex-row gap-0 items-stretch overflow-hidden">
          {/* Images - left half */}
          <div className="relative flex-shrink-0 w-full md:w-1/2 h-[35vh] md:h-[70vh] flex flex-col items-center justify-center bg-black">
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={project.images[currentImage]}
                alt={project.title}
                fill
                style={{ objectFit: "contain" }}
                className="rounded-none md:rounded-l-2xl shadow-lg bg-black"
                priority/>
            </div>
            {/* Image navigation below image */}
            {project.images.length > 1 && (
              <div className="flex flex-col items-center mt-4">
                <div className="flex flex-row items-center gap-6">
                  <button
                    onClick={prevImage}
                    className="text-3xl text-white hover:text-blue-400 bg-transparent p-0 border-none"
                    aria-label="Previous image"
                    style={{ background: "none" }}>
                    &lt;
                  </button>
                  <div className="flex gap-2">
                    {project.images.map((_, idx) => (
                      <span
                        key={idx}
                        className={`w-3 h-3 rounded-full border border-white ${
                          idx === currentImage
                            ? "bg-gradient-to-r from-blue-400 to-pink-400"
                            : "bg-black"
                        } transition`}/>
                    ))}
                  </div>
                  <button
                    onClick={nextImage}
                    className="text-3xl text-white hover:text-blue-400 bg-transparent p-0 border-none"
                    aria-label="Next image"
                    style={{ background: "none" }}>
                    &gt;
                  </button>
                </div>
                <span className="mt-2 text-xs text-gray-300">
                  {currentImage + 1} / {project.images.length}
                </span>
              </div>
            )}
          </div>
          
          {/* Details - right half */}
          <div className="flex-1 flex flex-col justify-center items-start w-full md:w-1/2 h-full px-8 py-10 bg-black md:rounded-r-2xl">
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
                  className="px-5 py-2 rounded-full bg-white text-black font-semibold shadow hover:bg-gray-200 transition">
                  View Site
                </a>
              )}
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-white text-white font-semibold shadow hover:bg-gray-800 transition">
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
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 text-5xl text-white hover:text-blue-400 transition-colors bg-transparent shadow-none p-0 border-none"
          aria-label="Next project"
          style={{ background: "none" }}>
          <span>&gt;</span>
        </button>
      </div>
    </section>
  );
}