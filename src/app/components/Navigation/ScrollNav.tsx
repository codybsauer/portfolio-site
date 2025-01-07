"use client";

import React, { useState, useEffect } from "react";
import { ArcadeButton } from "./ArcadeButton";

interface NavSection {
  id: string;
  label: string;
}

const ScrollNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const sections: NavSection[] = [
    { id: "profile", label: "PROFILE" },
    { id: "skills", label: "SKILLS" },
    { id: "projects", label: "PROJECTS" },
    { id: "hobbies", label: "HOBBIES" },
    { id: "contact", label: "CONTACT" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.getElementById("profile");
      if (projectsSection) {
        const showNav = window.scrollY >= projectsSection.offsetTop - 100;
        setIsVisible(showNav);
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

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 md:flex flex-col gap-2">
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
    </div>
  );
};

export default ScrollNav;
