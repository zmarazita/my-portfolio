// config/constants.ts

// --- Canonical list of skills (source of truth) ---
export const SKILLS = [
  // --- Existing web/dev skills ---
  "Next.js",
  "React",
  "GraphQL",
  "Nest.js",
  "express.js",
  "Node.js",
  "MongoDB",
  "Typescript",
  "Javascript",
  "HTML 5",
  "CSS 3",
  "React Native",
  "Angular",
  "Redux",
  "Socket.io",
  "Material UI",
  "Tailwind CSS",
  "AWS",
  "Bootstrap",
  "Google Auth",
  "MySQL",
  "Java",
  "Databricks",
  "Python",
  "Docker",
  "Kubernetes",
  "PostgreSQL",
  "Redis",
  "Git",
  "CI/CD",
  "Jenkins",
  "FastAPI",
  "Django",
  "Vue.js",
  "Sass",
  "Firebase",
  "Azure",
  "Google Cloud",
  "Figma",
  "Webpack",
  "Jest",
  "Cypress",
  "Storybook",
  "Prisma",
  "Supabase",
  "Vercel",
  "Netlify",
  "Three.js",
  "WebGL",
  "TensorFlow",
  "PyTorch",
  "Spring Boot",
  "Laravel",
  "PHP",
  "Flutter",
  "Dart",
  "Flask",
  "SQL",
  "NoSQL",
  "Framer Motion",

  // --- Added mech / data / CAD / CAE skills ---
  "R",
  "MATLAB",
  "Solidworks",
  "Siemens NX",
  "Creo",
  "Onshape",
  "Fusion 360",
  "Rhino",
  "Grasshopper",
  "ANSYS FEA",
  "Ansys",
  "Motion Capture",
  "JMP",
  "Data synthesis",
  "Rapid prototyping",
  "3D printing",
  "CAD",
  "CAE",
  "Woodworking",
  "Simulation",
  "Design for Additive Manufacturing",
  "CNC Routing",
  "Lathe",
  "Mill",
  "Laser cutting",
  "Textiles",
  "Welding",
  "Prototyping",
  "Metal casting",
  "User Studies",
  "Statistical Modeling",
  "Anthropometry",
  "Biomechanics"
] as const;

export type ValidSkills = (typeof SKILLS)[number];

// --- Pages (canonical list) ---
export const PAGES = [
  "home",
  "skills",
  "projects",
  "experience",
  "contact",
  "about",
  "resume",
] as const;

export type ValidPages = (typeof PAGES)[number];

// --- Categories / Experience type ---
export type ValidCategory =
  | "Full Stack"
  | "Frontend"
  | "Backend"
  | "UI/UX"
  | "Web Dev"
  | "Mobile Dev"
  | "Product Design"
  | "Ergonomics"
  | "Human Factors"
  | "Research"
  | "Analytics"
  | "Data Analysis"
  | "CAD"
  | "CAE"
  | "Senior Design"
  | "Prototyping"
  | "Anthropometry"
  | "Biomechanics"
  | "Motion Analysis"
  | "AI"
  | "Design Tools"
  | "Simulation"
  | "Aerospace"
  | "Mechanical Design"
  | "Woodworking"
  | "Design"
  | "User Studies"
  | "Assistive Technology"
  | "Sentiment Analysis"
  | "Product Sizing"
  | "Metal Casting"
  | "Design for Additive Manufacturing"
  | "Manufacturing"
  | "3D Modeling";

export type ValidExpType = "Personal" | "Professional";
