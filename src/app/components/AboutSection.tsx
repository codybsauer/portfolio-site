// components/About/AboutSection.tsx
"use client";

import React from "react";
import { Card, CardContent } from "./UI/Card";

const AboutSection = () => {
  // These could be moved to a constants file if you prefer
  const personalDetails = [
    {
      title: "BACKGROUND",
      content: "Your journey into development, education, career path...",
    },
    {
      title: "MISSION",
      content:
        "What drives you as a developer, your goals, your approach to coding...",
    },
    {
      title: "INTERESTS",
      content:
        "Your passion for Star Wars, gaming, other hobbies that make you unique...",
    },
  ];

  return (
    <section id="profile" className="py-16 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          PLAYER PROFILE
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Card className="bg-gradient-to-b from-gray-900 to-indigo-950 border border-indigo-500 overflow-hidden">
          <CardContent className="p-8">
            {/* Main Profile Section */}
            <div className="mb-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-500 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full border-2 border-blue-500 animate-pulse animation-delay-150"></div>
                <div className="absolute inset-4 rounded-full border-2 border-purple-500 animate-pulse animation-delay-300"></div>
                {/* You can add your profile image here */}
                <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>
              </div>
              <h3 className="text-2xl font-bold font-mono text-blue-400 mb-4">
                PLAYER: CODY SAUER
              </h3>
              <p className="text-lg text-blue-200 font-mono max-w-2xl mx-auto">
                Level 99 Full Stack Developer on a quest to create amazing web
                experiences. Specializing in React, JavaScript, and turning
                coffee into code.
              </p>
            </div>

            {/* Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {personalDetails.map((detail, index) => (
                <div
                  key={index}
                  className="bg-indigo-950/50 rounded-xl p-6 border border-indigo-500/50"
                >
                  <h4 className="text-xl font-mono text-indigo-400 mb-4">
                    {detail.title}
                  </h4>
                  <p className="text-blue-200 font-mono leading-relaxed">
                    {detail.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Game Stats Section */}
            <div className="mt-8 pt-8 border-t border-indigo-500/30">
              <h4 className="text-xl font-mono text-indigo-400 mb-6 text-center">
                GAME STATS
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl text-blue-400 font-bold font-mono">
                    2+
                  </div>
                  <div className="text-sm text-blue-200 font-mono">
                    Years Coding
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-blue-400 font-bold font-mono">
                    50+
                  </div>
                  <div className="text-sm text-blue-200 font-mono">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-blue-400 font-bold font-mono">
                    1000+
                  </div>
                  <div className="text-sm text-blue-200 font-mono">Commits</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-blue-400 font-bold font-mono">
                    ∞
                  </div>
                  <div className="text-sm text-blue-200 font-mono">
                    Cups of Coffee
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
