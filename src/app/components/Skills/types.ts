// components/Skills/types.ts
export type SkillStatus = "proficient" | "learning" | "rusty" | "future";

export interface SkillBarProps {
  /** Name of the skill */
  name: string;
  /** Proficiency level from 0-100 */
  level: number;
  /** Current status of the skill */
  status: SkillStatus;
}

export type Skill = SkillBarProps;

export interface SkillCategory {
  title: string;
  skills: Skill[];
}
