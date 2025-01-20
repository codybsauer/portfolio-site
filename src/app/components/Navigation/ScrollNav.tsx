"use client";

import React, { useState, useEffect } from "react";
import { ArcadeButton } from "./ArcadeButton";
import { sections } from "./constants";

const ScrollNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("profile");
      const footer = document.querySelector("footer");

      if (projectsSection && footer) {
        const showNav = window.scrollY >= projectsSection.offsetTop - 100;

        const footerRect = footer.getBoundingClientRect();
        const hideNav = footerRect.top <= window.innerHeight + 100;

        setIsVisible(showNav && !hideNav);
      }

      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const topThreshold = viewportHeight / 3;
        const bottomThreshold = (viewportHeight / 3) * 2;
        return rect.top <= bottomThreshold && rect.bottom >= topThreshold;
      });

      setActiveSection(currentSection?.id || "");
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 hidden md:flex flex-col gap-2">
      <ArcadeButton
        onClick={scrollToTop}
        color="blue"
        size="normal"
        className="opacity-50 hover:opacity-100 transition-opacity"
      >
        TOP ↑
      </ArcadeButton>

      {sections.map((section) => (
        <ArcadeButton
          key={section.id}
          href={section.id}
          color={activeSection === section.id ? "green" : "red"}
          size="normal"
          className={`transition-all duration-300 ${
            activeSection === section.id
              ? "opacity-100 scale-110"
              : "opacity-50 hover:opacity-100"
          }`}
        >
          {section.label}
        </ArcadeButton>
      ))}

      <ArcadeButton
        onClick={scrollToBottom}
        color="blue"
        size="normal"
        className="opacity-50 hover:opacity-100 transition-opacity"
      >
        BOTTOM ↓
      </ArcadeButton>
    </div>
  );
};

export default ScrollNav;
