import Link from "next/link";

interface ArcadeButtonProps {
  href?: string; // Make href optional since we'll use onClick for nav
  children: React.ReactNode;
  color: "red" | "green" | "blue";
  size?: "small" | "normal" | "large";
  external?: boolean;
  onClick?: () => void; // Add onClick for navigation functionality
  className?: string; // Add className for additional styling
}

export const ArcadeButton = ({
  href,
  children,
  color,
  size = "normal",
  external = false,
  onClick,
  className = "",
}: ArcadeButtonProps) => {
  const colorStyles = {
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

  const sizeStyles = {
    small: {
      width: "w-14", // Smaller width for nav buttons
      height: "h-14", // Smaller height for nav buttons
      fontSize: "text-xs", // Keep text small but readable
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

  const styles = colorStyles[color];
  const dimensions = sizeStyles[size];

  const externalProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  // Create the button content
  const ButtonContent = () => (
    <div className={`relative group ${className}`}>
      {/* Button base (shadow) */}
      <div
        className={`${dimensions.width} ${dimensions.height} rounded-full ${styles.base} transform translate-y-1 opacity-50`}
      ></div>

      {/* Button top */}
      <div
        className={`absolute inset-0 ${dimensions.width} ${dimensions.height} rounded-full ${styles.highlight} 
        border-2 ${styles.border} transform group-hover:-translate-y-1 
        group-active:translate-y-0 transition-transform duration-150 
        shadow-[0_0_10px_${styles.shadow}] group-hover:shadow-[0_0_15px_${styles.shadow}]`}
      >
        <div
          className={`absolute inset-0 flex items-center justify-center text-white font-bold ${dimensions.fontSize}`}
        >
          {children}
        </div>
        {/* Highlight effect - adjusted for small size */}
        <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-white opacity-20 rounded-full"></div>
      </div>
    </div>
  );

  // Return either a link or a button based on whether href is provided
  return href ? (
    <Link href={href} {...externalProps}>
      <ButtonContent />
    </Link>
  ) : (
    <button onClick={onClick} type="button">
      <ButtonContent />
    </button>
  );
};
