import Image from "next/image";
import { Skill } from "@/types";

export default function SkillsGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-items-center">
      {skills.map((skill) => (
        <div
          key={skill.label}
          className="group relative flex flex-col items-center justify-center w-28 h-32 sm:w-32 sm:h-36 cursor-pointer transition-transform duration-200 hover:scale-105"
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
          <div className="relative z-10 flex flex-col items-center justify-center h-full px-2">
            <div className="mb-2 transition-transform duration-200 group-hover:scale-110">
              <Image 
                src={skill.src} 
                alt={skill.label} 
                width={48} 
                height={48}
                className="w-10 h-10 sm:w-12 sm:h-12"
              />
            </div>
            <span className="text-xs sm:text-sm font-semibold text-white text-center leading-tight group-hover:text-blue-200 transition-colors duration-200">
              {skill.label}
            </span>
          </div>
          
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
              background: 'linear-gradient(135deg, #60a5fa, #f472b6)',
            }}
          />
        </div>
      ))}
    </div>
  );
}