import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-16">
      <section className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-16">
        {/* Left: Icon and About */}
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="mb-8">
            <svg width="160" height="160" viewBox="0 0 160 160" fill="none">
              <path
                d="M80 30c19.33 0 35 15.67 35 35s-15.67 35-35 35-35-15.67-35-35 15.67-35 35-35zm0 80c30 0 54 12 54 27v13H26v-13c0-15 24-27 54-27z"
                stroke="url(#gradient)" strokeWidth="4" fill="none"/>
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="160" y2="160" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#60a5fa"/>
                  <stop offset="1" stopColor="#f472b6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* About Text */}
          <h1 className="text-5xl font-extrabold mb-6 text-white tracking-tight md:text-left text-center">
            About Me
          </h1>
          <p className="text-lg text-gray-200 mb-4 max-w-xl md:text-left text-center">
            Hi there! My name is Owain. I&#39;m a Computer Science Masters student with a deep passion for all things software development.
            <br/><br/>
              My favourite thing about software engineering is the distinct combination of logic and creativity it contains. This unique combination drives my passion for software development. Outside of software engineering and my studies, I enjoy music, video games, films, lingustics and hanging out with my friends.
            <br/><br/>
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
              }}>
              <Image src={skill.src} alt={skill.label} width={48} height={48} />
              <span className="mt-3 font-semibold">{skill.label}</span>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}