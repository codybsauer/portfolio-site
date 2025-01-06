// components/Navigation/ScrollNav.tsx
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

  // Define your sections in order
  const sections: NavSection[] = [
    { id: "projects", label: "PROJECTS" },
    { id: "skills", label: "SKILLS" },
    { id: "profile", label: "PROFILE" },
    { id: "hobbies", label: "HOBBIES" },
    { id: "contact", label: "CONTACT" },
  ];

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Show nav only after scrolling past projects
      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const showNav = window.scrollY >= projectsSection.offsetTop - 100;
        setIsVisible(showNav);
      }

      // Determine which section is currently in view
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      // Find the current section by checking positions
      const currentSection = sectionElements.find(({ element }) => {
        if (!element) return false;
        const rect = element.getBoundingClientRect();
        // Consider a section "active" when it's in the middle third of the viewport
        const viewportHeight = window.innerHeight;
        const topThreshold = viewportHeight / 3;
        const bottomThreshold = (viewportHeight / 3) * 2;
        return rect.top <= bottomThreshold && rect.bottom >= topThreshold;
      });

      setActiveSection(currentSection?.id || "");
    };

    // Add scroll listener
    window.addEventListener("scroll", handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Return to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-50 md:flex flex-col gap-2">
      {/* Return to top button */}
      <ArcadeButton
        onClick={scrollToTop}
        color="blue"
        size="normal"
        className="opacity-50 hover:opacity-100 transition-opacity"
      >
        TOP ↑
      </ArcadeButton>

      {/* Section navigation buttons */}
      {sections.map((section) => (
        <ArcadeButton
          key={section.id}
          onClick={() => scrollToSection(section.id)}
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
