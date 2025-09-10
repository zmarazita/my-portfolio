import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Zoe Marazita’s portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    description: "Key skills that define my professional identity.",
    metadata: {
      title: "Skills",
      description: "Zoe Marazita’s core technical and engineering skills.",
    },
  },
  projects: {
    title: "Projects",
    description: "Showcasing impactful projects and technical achievements.",
    metadata: {
      title: "Projects",
      description: "Engineering and research projects by Zoe Marazita.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description: "Zoe Marazita’s professional roles and experience.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let’s connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Zoe Marazita.",
    },
  },
  about: {
    title: "About Me",
    description:
      "Background, interests, leadership, and awards.",
    metadata: {
      title: "About Me",
      description:
        "Learn more about Zoe Marazita — interests, leadership, and awards.",
    },
  },
  resume: {
    title: "Resume",
    description: "View and download my resume.",
    metadata: {
      title: "Resume",
      description: "Resume for Zoe Marazita.",
    },
  },
};
