export type SkillStatus = "proficient" | "learning" | "future";

export interface SkillBarProps {
  name: string;
  level: number;
  status: SkillStatus;
}

export type Skill = SkillBarProps;

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Category {
  title: string;
}

export interface ExpandedCategories {
  [key: string]: boolean;
}

export interface ExpandableButtonProps {
  category: Category;

  expandedCategories: ExpandedCategories;

  toggleCategory: (categoryTitle: string) => void;
}
