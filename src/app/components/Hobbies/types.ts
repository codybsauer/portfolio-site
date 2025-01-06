interface HobbyEntry {
  title: string;
  status: string;
  description: string;
  progress?: string;
  details?: string[];
}

export interface HobbyCategory {
  title: string;
  icon: string;
  entries: HobbyEntry[];
}
