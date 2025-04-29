import { HobbyCategory } from "./types";

export const hobbies: HobbyCategory[] = [
  {
    title: "TABLETOP RPG CAMPAIGNS",
    icon: "🎲",
    entries: [
      {
        title: "Fabula Ultima - Erosian Adventures",
        status: "RUNNING",
        description:
          "A world of earth and weather attuned people where dead gods are reborn and mysterious invaders subjugate the land.",
        details: [
          "Play By Post",
          "Discord",
          "Owlbear Rodeo",
          "Collaboratively built, custom setting using the Microscope.",
          "GMing for a party of 3",
        ],
      },
    ],
  },
  {
    title: "BOOKS",
    icon: "📚",
    entries: [
      {
        title:
          "Adult Children of Emotionally Immature Parents: How to Heal from Distant, Rejecting, or Self-Involved Parents",
        status: "READING",
        description:
          "A self help book I've been reading since my trip to the mountains. It's really helping me process a lot.",
        details: ["Author: Lindsay C. Gibson"],
      },
    ],
  },
  {
    title: "VIDEO GAMES",
    icon: "🕹️",
    entries: [
      {
        title: "Clair Obscur: Expedition 33",
        status: "PLAYING SOON",
        description: "A FRPG?",
        details: ["Developer: Sandfall Interactive"],
      },
      {
        title: "Natsu-Mon: 20th Century Summer Kid",
        status: "PLAYING SOON",
        description: "I plan to play this in Japanese for learning purposes.",
        details: ["Developers: Millennium Kitchen, TOYBOX Inc."],
      },
    ],
  },
];
