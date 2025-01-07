"use client";

import { useScroll } from "@/app/hooks/useScroll";
import Link from "next/link";
import { ArcadeButtonProps } from "./types";
import { colorStyles, sizeStyles } from "./constants";

export const ArcadeButton = ({
  href,
  children,
  color,
  size = "normal",
  external = false,
  className = "",
  onClick,
}: ArcadeButtonProps) => {
  const styles = colorStyles[color];
  const dimensions = sizeStyles[size];

  const externalProps = external
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  const { scrollToSection } = useScroll(href);

  const ButtonContent = () => (
    <div className={`relative group ${className}`}>
      <div
        className={`${dimensions.width} ${dimensions.height} rounded-full ${styles.base} transform translate-y-1 opacity-50`}
      ></div>

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
        <div className="absolute top-[15%] left-[15%] w-[30%] h-[30%] bg-white opacity-20 rounded-full"></div>
      </div>
    </div>
  );

  return external && href ? (
    <Link href={href} {...externalProps}>
      <ButtonContent />
    </Link>
  ) : (
    <button onClick={onClick ? onClick : scrollToSection} type="button">
      <ButtonContent />
    </button>
  );
};
