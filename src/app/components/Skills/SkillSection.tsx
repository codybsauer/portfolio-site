"use client";

import { useState } from "react";
import { SkillBar } from "./SkillBar";
import { SkillCategory, SkillStatus } from "./types";
import { useScroll } from "@/app/hooks/useScroll";

export const SkillsSection = () => {
  const [expandedCategories, setExpandedCategories] = useState<
    Record<string, boolean>
  >({});

  const skillCategories = [
    {
      title: "Complete",
      skills: [
        { name: "React", level: 75, status: "proficient" },
        { name: "TypeScript", level: 75, status: "proficient" },
        { name: "JavaScript", level: 75, status: "proficient" },
        { name: "HTML/CSS", level: 75, status: "proficient" },
        { name: "Redux", level: 75, status: "proficient" },
        { name: "Node.js", level: 75, status: "proficient" },
        { name: "NestJS", level: 75, status: "proficient" },
        { name: "MongoDB", level: 75, status: "proficient" },
        { name: "PostgreSQL", level: 75, status: "proficient" },
        { name: "SQL", level: 75, status: "proficient" },
        { name: "NoSQL", level: 75, status: "proficient" },
        { name: "Java", level: 75, status: "proficient" },
        { name: "C#", level: 75, status: "proficient" },
        { name: "Spring Boot", level: 75, status: "proficient" },
        { name: "RESTful APIs", level: 75, status: "proficient" },
        { name: "AWS Services", level: 75, status: "proficient" },
        { name: "Terraform", level: 75, status: "proficient" },
        { name: "Docker", level: 75, status: "proficient" },
        { name: "Serverless", level: 75, status: "proficient" },
        { name: "GitHub", level: 75, status: "proficient" },
        { name: "yarn/npm", level: 75, status: "proficient" },
        { name: "Figma", level: 75, status: "proficient" },
        { name: "Google Dev Tools", level: 75, status: "proficient" },
        { name: "WordPress", level: 75, status: "proficient" },
        { name: "Elementor", level: 75, status: "proficient" },
        { name: "Unity", level: 75, status: "proficient" },
        { name: "Python", level: 75, status: "proficient" },
        { name: "C", level: 75, status: "proficient" },
        { name: "C++", level: 75, status: "proficient" },
        { name: "x86 Assembly", level: 75, status: "proficient" },
      ],
    },
    {
      title: "In Progress",
      skills: [
        { name: "Next.js", level: 50, status: "learning" },
        { name: "Zustand", level: 50, status: "learning" },
        { name: "Tailwind", level: 50, status: "learning" },
        { name: "Vercel", level: 50, status: "learning" },
        { name: "Cloudflare", level: 50, status: "learning" },
        { name: "Resend", level: 50, status: "learning" },
      ],
    },
    {
      title: "Backlog",
      skills: [
        { name: "Vue.js", level: 0, status: "future" },
        { name: "GraphQL", level: 0, status: "future" },
        { name: "Rust", level: 0, status: "future" },
        { name: "Electron", level: 0, status: "future" },
        { name: "React Native", level: 0, status: "future" },
        { name: "Flutter", level: 0, status: "future" },
        { name: "Dart", level: 0, status: "future" },
        { name: "Godot", level: 0, status: "future" },
        { name: "Swift", level: 0, status: "future" },
        { name: "Kotlin", level: 0, status: "future" },
        { name: "WebAssembly", level: 0, status: "future" },
        { name: "Three.js", level: 0, status: "future" },
        { name: "Svelte", level: 0, status: "future" },
        { name: "Xamarin", level: 0, status: "future" },
        { name: "Unreal Engine", level: 0, status: "future" },
      ],
    },
  ];

  const { scrollToSection } = useScroll("skills");

  const toggleCategory = (categoryTitle: string) => {
    setExpandedCategories((prev) => {
      const isExpanding = !prev[categoryTitle];
      if (!isExpanding) scrollToSection();
      return {
        ...prev,
        [categoryTitle]: isExpanding,
      };
    });
  };

  const getVisibleSkills = (
    skills: SkillCategory["skills"],
    categoryTitle: string
  ) => {
    return expandedCategories[categoryTitle] ? skills : skills.slice(0, 6);
  };

  return (
    <section id="skills" className="max-w-6xl mx-auto mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          SKILLS
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <div
            key={index}
            className="bg-gradient-to-b from-gray-900 to-indigo-950 rounded-3xl p-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] border border-indigo-500"
          >
            <h3 className="text-2xl font-mono text-indigo-400 mb-6 text-center">
              {category.title}
            </h3>

            {getVisibleSkills(
              category.skills as SkillCategory["skills"],
              category.title
            ).map((skill, skillIndex) => (
              <SkillBar
                key={skillIndex}
                name={skill.name}
                level={skill.level}
                status={skill.status as SkillStatus}
              />
            ))}

            {category.skills.length > 6 && (
              <button
                onClick={() => toggleCategory(category.title)}
                className="w-full mt-4 px-6 py-2 font-mono text-sm text-indigo-300 border-2 border-indigo-500 rounded-lg
                bg-gradient-to-r from-indigo-900 to-purple-900 hover:from-indigo-800 hover:to-purple-800
                transition-all duration-300 ease-in-out transform hover:scale-105
                shadow-[0_0_10px_rgba(99,102,241,0.3)] hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              >
                <a href="#skills"></a>
                <div className="flex items-center justify-center gap-2">
                  <span className="animate-pulse">⚡</span>
                  {expandedCategories[category.title]
                    ? "SHOW LESS"
                    : "SHOW MORE"}
                  <span className="animate-pulse">⚡</span>
                </div>
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center font-mono text-sm text-blue-200">
        <div className="flex justify-center gap-4 flex-wrap">
          <span>🟢 PROFICIENT</span>
          <span>🟡 LEARNING</span>
          <span>🔵 FUTURE</span>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
