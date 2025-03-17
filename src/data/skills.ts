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
    name: "Languages",
    skills: [
      { name: "C/C++", description: "Embedded systems focus, modern C++14/17" },
      { name: "Python", description: "Automation & testing" },
      { name: "Shell Scripting", description: "Bash, build scripting" },
    ],
    colorClass: "orange-500"
  },
  {
    name: "Operating Systems",
    skills: [
      { name: "Linux" },
      { name: "Proprietary Firmware OS" },
      { name: "RTOS" },
      { name: "Embedded Systems" },
    ],
    colorClass: "teal-500"
  },
  {
    name: "DevOps/Tools",
    skills: [
      { name: "Git" },
      { name: "Perforce" },
      { name: "SVN" },
      { name: "GHS Debugger" },
      { name: "Lauterbach" },
      { name: "Google Test" },
      { name: "Jenkins" },
      { name: "CI/CD" },
      { name: "LDRA" },
      { name: "Coverity" },
    ],
    colorClass: "blue-500"
  },
  {
    name: "Hardware Interfaces & Protocols",
    skills: [
      { name: "NVMe" },
      { name: "PCIe" },
      { name: "SMBus" },
      { name: "QMI" },
      { name: "USB" },
      { name: "Ethernet" },
      { name: "ARM CPUs" },
      { name: "Custom TPUs" },
      { name: "NAND controllers" },
    ],
    colorClass: "purple-500"
  },
  {
    name: "Standards Compliance",
    skills: [
      { name: "MISRA C/C++" },
      { name: "DO-178C" },
    ],
    colorClass: "green-500"
  },
  {
    name: "Real-time Systems",
    skills: [
      { name: "RTOS design and implementation" },
    ],
    colorClass: "red-500"
  },
  {
    name: "Boot Systems",
    skills: [
      { name: "Secure boot" },
      { name: "Firmware update systems" },
    ],
    colorClass: "yellow-500"
  },
  {
    name: "Debug",
    skills: [
      { name: "JTAG" },
      { name: "SWD" },
      { name: "Logic analyzers" },
      { name: "Firmware logging systems" },
    ],
    colorClass: "gray-500"
  },
  {
    name: "Analysis & Testing",
    skills: [
      { name: "LDRA" },
      { name: "Coverity" },
      { name: "MISRA compliance" },
      { name: "Google Test" },
      { name: "Custom frameworks" },
    ],
    colorClass: "pink-500"
  }
];

// Simple flat array of all skills for simple listings
export const allSkills: string[] = skills.flatMap(category =>
  category.skills.map(skill => skill.name)
);

export default skills;