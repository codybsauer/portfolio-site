"use client";

import React, { useState } from "react";
import { Card, CardContent } from "../Card/Card";
import { hobbies } from "./constants";

const HobbiesSection = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  return (
    <section id="hobbies" className="py-16 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
          HOBBIES
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 gap-8">
          {hobbies.map((category) => (
            <Card
              key={category.title}
              className={`bg-gradient-to-b from-gray-900 to-indigo-950 border border-indigo-500 overflow-hidden
                transform transition-all duration-300 hover:shadow-[0_0_15px_rgba(99,102,241,0.3)]
                ${expandedCategory === category.title ? "scale-[1.02]" : ""}`}
            >
              <CardContent className="p-0">
                <button
                  className="w-full p-6 text-left focus:outline-none"
                  onClick={() =>
                    setExpandedCategory(
                      expandedCategory === category.title
                        ? null
                        : category.title
                    )
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{category.icon}</span>
                      <h3 className="text-2xl font-mono text-indigo-400">
                        {category.title}
                      </h3>
                    </div>
                    <span
                      className={`transform transition-transform duration-300
                      ${
                        expandedCategory === category.title ? "rotate-180" : ""
                      }`}
                    >
                      ▼
                    </span>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300
                  ${
                    expandedCategory === category.title
                      ? "max-h-[1000px]"
                      : "max-h-0"
                  }`}
                >
                  <div className="p-6 pt-0 grid gap-6">
                    {category.entries.map((entry, index) => (
                      <div
                        key={index}
                        className="bg-indigo-950/50 rounded-xl p-4 border border-indigo-500/50"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-mono text-blue-400">
                            {entry.title}
                          </h4>
                          <span className="px-2 py-1 bg-indigo-900/50 rounded-md text-xs font-mono text-blue-200">
                            {entry.status}
                          </span>
                        </div>
                        <p className="text-blue-200 font-mono mb-2">
                          {entry.description}
                        </p>
                        {entry.progress && (
                          <div className="mb-2">
                            <div className="text-sm text-blue-200 font-mono">
                              Progress: {entry.progress}
                            </div>
                          </div>
                        )}
                        {entry.details && (
                          <ul className="space-y-1">
                            {entry.details.map((detail, i) => (
                              <li
                                key={i}
                                className="text-sm text-blue-200 font-mono flex items-center gap-2"
                              >
                                <span className="text-indigo-400">→</span>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HobbiesSection;
