import React from "react";

import ProjectSection from "./components/Projects/ProjectsSection";
import { SkillsSection } from "./components/Skills/SkillSection";
import AboutSection from "./components/About/AboutSection";
import HobbiesSection from "./components/Hobbies/HobbiesSection";
import ContactSection from "./components/Contact/ContactSection";
import ScrollNav from "./components/Navigation/ScrollNav";
import { NavigationConsole } from "./components/Navigation/NavigationConsole";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 to-black p-8 relative overflow-hidden">
      <ScrollNav />
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2 bg-gradient-to-b from-gray-900 to-indigo-950 rounded-3xl p-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] border border-indigo-500 flex flex-col justify-center">
            <h1 className="text-4xl font-bold font-mono mb-8 text-center">
              <span className="text-indigo-400">P1: CODY SAUER</span>{" "}
              <span className="text-blue-400 animate-pulse">START!</span>
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed font-mono text-left">
              WELCOME TO MY CORNER OF THE MULTIVERSE! I&apos;M A DEVELOPER WHO
              TRANSFORMS IDEAS INTO DIGITAL REALITY WITH PASSION AND CREATIVITY.
              BEYOND THE WORLD OF CODE, YOU&apos;LL FIND ME DIVING INTO
              FANTASTICAL STORIES OR CRAFTING NEW UNIVERSES OF MY OWN.
            </p>
          </div>

          <NavigationConsole />
        </div>
      </div>

      <AboutSection />
      <SkillsSection />
      <ProjectSection />
      <HobbiesSection />
      <ContactSection />
    </main>
  );
}
