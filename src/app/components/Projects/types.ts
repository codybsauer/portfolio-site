export interface Project {
  id: number;
  title: string;
  description: string;
  screenshots: Screenshot[];
  technologies: string[];
  link: string;
}

export interface Screenshot {
  url: string;
  width: number;
  height: number;
}
