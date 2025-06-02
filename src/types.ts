export type DisplayMode = 'weeks' | 'months';

export interface Child {
  id: string;
  name: string;
  birthYear: number;
  color: string;
}

export type LifeStage = 'early-career' | 'peak-family' | 'children-years' | 'later-career' | 'retirement';

export interface LifeStageDefinition {
  name: string;
  startAge: number;
  endAge: number;
  color: string;
  description: string;
} 