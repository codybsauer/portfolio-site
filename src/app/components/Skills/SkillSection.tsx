import { SkillBar } from "./SkillBar";
import { SkillStatus } from "./types";

// components/Skills/SkillsSection.jsx
export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Complete",
      skills: [
        { name: "React", level: 90, status: "proficient" },
        { name: "JavaScript", level: 85, status: "proficient" },
        { name: "HTML/CSS", level: 90, status: "proficient" },
      ],
    },
    {
      title: "In Progress",
      skills: [
        { name: "TypeScript", level: 60, status: "learning" },
        { name: "Next.js", level: 70, status: "learning" },
        { name: "Python", level: 40, status: "learning" },
        { name: "TypeScript", level: 60, status: "learning" },
        { name: "Next.js", level: 70, status: "learning" },
        { name: "Python", level: 40, status: "learning" },
      ],
    },
    {
      title: "Backlog",
      skills: [
        { name: "Rust", level: 0, status: "future" },
        { name: "WebAssembly", level: 0, status: "future" },
        { name: "Three.js", level: 0, status: "future" },
      ],
    },
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto mb-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          SKILL LOG
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
            {category.skills.map((skill, skillIndex) => (
              <SkillBar
                key={skillIndex}
                name={skill.name}
                level={skill.level}
                status={skill.status as SkillStatus}
              />
            ))}
          </div>
        ))}
      </div>

      <div className="mt-8 text-center font-mono text-sm text-blue-200">
        <div className="flex justify-center gap-4 flex-wrap">
          <span>🟢 PROFICIENT</span>
          <span>🟡 LEARNING</span>
          <span>🔵 FUTURE </span>
        </div>
      </div>
    </section>
  );
};
