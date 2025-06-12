export interface Skill {
  src: string;
  label: string;
}

export interface AnimatedBackgroundProps {
  circles: {
    left: string;
    top: string;
    size: string;
    delay: string;
    duration: string;
    key: string;
  }[];
  mouse: { x: number; y: number } | null;
  containerRef: React.RefObject<HTMLDivElement | null>;
  onEnter: () => void;
  fade: boolean;
}

export interface Project {
  title: string;
  description: string;
  images: string[];
  tech: string[];
  site?: string;
  github: string;
}