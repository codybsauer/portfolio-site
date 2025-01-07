export interface ArcadeButtonProps {
  onClick?: () => void;
  href?: string;
  children: React.ReactNode;
  color: "red" | "green" | "blue";
  size?: "small" | "normal" | "large";
  external?: boolean;
  className?: string;
}

export interface NavSection {
  id: string;
  label: string;
}
