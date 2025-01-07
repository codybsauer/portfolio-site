"use client";

import { useCallback } from "react";

export const useScroll = (href?: string) => {
  const scrollToSection = useCallback(() => {
    console.log(href);
    if (!href) return;

    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [href]);

  return { scrollToSection };
};
