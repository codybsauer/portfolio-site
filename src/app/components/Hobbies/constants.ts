import { HobbyCategory } from "./types";

export const hobbies: HobbyCategory[] = [
  {
    title: "MULTIPLAYER GAMES",
    icon: "🎮",
    entries: [
      {
        title: "Valorant",
        status: "ACTIVE",
        description: "Current Rank: Diamond",
        details: ["Main Agent: Chamber", "Favorite Map: Ascent"],
      },
      // Add more multiplayer games
    ],
  },
  {
    title: "SINGLE PLAYER GAMES",
    icon: "🎯",
    entries: [
      {
        title: "Baldur's Gate 3",
        status: "IN PROGRESS",
        description: "Playing as Dark Urge",
        progress: "Act 2",
        details: ["Party: Karlach, Shadowheart, Astarion"],
      },
      // Add more single player games
    ],
  },
  {
    title: "TABLETOP CAMPAIGNS",
    icon: "🎲",
    entries: [
      {
        title: "D&D 5e - Curse of Strahd",
        status: "RUNNING",
        description: "DM for a party of 5",
        progress: "Level 7",
        details: ["Weekly sessions", "Custom Gothic horror elements"],
      },
      // Add more TTRPG campaigns
    ],
  },
  {
    title: "CURRENT READS",
    icon: "📚",
    entries: [
      {
        title: "Dune: Messiah",
        status: "READING",
        description: "Frank Herbert",
        progress: "Chapter 15",
        details: ["Re-reading before new movie"],
      },
      // Add more books
    ],
  },
  {
    title: "WATCHING NOW",
    icon: "🎬",
    entries: [
      {
        title: "The Mandalorian",
        status: "CAUGHT UP",
        description: "Season 3",
        details: ["Favorite Character: Grogu"],
      },
      // Add more shows/movies
    ],
  },
];
