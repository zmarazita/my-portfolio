import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  icon: any;
}

// ✨ Your custom skills
export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Python",
    description: "Programming language for data analysis, automation, and machine learning.",
    icon: Icons.python, // you may need to define this in icons.tsx
  },
  {
    name: "R",
    description: "Statistical computing and graphics for data analysis and visualization.",
    icon: Icons.r, // may need to add
  },
  {
    name: "MATLAB",
    description: "Numerical computing environment for matrix operations, simulations, and modeling.",
    icon: Icons.matlab, // may need to add
  },
  {
    name: "SolidWorks",
    description: "3D CAD software for parametric modeling and engineering design.",
    icon: Icons.solidworks, // add in icons.tsx
  },
  {
    name: "Siemens NX",
    description: "Integrated CAD/CAM/CAE software for advanced product development.",
    icon: Icons.nx, // add in icons.tsx
  },
  {
    name: "Grasshopper",
    description: "Visual programming language for Rhino used in generative design.",
    icon: Icons.grasshopper, // add in icons.tsx
  },
  {
    name: "Creo",
    description: "Parametric CAD software for mechanical design and simulation.",
    icon: Icons.creo, // add in icons.tsx
  },
  {
    name: "Onshape",
    description: "Cloud-native CAD platform for collaborative design.",
    icon: Icons.onshape, // add in icons.tsx
  },
  {
    name: "Fusion 360",
    description: "CAD, CAM, and CAE tool for product design and manufacturing.",
    icon: Icons.fusion, // add in icons.tsx
  },
  {
    name: "Rhino",
    description: "3D modeling software specializing in freeform surfaces.",
    icon: Icons.rhino, // add in icons.tsx
  },
  {
    name: "ANSYS FEA",
    description: "Finite element analysis for structural, thermal, and multiphysics simulations.",
    icon: Icons.ansys, // add in icons.tsx
  },
  {
    name: "JMP",
    description: "Statistical software for exploratory data analysis and visualization.",
    icon: Icons.jmp, // add in icons.tsx
  },
];

export const skills = skillsUnsorted;
export const featuredSkills = skills.slice(0, 6);
