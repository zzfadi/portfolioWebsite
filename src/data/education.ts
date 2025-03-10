/**
 * Education data file
 * Contains educational background information
 */

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  startYear: string;
  endYear: string;
  description?: string;
  achievements?: string[];
}

const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University Name",
    location: "City, State",
    startYear: "2014",
    endYear: "2018",
    description: "Graduated with honors. Specialized in software engineering and web development.",
    achievements: [
      "Dean's List all semesters",
      "Senior thesis on web application optimization",
      "President of Computer Science Club"
    ]
  },
  {
    degree: "Web Development Bootcamp",
    institution: "Tech Academy",
    location: "Online",
    startYear: "2019",
    endYear: "2019",
    description: "Intensive 12-week program focused on modern web development technologies."
  }
];

export default education; 