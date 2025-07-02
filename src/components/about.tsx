import Image from "next/image";
import React, { useState } from "react";
import EmailModal from "./email";

export default function AboutSection() {
  const [showEmail, setShowEmail] = useState(false);

  return (
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
        Hi there! My name is Owain. I&#39;m a Computer Science Masters student and Software Engineer.
        <br />
        <br />
        My favourite thing about software engineering is the distinct combination of logic and creativity it contains. I am currently gaining DevOps experience applying certain practices to my solo coding projects (Docker, Kubernetes, Terraform, AWS etc.). Outside of software engineering and my studies, I like music, video games, films and linguistics.
      </p>
      <span className="flex items-center gap-4 mt-2">
        <a href="https://github.com/owainjhughes" target="_blank" rel="noopener noreferrer">
          <Image src="/skills/github.png" alt="GitHub" width={64} height={64}/>
        </a>
        <a href="https://www.linkedin.com/in/ohdev" target="_blank" rel="noopener noreferrer">
          <Image src="/skills/linkedin.png" alt="LinkedIn" width={64} height={64}/>
        </a>
        <button
          onClick={() => setShowEmail(true)}
          className="bg-transparent border-none p-0 m-0 focus:outline-none"
          aria-label="Show Email"
          type="button">
          <Image src="/skills/email.png" alt="Email" width={64} height={64}/>
        </button>
      </span>
      <EmailModal
        show={showEmail}
        onClose={() => setShowEmail(false)}
        email="owainjhughes@gmail.com"/>
    </div>
  );
}