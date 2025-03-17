/**
 * Projects data file
 * Contains information about portfolio projects
 */

/**
 * Projects data configuration
 * Defines structure for portfolio project entries
 * 
 * @see {@link https://github.com/yourusername/portfolioWebsite/blob/main/src/data/README.md Data Management Guidelines}
 */

export interface Project {
  /** Unique identifier for routing */
  id: string;
  /** Project title for display */
  title: string;
  /** Short description for card views */
  description: string;
  /** Detailed project description for individual project pages */
  longDescription?: string;
  /** Array of core technologies used */
  technologies: string[];
  /** Optional path to featured image */
  imageUrl?: string;
  /** GitHub repository URL */
  githubUrl?: string;
  /** Live demo/production URL */
  liveUrl?: string;
  /** Featured project flag for highlighting */
  featured: boolean;
  /** Completion/launch date (YYYY format) */
  date: string;
}

const projects: Project[] = [
  {
    id: "ic-fabrication",
    title: "IC Fabrication Project",
    description: "Fabricated and tested IC chips on a silicon wafer in a cleanroom environment.",
    longDescription: "Fabricated and tested IC chips on a silicon wafer in a cleanroom environment, including MOS transistors (p-MOS, n-MOS, CMOS), ring oscillators, PN junction diodes, diffused capacitors, and Schottky diodes. Gained hands-on experience with semiconductor fabrication processes and developed a deep understanding of device physics and manufacturing processes.",
    technologies: ["Semiconductor fabrication processes"],
    imageUrl: "/images/projects/project1.jpg", // Replace with an appropriate image
    githubUrl: "https://zuabi.dev",
    liveUrl: "https://zuabi.dev",
    featured: true,
    date: "2019" // Approximate date
  },
  {
    id: "fpga-battle-city",
    title: "FPGA Battle City Game Development",
    description: "Programmed a complete Battle City game implementation on an Altera DE2-115 Development Board.",
    longDescription: "Programmed a complete Battle City game implementation on an Altera DE2-115 Development Board, implementing both hardware and software components. Key features: Custom sprite handling system, game logic and AI components, keyboard interface, and multiplayer functionality.",
    technologies: ["FPGA", "hardware-software co-design"],
    imageUrl: "/images/projects/project2.jpg", // Replace with an appropriate image
    githubUrl: "https://github.com/yourusername/project2", // Replace with the correct GitHub URL if available
    liveUrl: "https://project2-demo.example.com", // Replace with a live demo URL if available
    featured: true,
    date: "2018" // Approximate date
  },
  {
    id: "ee-building-illumination",
    title: "Electrical Engineering Building Illumination Project",
    description: "Designed a wireless control system for a 270 glass tube LED installation.",
    longDescription: "Designed a wireless control system for a 270 glass tube LED installation, which included developing embedded control firmware, implementing the DMX512 protocol for LED control, creating an RS485 communication bus, and designing and implementing a custom PCB.",
    technologies: ["Embedded software", "DMX512 protocol", "RS485 communication", "custom PCB design"],
    imageUrl: "/images/projects/project3.jpg", // Replace with an appropriate image
    githubUrl: "https://github.com/yourusername/project3", // Replace with the correct GitHub URL if available
    liveUrl: "https://project3-demo.example.com", // Replace with a live demo URL if available
    featured: false,
    date: "2017" // Approximate date
  }
];

export default projects;