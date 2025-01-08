"use client";
import { useEffect, useState } from "react";

export const HighScoreCounter = () => {
  const [highScore, setHighScore] = useState("Loading score...");

  useEffect(() => {
    const interval = setInterval(() => {
      setHighScore(Date.now().toString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <div className="font-mono text-yellow-400/90 text-xs mb-1">
        HIGH SCORE
      </div>
      <div className="font-mono text-yellow-400/90 text-xl">{highScore}</div>
    </div>
  );
};
