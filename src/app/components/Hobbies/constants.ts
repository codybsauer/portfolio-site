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
      {
        title: "Pathfinder 2e - Lyra, Spice, and Everything Nice",
        status: "RUNNING",
        description:
          "Welcome to the Deep Wilds! An outer plane overgrown with natural splendor. Your memories have been stolen and dark forces move to subjugate this land. Recover your memories and stop them before it's too late!",
        details: [
          "Foundry VTT",
          "Discord",
          "GMing for an international party of 3",
          "Returning characters from the wider Codyverse",
        ],
      },
    ],
  },
  {
    title: "BOOKS",
    icon: "📚",
    entries: [
      {
        title: "Wind and Truth",
        status: "READING",
        description: "Author: Brandon Sanderson",
        details: ["Book 5 of the Stormlight Archive"],
      },
    ],
  },
  {
    title: "SINGLE-PLAYER VIDEO GAMES",
    icon: "🕹️",
    entries: [
      {
        title: "The Legend of Heroes: Trails through Daybreak",
        status: "REPLAY",
        description: "Developer: Nihon Falcom",
        details: [
          "Doing an abridged cleanup playthrough to get anything I missed before 2 releases",
        ],
      },
      {
        title: "The Legend of Heroes: Trails through Daybreak 2",
        status: "ANTICIPATING",
        description: "Developer: Nihon Falcom",
        details: ["Release date: 2/14/2025"],
      },
    ],
  },
  {
    title: "MULTIPLAYER VIDEO GAMES",
    icon: "🎮",
    entries: [
      {
        title: "Marvel Rivals",
        status: "ACTIVE",
        description: "IT'S SPIDER TIME!!!",
        details: [
          "Main/Vanguard: Peni Parker",
          "Tactician: Luna Snow",
          "Duelist: Moon Knight",
        ],
      },
      {
        title: "The Finals",
        status: "ACTIVE",
        description: "Current Sponsor: Dissun",
        details: ["Medium: Support", "Heavy: Spin to win!"],
      },
    ],
  },
];
