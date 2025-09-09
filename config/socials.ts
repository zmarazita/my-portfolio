import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "LinkedIn",
    username: "Zoe Marazita",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/zmarazita/",
  },
  {
    name: "Contact",
    username: "zvmarazita@gmail.com",
    icon: Icons.gmail, // shows an email icon (from your Icons component)
    link: "mailto:zvmarazita@gmail.com",
  },
];
