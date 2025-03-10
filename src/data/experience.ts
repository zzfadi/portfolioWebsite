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
    title: "Senior Firmware Engineer",
    company: "SK Hynix Solidigm",
    location: "San Jose, CA",
    startDate: "January 2022",
    endDate: null, // Present
    description: "Led firmware development for AI-optimized enterprise SSDs and new SSD variants.",
    responsibilities: [
      "Led firmware development for AI-optimized enterprise SSDs utilizing SLC architecture.",
      "Developed C++ transport layer firmware for Gen5 PCIe SSDs on proprietary architecture.",
      "Implemented latency monitoring features enabling advanced performance debugging and optimization.",
      "Created memory analysis tools to optimize code distribution across system memories (DRAM, TCM).",
      "Orchestrated cross-functional collaboration between firmware, hardware, validation, and manufacturing teams."
    ],
    technologies: ["C", "C++", "NVMe", "PCIe", "SMBus", "ARM", "Xtensa", "custom TPU architectures", "Lauterbach debugger"]
  },
  {
    title: "Firmware Engineer",
    company: "Intel (NAND Storage Group)",
    location: "Folsom, CA",
    startDate: "June 2021",
    endDate: "December 2021",
    description: "Developed and optimized C firmware for Gen4 PCIe Data Center SSDs.",
    responsibilities: [
      "Specialized in NAND and media management firmware development.",
      "Designed and implemented NAND discovery feature optimizing parallel operations.",
      "Enhanced XOR error correction distribution across channels.",
      "Utilized JTAG debugging with GHS debugger to investigate complex firmware issues."
    ],
    technologies: ["C", "PCIe", "NAND", "JTAG", "GHS debugger"]
  },
  {
    title: "Embedded Software Development Engineer",
    company: "GE Aviation",
    location: "Cincinnati, OH",
    startDate: "August 2019",
    endDate: "June 2021",
    description: "Led the development of interfaces for cellular modems and WiFi routers and implemented multi-threaded software following DO-178C standards.",
    responsibilities: [
      "Led development of interfaces for cellular modem and WiFi router using Linux kernel and C/C++ programming.",
      "Implemented multi-threaded software solutions following DO-178C aviation safety standards.",
      "Managed end-to-end Software Development Life Cycle (SDLC) for the Cellular Module.",
      "Revolutionized the team's static code analysis process by implementing a cloud-based solution.",
      "Created automated testing frameworks using Python and Shell scripting."
    ],
    technologies: ["Linux kernel", "C/C++", "QMI", "AT commands", "USB", "Ethernet", "Python", "Shell scripting", "LDRA"]
  }
];

export default experiences;