"use client";
import { useEffect, useState } from "react";

export const HighScoreCounter = () => {
  const [highScore, setHighScore] = useState("Loading score...");

  useEffect(() => {
    const calculateHighScore = () => {
      const then = 648806400000;
      const now = new Date().getTime();
      const diff = now - then;

      const seconds = Math.floor((diff / 1000) % 60);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));

      return `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;
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
