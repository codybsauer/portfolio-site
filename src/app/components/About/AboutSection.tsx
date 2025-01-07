import React from "react";
import { Card, CardContent } from "../Card/Card";
import Image from "next/image";

const BestiaryProfile = () => {
  const creatureStats = {
    title: "Full Stack Developer",
    classification: "Rare Humanoid - Chaotic Good",
    armorClass: "16 (Graphic Tee)",
    hitPoints: "100 (d10 Hit Die)",
    speed: "30 ft., typing speed 100 wpm",
    attributes: {
      strengths: [
        "Problem Solving: Expert at breaking down complex challenges",
        "Adaptability: Quick to learn new technologies and frameworks",
        "Communication: Skilled in bridging technical and non-technical realms",
      ],
      weaknesses: [
        "Requires tasty food, tea and a fun work environment to maintain optimal performance",
        "Occasional tunnel vision when in the zone",
        "Fire and Poison damage",
      ],
      immunities: [
        "Immune to deadline pressure",
        "Resistant to poorly documented code",
        "Cannot be frightened by legacy systems",
      ],
    },
    specialAbilities: [
      {
        name: "React Mastery",
        description: "Can conjure interactive interfaces with component magic",
      },
      {
        name: "Full Stack Insight",
        description:
          "Understands the arcane connections between front and back ends",
      },
      {
        name: "Code Optimization",
        description: "Reduces application load times and enhances performance",
      },
    ],
  };

  return (
    <section id="profile" className="py-16 relative">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 mb-4">
          PROFILE{" "}
        </h2>
        <div className="h-1 w-32 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        <Card className="bg-gradient-to-b from-gray-900 to-indigo-950 border border-indigo-500/50">
          <CardContent className="p-8">
            <div className="mb-8 text-center">
              <div className="w-32 h-32 mx-auto mb-6 relative">
                <div className="absolute inset-0 rounded-full border-2 border-indigo-500 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full border-2 border-purple-500 animate-pulse animation-delay-150"></div>
                <div className="absolute inset-4 rounded-full border-2 border-blue-400 animate-pulse animation-delay-300"></div>
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <Image
                    src="/conceptualization.webp"
                    alt="Cody Sauer - Technical Beast"
                    fill
                    sizes="128px"
                    priority
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-bold font-serif text-indigo-400 mb-4">
                CODY SAUER
              </h3>
              <p className="text-lg text-purple-200 font-serif italic mb-4">
                {creatureStats.title} - {creatureStats.classification}
              </p>
              <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto text-indigo-200 font-serif mb-8">
                <div>AC: {creatureStats.armorClass}</div>
                <div>HP: {creatureStats.hitPoints}</div>
                <div>Speed: {creatureStats.speed}</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-indigo-950/50 rounded-xl p-6 border border-purple-500/50">
                <h4 className="text-xl font-serif text-indigo-300 mb-4 text-center">
                  STRENGTHS
                </h4>
                <ul className="text-purple-200 font-serif space-y-2">
                  {creatureStats.attributes.strengths.map((strength, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {strength}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-950/50 rounded-xl p-6 border border-purple-500/50">
                <h4 className="text-xl font-serif text-indigo-300 mb-4 text-center">
                  WEAKNESSES
                </h4>
                <ul className="text-purple-200 font-serif space-y-2">
                  {creatureStats.attributes.weaknesses.map((weakness, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {weakness}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-950/50 rounded-xl p-6 border border-purple-500/50">
                <h4 className="text-xl font-serif text-indigo-300 mb-4 text-center">
                  IMMUNITIES
                </h4>
                <ul className="text-purple-200 font-serif space-y-2">
                  {creatureStats.attributes.immunities.map((immunity, idx) => (
                    <li key={idx} className="leading-relaxed">
                      • {immunity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-serif text-indigo-300 mb-4 text-center">
                SPECIAL ABILITIES
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {creatureStats.specialAbilities.map((ability, idx) => (
                  <div
                    key={idx}
                    className="bg-indigo-950/50 rounded-xl p-4 border border-purple-500/30"
                  >
                    <h5 className="text-lg font-serif text-indigo-300 mb-2">
                      {ability.name}
                    </h5>
                    <p className="text-purple-200 font-serif italic">
                      {ability.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default BestiaryProfile;
