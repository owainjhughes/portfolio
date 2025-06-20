export default function AboutSection() {
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
              gradientUnits="userSpaceOnUse"
            >
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
        <br />
        <br />
        My favourite thing about software engineering is the distinct combination of logic and creativity it contains. This unique combination drives my passion for software development. Outside of software engineering and my studies, I enjoy music, video games, films, linguistics and hanging out with my friends.
        <br />
        <br />
        Email: owainjhughes@gmail.com
        <br />
        GitHub: <a href="https://github.com/owainjhughes" className="text-blue-400 hover:underline">github.com/owainjhughes</a>
        <br />
        LinkedIn: <a href="https://www.linkedin.com/in/ohdev" className="text-blue-400 hover:underline">https://www.linkedin.com/in/ohdev</a>
      </p>
    </div>
  );
}