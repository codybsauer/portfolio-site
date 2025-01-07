export type SocialLink = {
  name: string;
  href: string;
  icon?: {
    path: string;
    title: string;
  };
  label: string;
  isLinkedIn?: boolean;
};
