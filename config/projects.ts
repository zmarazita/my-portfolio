import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date | "Present";
  companyLogoImg: string;
  descriptionDetails?: DescriptionDetailsInterface;
  pagesInfoArr?: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "apple-adaptive-band",
    companyName: "Adaptive Band Mechanism",
    type: "Professional",
    category: ["Product Design", "Ergonomics"],
    shortDescription:
      "Developed adaptive band mechanisms for Apple VisionPro to improve ergonomics across diverse populations.",
    startDate: new Date("2022-05-01"),
    endDate: new Date("2022-09-01"),
    techStack: ["Prototyping", "User Studies", "Anthropometry"],
    companyLogoImg: "/projects/apple/adaptive-band.webp",
    descriptionDetails: {
      paragraphs: [
        "As part of the VisionPro team at Apple, I led the design and evaluation of adaptive band mechanisms to ensure comfort and accommodation across diverse head shapes and sizes.",
      ],
      bullets: [
        "Designed and prototyped adaptive band mechanisms for VisionPro (patent pending).",
        "Evaluated over 15 mechanism concepts through iterative prototyping and user studies.",
        "Collaborated with industrial design, soft-goods, and R&D teams to refine ergonomic performance.",
      ],
    },
  },
  {
    id: "apple-anthropometric",
    companyName: "Anthropometric Analysis for Product Sizing Recommendations",
    type: "Professional",
    category: ["Anthropometry", "Ergonomics"],
    shortDescription:
      "Conducted anthropometric analysis and experimental hardware design to inform hardware sizing and accommodation.",
    startDate: new Date("2024-05-01"),
    endDate: new Date("2024-09-01"),
    techStack: ["Anthropometry", "User Studies", "Prototyping"],
    companyLogoImg: "/projects/apple/face.png",
    descriptionDetails: {
      paragraphs: [
        "Worked with the biomechanics and ergonomics teams at Apple to analyze anthropometric landmarks and design experimental rigs that informed key hardware sizing decisions.",
      ],
      bullets: [
        "Led anthropometric analysis and experimental hardware design (patent pending).",
        "Designed and executed user studies to evaluate accommodation for outlier populations.",
        "Presented results to VP Mike Rockwell, Vision Products.",
      ],
    },
  },
  {
    id: "senior-design-zurn",
    companyName: "Thermostatic Mixing Valve",
    type: "Professional",
    category: ["Senior Design", "Design"],
    shortDescription:
      "Designed a thermostatic faucet system to deliver consistent water temperature and improve user safety.",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-05-01"),
    techStack: ["Solidworks", "CAD", "Prototyping"],
    companyLogoImg: "/projects/Zurn/thermostatic.png",
    descriptionDetails: {
      paragraphs: [
        "As part of my senior design capstone, I worked with Zurn to design and prototype a thermostatic faucet system that maintains consistent outlet temperatures for public restrooms. Our team won first place in the senior design competition.",
      ],
      bullets: [
        "Developed faucet prototypes in Solidworks and built test rigs for validation.",
        "Conducted testing and modeling to optimize temperature regulation.",
        "Delivered final design recommendations to Zurn engineering; project won first place.",
      ],
    },
  },
  {
    id: "psu-biomechanics",
    companyName: "Shod vs. Unshod Running Analysis",
    type: "Professional",
    category: ["Biomechanics", "Motion Analysis"],
    shortDescription:
      "Analyzed kinematics of shod vs. unshod running using motion capture and force plate data.",
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-04-01"),
    techStack: ["MATLAB", "Biomechanics", "Motion Capture"],
    companyLogoImg: "/projects/psu/running.png",
    descriptionDetails: {
      paragraphs: [
        "Course project comparing biomechanics of running with and without shoes.",
      ],
      bullets: [
        "Captured 3D motion and ground reaction forces using a Vicon system and force plates.",
        "Processed motion data in MATLAB to analyze joint angles and forces.",
        "Compared ankle and foot dynamics across shod and unshod conditions.",
      ],
    },
  },
  {
    id: "openlab-ai-tool",
    companyName: "AI-driven Multivariate Design Assistant",
    type: "Professional",
    category: ["AI", "Anthropometry", "Design Tools"],
    shortDescription:
      "Built an AI-driven accommodation tool that translates natural language into ergonomic design recommendations.",
    startDate: new Date("2025-05-01"),
    endDate: "Present",
    techStack: ["Python", "Anthropometry", "Statistical Modeling"],
    companyLogoImg: "/projects/psu/heat_map.png",
    descriptionDetails: {
      paragraphs: [
        "Developed a multivariate accommodation tool that interprets product sizing prompts into anthropometry-based design specifications.",
      ],
      bullets: [
        "Implemented a natural language interface for design query handling.",
        "Integrated population datasets for accommodation analysis.",
        "Generated visualizations (heatmaps, CDFs) for design recommendations.",
      ],
    },
  },
  {
    id: "solar-interstage-duct",
    companyName: "Interstage Duct Redesign",
    type: "Professional",
    category: ["Aerospace", "Mechanical Design"],
    shortDescription:
      "Redesigned the Titan 250 Inter-Stage Duct to reduce cost and improve performance.",
    startDate: new Date("2023-05-01"),
    endDate: new Date("2023-09-01"),
    techStack: ["ANSYS FEA", "Simulation", "CAD"],
    companyLogoImg: "/projects/Solar_Turbines/titan_250.jpg",
    descriptionDetails: {
      paragraphs: [
        "Engineering project at SolarTurbines focused on redesigning the Titan 250 Inter-Stage Duct to lower costs and improve manufacturability.",
      ],
      bullets: [
        "Optimized material selection using thermal and structural simulations in ANSYS FEA.",
        "Eliminated seal strips by redesigning as a non-segmented ring, reducing machining costs.",
        "Improved test cell efficiency through process optimization.",
      ],
    },
  },
  {
    id: "charcuterie-board",
    companyName: "Wooden Charcuterie Boards",
    type: "Personal",
    category: ["Woodworking", "Design"],
    shortDescription:
      "Designed and fabricated custom wooden charcuterie boards using makerspace tools.",
    startDate: new Date("2024-10-01"),
    endDate: "Present",
    techStack: ["Woodworking", "CNC Routing", "Laser cutting"],
    companyLogoImg: "/projects/psu/boards.png",
    descriptionDetails: {
      paragraphs: [
        "A personal design-build project focused on woodworking and aesthetic detailing.",
      ],
      bullets: [
        "Designed custom charcuterie board shapes and detailing.",
        "Used CNC routing, sanding, and finishing techniques.",
        "Laser-engraved custom graphics for personalization.",
      ],
    },
  },
  {
    id: "openlab-airplane-seat",
    companyName: "Airplane Seating Study",
    type: "Professional",
    category: ["Ergonomics", "User Studies"],
    shortDescription:
      "Conducted experimental study on airplane seat width sufficiency and passenger comfort.",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2025-05-01"),
    techStack: ["User Studies", "Statistical Modeling"],
    companyLogoImg: "/projects/psu/airplane.png",
    descriptionDetails: {
      paragraphs: [
        "Graduate research study on passenger perceptions of seat width sufficiency, acceptability, and comfort across varied load factors.",
      ],
      bullets: [
        "Ran an experimental study with an adjustable seat apparatus.",
        "Collected sufficiency, acceptability, and comfort ratings across seat widths.",
        "Analyzed effects of demographics and load factor on seat comfort.",
      ],
    },
  },
  {
    id: "openlab-assistive",
    companyName: "Hands-free Leg Rehabilitation Device",
    type: "Professional",
    category: ["Assistive Technology", "Product Design"],
    shortDescription:
      "Designed and tested an assistive device for hands-free rehabilitation.",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-11-01"),
    techStack: ["User Studies", "CAD", "3D printing"],
    companyLogoImg: "/projects/psu/assistive.png",
    descriptionDetails: {
      paragraphs: [
        "Class project to develop a hands-free solution for leg rehabilitation to improve user mobility.",
      ],
      bullets: [
        "Collected user feedback on existing rehabilitation devices and conducted competitor analysis.",
        "Prototyped and tested the device using a 3D-printed assembly.",
      ],
    },
  },
  {
    id: "apple-card_fixture",
    companyName: "Test Fixture Machine for Card Deflection",
    type: "Professional",
    category: ["Product Design"],
    shortDescription:
      "Designed a test fixture to analyze the force required to deflect a credit card.",
    startDate: new Date("2022-04-01"),
    endDate: new Date("2022-04-05"),
    techStack: ["Solidworks", "CAE"],
    companyLogoImg: "/projects/apple/challenge.png",
    descriptionDetails: {
      paragraphs: ["Design challenge to create a card test fixture."],
      bullets: [
        "Ran baseline deformation calculations.",
        "Built the test fixture assembly in Solidworks.",
      ],
    },
  },
  {
    id: "thredlab-amazon",
    companyName: "Sentiment Analysis of Reviews to Inform Product Sizing",
    type: "Professional",
    category: ["Sentiment Analysis", "Product Sizing"],
    shortDescription:
      "Developed a sentiment analysis framework for Amazon reviews to inform product sizing decisions.",
    startDate: new Date("2025-01-15"),
    endDate: new Date("2025-05-01"),
    techStack: ["Python", "R", "Statistical Modeling"],
    companyLogoImg: "/projects/psu/amazon.png",
    descriptionDetails: {
      paragraphs: [
        "Built a framework linking consumer sentiment with product accommodation using anthropometric analysis and Amazon reviews.",
      ],
      bullets: [
        "Scraped and filtered Amazon reviews for ergonomics-relevant products.",
        "Performed sentiment analysis and exploratory modeling in R and Python.",
        "Correlated sentiment trends with product sizing and accommodation levels.",
      ],
    },
  },
  {
    id: "phone-charging",
    companyName: "Phone Charging Station",
    type: "Personal",
    category: ["CAD", "Design for Additive Manufacturing"],
    shortDescription:
      "Designed a phone charging stand that mounts to outlets.",
    startDate: new Date("2025-03-01"),
    endDate: new Date("2025-04-01"),
    techStack: ["3D printing", "CAD", "Design for Additive Manufacturing"],
    companyLogoImg: "/projects/psu/stand.png",
    descriptionDetails: {
      paragraphs: [
        "Personal project focused on printable geometry and everyday usability.",
      ],
      bullets: [
        "Designed a compact, printable stand for common phone sizes.",
        "Iterated geometry for cable management and stability.",
      ],
    },
  },
  {
    id: "cast-mug",
    companyName: "Aluminum Cast PSU Mug",
    type: "Personal",
    category: ["Metal Casting"],
    shortDescription: "Cast an aluminum mug at the Penn State foundry lab.",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-04-15"),
    techStack: ["Metal casting", "Prototyping"],
    companyLogoImg: "/projects/psu/mug.png",
    descriptionDetails: {
      paragraphs: [
        "Hands-on foundry experience with mold making and finishing.",
      ],
      bullets: [
        "Prepared mold and runners; poured aluminum safely under supervision.",
        "Post-processed and finished the casting.",
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
