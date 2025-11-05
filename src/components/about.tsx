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
            stroke="#60a5fa"
            strokeWidth="4"
            fill="none" />
        </svg>
      </div>
      <h1 className="text-5xl font-extrabold mb-6 text-white tracking-tight md:text-left text-center">
        About Me
      </h1>
      <p className="text-lg text-gray-200 mb-4 max-w-xl md:text-left text-center">
        Hi there! My name is Owain. I&apos;m a Computer Science Masters student and Software Engineer.
        <br />
        <br />
        My favourite thing about software engineering is the distinct combination of logic and creativity it contains. Outside of software engineering and my studies, I like music, video games, films and linguistics.
      </p>
      <div className="flex items-center gap-6 mt-2">
        <a
          href="https://github.com/owainjhughes"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-20 h-20 cursor-pointer transition-transform duration-200 hover:scale-105"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          />

          <div
            className="absolute inset-1 bg-black transition-all duration-300 group-hover:bg-gray-900"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          />

          <div className="relative z-10 transition-transform duration-200 group-hover:scale-110">
            <Image src="/skills/github.png" alt="GitHub" width={48} height={48} className="w-12 h-12" />
          </div>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: 'linear-gradient(135deg, #60a5fa, #f472b6)',
            }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/ohdev"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-20 h-20 cursor-pointer transition-transform duration-200 hover:scale-105"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          />

          <div
            className="absolute inset-1 bg-black transition-all duration-300 group-hover:bg-gray-900"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          />

          <div className="relative z-10 transition-transform duration-200 group-hover:scale-110">
            <Image src="/skills/linkedin.png" alt="LinkedIn" width={48} height={48} className="w-12 h-12" />
          </div>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: 'linear-gradient(135deg, #60a5fa, #f472b6)',
            }}
          />
        </a>

        <button
          onClick={() => setShowEmail(true)}
          className="group relative flex items-center justify-center w-20 h-20 cursor-pointer transition-transform duration-200 hover:scale-105 focus:outline-none"
          aria-label="Show Email"
          type="button"
        >
          <div
            className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          />

          <div
            className="absolute inset-1 bg-black transition-all duration-300 group-hover:bg-gray-900"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
            }}
          />

          <div className="relative z-10 transition-transform duration-200 group-hover:scale-110">
            <Image src="/skills/email.png" alt="Email" width={48} height={48} className="w-12 h-12" />
          </div>

          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: 'linear-gradient(135deg, #60a5fa, #f472b6)',
            }}
          />
        </button>
      </div>
      <EmailModal
        show={showEmail}
        onClose={() => setShowEmail(false)}
        email="owainjhughes@gmail.com" />
    </div>
  );
}