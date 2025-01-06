import React from "react";
import Image from "next/image";
import { HighScoreCounter } from "./HighScoreCounter";

export const ArcadeScreen = () => {
  return (
    <div className="relative w-64 aspect-[4/5]">
      {/* Outer Cabinet Frame */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg p-2 shadow-lg">
        {/* Top Vent Grills */}
        <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5">
          <div className="flex gap-0.5">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="flex-1 h-0.5 bg-gray-600 rounded-full" />
            ))}
          </div>
        </div>

        {/* Screen Bezel */}
        <div className="relative h-full bg-black rounded-sm border-4 border-gray-700 shadow-[inset_0_0_5px_rgba(0,0,0,0.6)]">
          {/* High Score Overlay */}
          <div className="absolute top-0 left-0 w-full z-30 bg-black/65 p-1">
            <HighScoreCounter />
          </div>

          {/* Screen Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:2px_100%] z-20 pointer-events-none" />

          {/* Screen Content */}
          <div className="relative w-full h-full overflow-hidden rounded-sm">
            <div className="relative w-full h-full">
              <Image
                src="/starwarspfp.png"
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          {/* Screen Glare */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[60%] -left-[10%] w-[120%] h-[100%] bg-gradient-to-br from-white/10 to-transparent transform rotate-12" />
          </div>
        </div>

        {/* Side Accent Lines */}
        <div className="absolute top-4 left-0 w-0.5 h-3/4 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600" />
        <div className="absolute top-4 right-0 w-0.5 h-3/4 bg-gradient-to-b from-gray-600 via-gray-500 to-gray-600" />

        {/* Control Panel Section */}
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full">
          <div className="w-3/4 h-1 mx-auto bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-full" />
          <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 flex gap-2">
            <div className="w-1 h-1 rounded-full bg-green-500/80 shadow-[0_0_3px_rgba(34,197,94,0.5)] animate-pulse" />
            <div className="w-1 h-1 rounded-full bg-red-500/80 shadow-[0_0_3px_rgba(239,68,68,0.5)]" />
          </div>
        </div>

        {/* Side Speakers */}
        <div className="absolute -left-2 top-1/2 transform -translate-y-1/2">
          <div className="space-y-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-0.5 h-4 bg-gray-700 rounded-full" />
            ))}
          </div>
        </div>
        <div className="absolute -right-2 top-1/2 transform -translate-y-1/2">
          <div className="space-y-0.5">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-0.5 h-4 bg-gray-700 rounded-full" />
            ))}
          </div>
        </div>
      </div>

      {/* Cabinet Manufacturer Text */}
      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 text-[8px] font-mono whitespace-nowrap">
        SAUER ARCADE SYSTEMS
      </div>
    </div>
  );
};

export default ArcadeScreen;
