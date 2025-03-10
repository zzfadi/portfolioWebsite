/**
 * Projects data file
 * Contains information about portfolio projects
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  date: string;
}

const projects: Project[] = [
  {
    id: "project-one",
    title: "Project One",
    description: "Short description of the project goes here.",
    longDescription: "A more detailed description of the project that explains the problem solved, approach taken, and technologies used.",
    technologies: ["React", "Node.js"],
    imageUrl: "/images/projects/project1.jpg",
    githubUrl: "https://github.com/yourusername/project1",
    liveUrl: "https://project1-demo.example.com",
    featured: true,
    date: "2023-12"
  },
  {
    id: "project-two",
    title: "Project Two",
    description: "Short description of the project goes here.",
    longDescription: "A more detailed description of the project that explains the problem solved, approach taken, and technologies used.",
    technologies: ["Next.js", "TypeScript"],
    imageUrl: "/images/projects/project2.jpg",
    githubUrl: "https://github.com/yourusername/project2",
    liveUrl: "https://project2-demo.example.com",
    featured: true,
    date: "2023-10"
  },
  {
    id: "project-three",
    title: "Project Three",
    description: "Another interesting project with its own unique challenges and solutions.",
    longDescription: "This project focused on solving X problem by implementing Y solution using Z technologies.",
    technologies: ["Vue.js", "Express", "MongoDB"],
    imageUrl: "/images/projects/project3.jpg",
    githubUrl: "https://github.com/yourusername/project3",
    liveUrl: "https://project3-demo.example.com",
    featured: false,
    date: "2023-08"
  }
];

export default projects; 