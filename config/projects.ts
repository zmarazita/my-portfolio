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
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
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
    techStack: ["Prototyping", "User Studies", "Patent Pending"],
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
    category: ["Senior Design", "Product Development"],
    shortDescription:
      "Designed a thermostatic faucet system to deliver consistent water temperature and improve user safety.",
    startDate: new Date("2023-10-01"),
    endDate: new Date("2024-05-01"),    
    techStack: ["SolidWorks", "CAD", "Prototyping"],
    companyLogoImg: "/projects/Zurn/thermostatic.png",
    descriptionDetails: {
      paragraphs: [
        "As part of my senior design capstone, I worked with Zurn to design and prototype a thermostatic faucet system that maintains consistent outlet temperatures for public restrooms. Our team won first place in the senior design competition.",
      ],
      bullets: [
        "Developed faucet prototypes in SolidWorks and built test rigs for validation.",
        "Conducted thermal performance testing to optimize temperature regulation.",
        "Delivered final design recommendations to Zurn engineering team, winning first place for our porject.",
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
    techStack: ["MATLAB", "Motion Analysis", "Biomechanics"],
    companyLogoImg: "/projects/psu/running.png",
    descriptionDetails: {
      paragraphs: [
        "Course project comparing biomechanics of running with and without shoes.",
      ],
      bullets: [
        "Captured 3D motion and ground reaction forces using Vicon system and force plates.",
        "Processed motion data in MATLAB to analyze joint angles and forces.",
        "Compared ankle and foot dynamics across shod and unshod conditions.",
      ],
    },
  },
    {
    id: "openlab-ai-tool",
    companyName: "AI-driven Mutlivariate Design Assistant",
    type: "Professional",
    category: ["AI", "Anthropometry", "Design Tools"],
    shortDescription:
      "Built an AI-driven accommodation tool that translates natural language into ergonomic design recommendations.",
    startDate: new Date("2025-05-01"),
    endDate: new Date("Present"),  
    techStack: ["Python", "Streamlit", "ANSUR II"],
    companyLogoImg: "/projects/psu/heat_map.png",
    descriptionDetails: {
      paragraphs: [
        "Developed a GPT-powered multivariate accommodation tool that interprets product sizing prompts into anthropometry-based design specifications.",
      ],
      bullets: [
        "Implemented natural language interface using GPT function calling.",
        "Integrated ANSUR II datasets for population accommodation analysis.",
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
    techStack: ["Ansys FEA", "Thermal Analysis", "CAD"],
    companyLogoImg: "/projects/Solar_Turbines/titan_250.jpg",
    descriptionDetails: {
      paragraphs: [
        "Engineering project at SolarTurbines focused on redesigning the Titan 250 Inter-Stage Duct to lower costs and improve manufacturability.",
      ],
      bullets: [
        "Optimized material selection using thermal and structural simulations in Ansys FEA.",
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
      "Designed and fabricated a custom wooden charcuterie board using makerspace tools.",
    startDate: new Date("2024-10-01"),
    endDate: new Date("Present"),    
    techStack: ["Woodshop", "CNC", "Laser Cutting"],
    companyLogoImg: "/projects/psu/boards.png",
    descriptionDetails: {
      paragraphs: [
        "A personal design-build project focused on woodworking and aesthetic detailing.",
      ],
      bullets: [
        "Designed custom charcuterie board shape and detailing.",
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
        "Ran 35-trial experimental study with adjustable seat apparatus.",
        "Collected sufficiency, acceptability, and comfort ratings across seat widths.",
        "Analyzed effects of demographics and load factor on seat comfort.",
      ],
    },
  },
  {
    id: "openlab-assistive",
    companyName: "Hands-free leg rehabilitation device",
    type: "Professional",
    category: ["Assistive Technology", "Product Design"],
    shortDescription:
      "Designed and tested an assistive device for hands-free rehabilitation.",
    startDate: new Date("2024-10-01"),
    endDate: new Date("2024-11-01"),    
    techStack: ["User Studies", "CAD", "3D Printing"],
    companyLogoImg: "/projects/psu/assistive.png",
    descriptionDetails: {
      paragraphs: [
        "Class project to develop a hands-free solutation for leg rehabilitation to improve user mobility.",
      ],
      bullets: [
        "Collected user feedback on exhisting rehabilitation devices and conducted competitor analysis.",
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
    techStack: ["Solidworks", "FEA"],
    companyLogoImg: "/projects/apple/challenge.png",
    descriptionDetails: {
      paragraphs: [
        "Design challenge to create a card test fixture.",
      ],
      bullets: [
        "Ran deformation calculations and FEA as a baseline for the force requirement.",
        "Designed the test fixture assembly using Solidworks.",
      ],
    },
  },

  {
    id: "thredlab-amazon",
    companyName: "Sentiment analysis of reviews to inform product sizing",
    type: "Professional",
    category: ["Sentiment Analysis", "Product Sizing"],
    shortDescription:
      "Developed a sentiment analysis framework for Amazon reviews to inform product sizing decisions.",
    startDate: new Date("2025-01-15"),
    endDate: new Date("2022-05-01"),    
    techStack: ["Python", "R", "NLP"],
    companyLogoImg: "/projects/psu/amazon.png",
    descriptionDetails: {
      paragraphs: [
        "Built a framework linking consumer sentiment with product accommodation using anthropometric analysis and Amazon reviews.",
      ],
      bullets: [
        "Scraped and filtered Amazon reviews for ergonomics-relevant products.",
        "Performed sentiment analysis in R and Python (syuzhet, NRC lexicons).",
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
      "Designed a phone charging stand that can be mounted to outlets.",
    startDate: new Date("2025-04-01"),
    endDate: new Date("2025-03-01"),    
    techStack: ["3D Printing", "CAD", "Design for Additive Manufacturing"],
    companyLogoImg: "/projects/psu/stand.png",
  },
    {
    id: "cast-mug",
    companyName: "Aluminum Cast PSU Mug",
    startDate: new Date("2025-04-01"),
    type: "Personal",
    category: ["Metal Casting"],
    shortDescription:
      "Cast an aluminum mug at the Penn State foundry lab.",
    techStack: ["Metal casting"],
    companyLogoImg: "/projects/psu/mug.png",
  },
];

export const featuredProjects = Projects.slice(0, 3);
