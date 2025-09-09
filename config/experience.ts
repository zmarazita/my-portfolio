import { ValidSkills } from "./constants";

export interface ExperienceInterface {
  id: string;
  position: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | "Present";
  description: string[];
  achievements?: string[];
  publications?: string[];
  skills: ValidSkills[];
  companyUrl?: string; // ✅ keep for single-company roles
  companyUrls?: { label: string; url: string }[]; // ✅ for multi-lab roles
  logo?: string;
}




export const experiences: ExperienceInterface[] = [
{
  id: "psu",
  position: "Graduate Research Assistant",
  company: "OPEN Design Lab and THRED Lab at Penn State",
  location: "State College, PA",
  startDate: new Date("2024-08-01"),
  endDate: "Present",
  description: [
    "Modeling and simulation of anthropometric data to create more ergonomic, inclusive, and accessible products."
  ],
  publications: [
    "Marazita, Z., Chang, M., & Parkinson, M. (2025). Quantifying the spatial requirements of seated individuals. International Journal of Industrial Ergonomics. (under review)",
    "Marazita, Z., & Parkinson, M. (in preparation). Passenger perceptions of seating sufficiency, comfort, and acceptability...",
    "Marazita, Z., Menold, J., & Parkinson, M. (in preparation). An AI-based tool for multivariate design...",
  ],
  skills: ["R", "Solidworks","Python","Data synthesis","MATLAB","Motion Capture"],
  companyUrls: [
    { label: "THRED Lab", url: "https://www.thred.group/" },
    { label: "OPEN Design Lab", url: "https://www.openlab.psu.edu/" },
  ],
  logo: "/experience/psu.png",
},
{
  id: "apple-2024",
  position: "Product Design Analyst Intern",
  company: "Apple Inc.",
  location: "Sunnyvale, CA",
  startDate: new Date("2024-05"),
  endDate: new Date("2024-08"),
  description: [
    "Focused on experimental ergonomics, user research, and anthropometric analysis to guide inclusive hardware sizing and design decisions."
  ],
  achievements: [
    "Led anthropometric landmark analysis and designed experimental hardware with the biomechanics team to inform sizing, shape, SKU-count, and accommodation (patent pending)",
    "Designed and executed user studies to evaluate product accommodation, with emphasis on outlier populations",
    "Selected to present findings to Mike Rockwell, VP of Vision Products",
  ],
  skills: ["Python", "Grasshopper", "Siemens NX", "Rapid prototyping", "JMP"],
  companyUrl: "https://apple.com",
  logo: "/experience/apple.png", // Apple icon
},
{
  id: "apple-2022",
  position: "Product Design Intern",
  company: "Apple Inc.",
  location: "Sunnyvale, CA",
  startDate: new Date("2022-05"),
  endDate: new Date("2022-08"),
  description: [
    "Developed ergonomic hardware innovation for VisionPro through mechanism design, prototyping, and user-centered evaluation",
  ],
  achievements: [
    "Improved ergonomics via mechanism design to accommodate diverse populations (patent pending)",
    "Built and tested iterative prototypes using rapid prototyping techniques",
    "Conducted user studies to down-select over 15 mechanism concepts",
    "Created an adaptable user-study buck for evaluating new hardware design features",
    "Selected out of 15 interns to present findings to Mike Rockwell, Head of TDG",
  ],
  skills: ["Siemens NX", "Rapid prototyping"],
  companyUrl: "https://apple.com",
  logo: "/experience/apple.png", // Apple icon again
},
{
  id: "solar-turbines",
  position: "Mechanical Engineering Intern",
  company: "Solar Turbines (Caterpillar Inc.)",
  location: "San Diego, CA",
  startDate: new Date("2023-05"),
  endDate: new Date("2023-08"),
  description: [
    "Led cost reduction and performance optimization of turbine components through simulation-driven design",
  ],
  achievements: [
    "Reduced cost and improved the design of the Titan 250 Inter-Stage Duct",
    "Optimized material selection using thermal and structural simulations in Ansys FEA",
    "Lowered machining costs by eliminating seal strips and redesigning the duct as a non-segmented ring",
    "Increased efficiency of the Titan 250 test cell via process optimization techniques",
  ],
  skills: ["Ansys", "Creo"],
  companyUrl: "https://www.solarturbines.com/en_US.html",
  logo: "/experience/cat.png", // CAT icon
},

{
  id: "Learning-factory",
  position: "Makerspace Teaching Assistant",
  company: "Learning Factory at Penn State",
  location: "State College, PA",
  startDate: new Date("2024-08"),
  endDate: "Present",
  description: [
    "Managing equipment, training students, and leading hands-on workshops at the makerspace",
  ],
  achievements: [
    "Supervised and maintained woodshop and laser cutter operations in the makerspace",
    "Repaired machines, ordered supplies, and maintained inventory management for the shop",
    "Trained students and researchers on safe and effective use of makerspace tools",
    "Led build nights in the woodshop, teaching participants how to design and build projects",
  ],
  skills: ["CNC Routing", "Lathe","Mill","3D printing","Laser cutting","Textiles","Welding"],
  companyUrl: "https://lf.psu.edu/",
  logo: "/experience/LF.jpeg", // CAT icon
},
]