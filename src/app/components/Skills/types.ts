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
