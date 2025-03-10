/**
 * Experience data file
 * Contains work history information
 */

export interface Experience {
  title: string;
  company: string;
  location?: string;
  startDate: string;
  endDate: string | null; // null means "Present"
  description?: string;
  responsibilities: string[];
  technologies?: string[];
}

const experiences: Experience[] = [
  {
    title: "Senior Software Engineer",
    company: "Company Name",
    location: "San Francisco, CA",
    startDate: "2020",
    endDate: null, // Present
    description: "Led development of key features for the company's flagship product.",
    responsibilities: [
      "Led development of key features for the company's flagship product",
      "Mentored junior developers and conducted code reviews",
      "Implemented CI/CD pipelines to improve deployment efficiency"
    ],
    technologies: ["React", "TypeScript", "Node.js", "AWS"]
  },
  {
    title: "Software Developer",
    company: "Previous Company",
    location: "San Francisco, CA",
    startDate: "2018",
    endDate: "2020",
    description: "Developed and maintained web applications using React and Node.js.",
    responsibilities: [
      "Developed and maintained web applications using React and Node.js",
      "Collaborated with design team to implement responsive UI components",
      "Optimized database queries to improve application performance"
    ],
    technologies: ["React", "JavaScript", "Node.js", "MongoDB"]
  }
];

export default experiences; 