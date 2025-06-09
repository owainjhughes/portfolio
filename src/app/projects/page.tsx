"use client";

import { useState } from "react";
import Image from "next/image";

const projects = [
  {
    title: "Spotify Popularity Tracker",
    description: "A small web app made for my Bachelors Dissertation. I continued to improve it after graduating since it was a passion project. NOTE: Not yet open to the public due to Spotify restrictions on API usage since it is still considered to be in development mode. Therefore all access needs to be manually added - So if you want to take a look at the website, feel free to email me your Spotify accounts email address and I will be happy to add you!",
    image: "/spotify-tracker.png",
    tech: ["TypeScript", "Node.js", "Express.js", "BootStrap CSS", "Spotify API"],
    site: "https://spotify-popularity-tracker.vercel.app/",
    github: "https://github.com/owainjhughes/spotify-popularity-tracker",
  },
  {
    title: "Secure File Exchange System",
    description: "A secure file exchange client/server system built in Java. Uses AES/RSA for enecryption and MD5/SHA for Hashing / Mssage Digests.",
    image: "/javasecure.png",
    tech: ["Java", "AES", "RSA", "MD5", "SHA"],
    github: "https://github.com/owainjhughes/secure-filetransfer-server",
  },
  {
  title: "COVID-19 ICU Admission Prediction Model",
  description: "A machine learning model to predict ICU admissions during the COVID-19 pandemic. It uses various features from patient data to make predictions. Uses Pandas and NumPy for Data Cleansing, Seaborn for Data Visualisation and PySpark for data processing and analysis. Accuracy: 0.98, F1 Score: 0.97, Precision: 0.96, Recall: 0.98.",
  image: "/covidmodel.png",
  tech: ["Python", "Jupyter Notebook", "PySpark", "Pandas", "NumPy", "Seaborn"],
  github: "https://github.com/owainjhughes/patient-modelling",
},
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  const project = projects[current];

  return (
    <main className="min-h-screen bg-white dark:bg-black flex items-center justify-center px-4 py-16 relative">
      {/* Left Arrow */}
      <button
        onClick={prevProject}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full p-5 shadow transition"
        aria-label="Previous project"
      >
        <span className="text-3xl">&#8592;</span>
      </button>

      {/* Project Layout*/}
      <section className="w-full max-w-5xl h-[80vh] mx-auto flex flex-col md:flex-row gap-10 items-center overflow-hidden">
        {/* Project Image */}
        <div className="flex-shrink-0 w-full md:w-1/2 flex justify-center items-center h-full">
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover w-full max-w-sm h-72 md:h-[70vh] bg-gray-200 dark:bg-gray-800"/>
        </div>
        {/* Project Details */}
        <div className="flex-1 flex flex-col justify-center items-start w-full md:w-1/2 h-full">
          <h2 className="text-4xl font-extrabold mb-4 text-black dark:text-white">{project.title}</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{project.description}</p>
          <div className="mb-6">
            <span className="font-semibold text-black dark:text-white flex items-center mb-2">
              <span className="mr-2" role="img" aria-label="tools">🛠</span>Tech Stack:
            </span>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 ml-2">
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
                className="px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow hover:bg-gray-800 dark:hover:bg-gray-200 transition">
                View Site
              </a>
            )}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full border border-black dark:border-white text-black dark:text-white font-semibold shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition">
              GitHub
            </a>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400 mt-6">
            {current + 1} / {projects.length}
          </span>
        </div>
      </section>

      {/* Right Arrow */}
      <button
        onClick={nextProject}
        className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-full p-5 shadow transition"
        aria-label="Next project"
      >
        <span className="text-3xl">&#8594;</span>
      </button>
    </main>
  );
}