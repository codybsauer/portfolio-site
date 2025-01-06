import React from "react";
import { ArcadeButton } from "./components/ArcadeButton";
import { ArcadeScreen } from "./components/ArcadeScreen";
import ProjectSection from "./components/Projects/ProjectsSection";
import { SkillsSection } from "./components/Skills/SkillSection";
import AboutSection from "./components/AboutSection";
import HobbiesSection from "./components/Hobbies/HobbiesSection";
import ContactSection from "./components/ContactSection";
import ScrollNav from "./components/ScrollNav";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-indigo-950 to-black p-8 relative overflow-hidden">
      <ScrollNav />
      {/* Subtle Scanline Effect */}
      <div className="pointer-events-none fixed inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.2)_50%)] bg-[length:100%_4px] z-50 animate-subtle-scanline mix-blend-overlay"></div>

      {/* Hero Section Container */}
      <div className="max-w-6xl mx-auto mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Me Section - Left Column Spanning Two Columns */}
          <div className="md:col-span-2 bg-gradient-to-b from-gray-900 to-indigo-950 rounded-3xl p-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] border border-indigo-500 flex flex-col justify-center">
            <h1 className="text-4xl font-bold font-mono mb-8 text-center">
              <span className="text-indigo-400">P1: CODY SAUER</span>{" "}
              <span className="text-blue-400 animate-pulse">START!</span>
            </h1>
            <p className="text-xl text-blue-200 leading-relaxed font-mono text-left">
              WELCOME TO MY CORNER OF THE ARCADE! I&apos;M A PASSIONATE
              DEVELOPER WHO LOVES CREATING BEAUTIFUL AND FUNCTIONAL WEBSITES.
              WHEN I&apos;M NOT CODING, YOU CAN FIND ME EXPLORING THE STAR WARS
              UNIVERSE OR LEVELING UP IN MY FAVORITE GAMES.
            </p>
          </div>

          {/* Full Arcade Cabinet - Right Column */}
          <div className="md:col-span-1 bg-gradient-to-b from-gray-900 to-indigo-950 rounded-3xl p-8 shadow-[0_0_15px_rgba(99,102,241,0.2)] border border-indigo-500 flex flex-col items-center">
            <ArcadeScreen />
            <div className="grid grid-cols-3 gap-4 mt-8">
              <ArcadeButton href="#projects" color="red" size="normal">
                PROJECTS
              </ArcadeButton>
              <ArcadeButton href="#profile" color="green" size="normal">
                PROFILE
              </ArcadeButton>
              <ArcadeButton
                href="https://docs.google.com/document/d/1uXqDoNY3oZhgwyMjRfKiRuSP7uvgcw8s/edit?usp=sharing&ouid=101298537941578634270&rtpof=true&sd=true"
                color="blue"
                size="normal"
                external
              >
                RESUME
              </ArcadeButton>
              <ArcadeButton href="#skills" color="red" size="normal">
                SKILLS
              </ArcadeButton>
              <ArcadeButton href="#hobbies" color="green" size="normal">
                HOBBIES
              </ArcadeButton>
              <ArcadeButton href="#contact" color="blue" size="normal">
                CONTACT
              </ArcadeButton>
            </div>
          </div>
        </div>
      </div>

      <ProjectSection />
      <SkillsSection />
      <AboutSection />
      <HobbiesSection />
      <ContactSection />
    </main>
  );
}
