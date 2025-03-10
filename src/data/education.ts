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
  description: string;
  achievements?: string[];
}

const education: Education[] = [
  {
    degree: "Bachelor of Science in Electrical Engineering",
    institution: "University of Illinois at Urbana-Champaign",
    startYear: "2014",
    endYear: "2019",
    description: "Focus on Embedded Systems and Computer Engineering",
  }
];

export default education;