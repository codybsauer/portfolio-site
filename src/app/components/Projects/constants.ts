import { Project } from "./types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Rocket Music Platform (Early Alpha)",
    description:
      "An innovative Next.js application revolutionizing music education by enabling teachers to create personalized, interactive lesson plans for guitar and piano students. Currently in early alpha, this platform streamlines the lesson planning process while adapting to each student's unique learning journey.",
    screenshots: [
      {
        url: "/RocketMusicPlatformScreenshot1.png",
        width: 640,
        height: 360,
      },
      {
        url: "/RocketMusicPlatformScreenshot2.png",
        width: 640,
        height: 360,
      },
    ],
    technologies: ["Typescript", "Next.js", "ZuStand", "MongoDB"],
    link: "https://www.rocketguitar.xyz/",
  },
  {
    id: 2,
    title: "Defispot",
    description:
      "A sophisticated React-based decentralized finance platform that seamlessly bridges the crypto ecosystem, enabling users to perform cross-blockchain token swaps with unprecedented flexibility. The platform integrates hundreds of wallet options, making cryptocurrency trading accessible and efficient for users across different blockchain networks.",
    screenshots: [
      {
        url: "/DefispotScreenshot1.png",
        width: 640,
        height: 360,
      },
      {
        url: "/DefispotScreenshot2.png",
        width: 640,
        height: 360,
      },
    ],
    technologies: ["Typescript", "React", "Redux", "Nest.js", "MongoDB"],
    link: "https://www.defispot.com/",
  },
  {
    id: 3,
    title: "Arjuna Marketing",
    description:
      "A dynamic WordPress website enhanced with custom JavaScript elements that transforms small business marketing. Built with Elementor for maximum flexibility, this platform delivers compelling digital presence solutions that help businesses showcase their products and services with professional polish and engaging user experiences.",
    screenshots: [
      {
        url: "/ArjunaMarketingScreenshot1.png",
        width: 640,
        height: 360,
      },
      {
        url: "/ArjunaMarketingScreenshot2.png",
        width: 640,
        height: 360,
      },
    ],
    technologies: ["Wordpress", "Elementor", "Javascript"],
    link: "https://arjunamarketing.com/",
  },
  {
    id: 4,
    title: "League of Amazing Programmers",
    description:
      "A transformative non-profit educational initiative where I served as instructor, manager, and web developer, empowering students in grades 5-12 with essential leadership and programming skills. This comprehensive program bridges the technology education gap, preparing the next generation of developers through hands-on experience with Java, Python, JavaScript, and React.",
    screenshots: [
      {
        url: "/LeagueScreenshot1.png",
        width: 640,
        height: 360,
      },
      {
        url: "/LeagueScreenshot2.webp",
        width: 640,
        height: 360,
      },
    ],
    technologies: ["Java", "Spring Boot", "Python", "Javascript", "React"],
    link: "https://www.jointheleague.org/",
  },
];
