/**
 * Skills data file
 * Contains technical skills organized by category
 */

export interface Skill {
  name: string;
  level?: number; // 0-100
  icon?: string;
  description?: string;
}

export interface SkillCategory {
  name: string;
  skills: Skill[];
  colorClass?: string; // For UI styling (e.g., "orange-500" for Tailwind)
}

const skills: SkillCategory[] = [
  {
    name: "Frontend Development",
    skills: [
      { name: "JavaScript", level: 90, icon: "javascript" },
      { name: "TypeScript", level: 85, icon: "typescript" },
      { name: "React", level: 90, icon: "react" },
      { name: "Next.js", level: 85, icon: "nextjs" },
      { name: "HTML/CSS", level: 95, icon: "html" },
      { name: "Tailwind CSS", level: 90, icon: "tailwind" }
    ],
    colorClass: "orange-500"
  },
  {
    name: "Backend Development",
    skills: [
      { name: "Node.js", level: 85, icon: "nodejs" },
      { name: "Express", level: 80, icon: "express" },
      { name: "MongoDB", level: 75, icon: "mongodb" },
      { name: "PostgreSQL", level: 80, icon: "postgresql" },
      { name: "REST APIs", level: 90 },
      { name: "GraphQL", level: 75, icon: "graphql" }
    ],
    colorClass: "teal-500"
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Git", level: 85, icon: "git" },
      { name: "Docker", level: 70, icon: "docker" },
      { name: "AWS", level: 75, icon: "aws" },
      { name: "CI/CD", level: 80 },
      { name: "Jest", level: 75, icon: "jest" }
    ],
    colorClass: "blue-500"
  }
];

// Simple flat array of all skills for simple listings
export const allSkills: string[] = skills.flatMap(category => 
  category.skills.map(skill => skill.name)
);

export default skills; 