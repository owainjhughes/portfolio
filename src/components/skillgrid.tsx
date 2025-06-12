import Image from "next/image";
import { Skill } from "@/types";

export default function SkillsGrid({ skills }: { skills: Skill[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 justify-items-center">
      {skills.map((skill) => (
        <div
          key={skill.label}
          className="flex flex-col items-center bg-black rounded-xl p-4 w-32 h-32 justify-center border-[2px] border-transparent"
          style={{
            borderImage: "linear-gradient(135deg, #60a5fa, #f472b6) 1",}}>
          <Image src={skill.src} alt={skill.label} width={48} height={48} />
          <span className="mt-3 font-semibold">{skill.label}</span>
        </div>
      ))}
    </div>
  );
}