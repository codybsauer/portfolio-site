import { NavSection } from "./types";

export const colorStyles = {
  red: {
    base: "bg-red-600",
    highlight: "bg-red-500",
    shadow: "rgba(239,68,68,0.5)",
    border: "border-red-700",
  },
  green: {
    base: "bg-green-600",
    highlight: "bg-green-500",
    shadow: "rgba(34,197,94,0.5)",
    border: "border-green-700",
  },
  blue: {
    base: "bg-blue-600",
    highlight: "bg-blue-500",
    shadow: "rgba(59,130,246,0.5)",
    border: "border-blue-700",
  },
};

export const sizeStyles = {
  small: {
    width: "w-14",
    height: "h-14",
    fontSize: "text-xs",
  },
  normal: {
    width: "w-16",
    height: "h-16",
    fontSize: "text-xs",
  },
  large: {
    width: "w-20",
    height: "h-20",
    fontSize: "text-sm",
  },
};

export const sections: NavSection[] = [
  { id: "profile", label: "PROFILE" },
  { id: "skills", label: "SKILLS" },
  { id: "projects", label: "PROJECTS" },
  { id: "hobbies", label: "HOBBIES" },
  { id: "contact", label: "CONTACT" },
];
