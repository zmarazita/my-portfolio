import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Home",
    description: "Welcome to my portfolio website.",
    metadata: {
      title: "Home",
      description: "Naman Barkiya's portfolio website.",
    },
  },
  skills: {
    title: "Skills",
    metadata: {
      title: "Skills",
      description:
        "Naman Barkiya's key skills that define his professional identity.",
    },
  },
  projects: {
    title: "Projects",
    metadata: {
      title: "Projects",
      description: "Naman Barkiya's projects in building web applications.",
    },
  },
  contact: {
    title: "Contact",
    description: "Let's connect and explore collaborations.",
    metadata: {
      title: "Contact",
      description: "Contact Naman Barkiya.",
    },
  },
  about: {
    title: "About Me",
    description: "A quick intro to who I am and what I do.",
    metadata: {
      title: "About",
      description: "About Zoe Marazita.",
    },
  },
  resume: {
    title: "Resume",
    description: "Naman Barkiya's resume.",
    metadata: {
      title: "Resume",
      description: "Naman Barkiya's resume.",
    },
  },
  experience: {
    title: "Experience",
    description: "Professional journey and career timeline.",
    metadata: {
      title: "Experience",
      description:
        "Naman Barkiya's professional journey and experience timeline.",
    },
  },
};
