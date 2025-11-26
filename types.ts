export type ColorCode = string | null; // Hex code or null for transparent

export type SpriteData = ColorCode[][]; // 2D array of colors

export interface Pet {
  id: string;
  name: string;
  sprite: SpriteData;
  description: string;
  color: string; // Background accent color
}

export enum GameState {
  IDLE = 'IDLE',       // Egg sitting there
  HATCHING = 'HATCHING', // Egg cracking logic active
  HATCHED = 'HATCHED', // Pet revealed
}