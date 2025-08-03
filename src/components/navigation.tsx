"use client";

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Navigation() {
  return (
    <nav className="flex gap-8">
      <button
        onClick={() => scrollToSection('about')}
        className="font-medium px-2 py-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer">
        About
      </button>
      <button
        onClick={() => scrollToSection('projects')}
        className="font-medium px-2 py-1 rounded hover:bg-black/5 dark:hover:bg-white/10 transition-colors cursor-pointer">
        Projects
      </button>
    </nav>
  );
}