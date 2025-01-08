"use client";
import { useEffect, useState } from "react";

export const HighScoreCounter = () => {
  const [highScore, setHighScore] = useState("Loading score...");

  useEffect(() => {
    const calculateHighScore = () => {
      const then = 648806400000;
      const now = new Date().getTime();
      const diff = now - then;

      return diff.toString();
    };

    const interval = setInterval(() => {
      setHighScore(calculateHighScore());
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
