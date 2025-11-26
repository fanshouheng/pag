import { Pet, SpriteData } from '../types';

// Palette
const T = null; // Transparent
const B = '#2d2d2d'; // Black/Outline
const W = '#ffffff'; // White/Egg Shell
const S = '#e0e0e0'; // Shadow/Egg Shading
const Y = '#fcd34d'; // Yellow (Chick)
const O = '#f97316'; // Orange (Beak)
const G = '#86efac'; // Green (Slime)
const DG = '#22c55e'; // Dark Green
const GR = '#9ca3af'; // Grey (Cat)
const P = '#f472b6'; // Pink (Ears)
const BR = '#a1887f'; // Brown (Dog)
const R = '#ef4444'; // Red (Robot Eyes)
const PU = '#d8b4fe'; // Purple (Ghost)
const D = '#57534e'; // Dark Grey for Question Mark

// 16x16 Egg Sprite
export const EGG_SPRITE: SpriteData = [
  [T, T, T, T, T, B, B, B, B, B, B, T, T, T, T, T],
  [T, T, T, T, B, W, W, W, W, W, W, B, T, T, T, T],
  [T, T, T, B, W, W, W, W, W, W, W, W, B, T, T, T],
  [T, T, B, W, W, W, W, W, W, W, W, W, W, B, T, T],
  [T, T, B, W, W, W, W, W, W, W, W, W, W, B, T, T],
  [T, B, W, W, W, W, W, W, W, W, W, W, W, W, B, T],
  [T, B, W, W, W, W, W, W, W, W, W, W, W, W, B, T],
  [T, B, W, W, W, W, W, W, W, W, W, W, W, W, B, T],
  [T, B, W, W, W, W, W, W, W, W, W, W, S, S, B, T],
  [T, B, W, W, W, W, W, W, W, W, W, S, S, S, B, T],
  [T, B, W, W, W, W, W, W, W, W, S, S, S, S, B, T],
  [T, B, W, W, W, W, W, W, W, S, S, S, S, S, B, T],
  [T, T, B, W, W, W, W, W, S, S, S, S, S, B, T, T],
  [T, T, B, W, W, W, W, S, S, S, S, S, S, B, T, T],
  [T, T, T, B, W, W, W, S, S, S, S, S, B, T, T, T],
  [T, T, T, T, B, B, B, B, B, B, B, B, T, T, T, T],
];

export const CRACKED_EGG_SPRITE: SpriteData = [
  [T, T, T, T, T, B, B, B, B, B, B, T, T, T, T, T],
  [T, T, T, T, B, W, W, W, W, W, W, B, T, T, T, T],
  [T, T, T, B, W, W, W, B, B, W, W, W, B, T, T, T],
  [T, T, B, W, W, W, B, W, W, B, W, W, W, B, T, T],
  [T, T, B, W, W, B, W, W, W, W, B, W, W, B, T, T],
  [T, B, W, W, W, W, W, W, W, W, W, W, W, W, B, T],
  [T, B, W, W, W, W, W, W, W, W, W, W, W, W, B, T],
  [T, B, W, W, W, W, W, W, W, W, W, W, W, W, B, T],
  [T, B, W, W, W, W, W, W, W, W, W, W, S, S, B, T],
  [T, B, W, W, W, W, W, W, W, W, W, S, S, S, B, T],
  [T, B, W, W, W, W, W, W, W, W, S, S, S, S, B, T],
  [T, B, W, W, W, W, W, W, W, S, S, S, S, S, B, T],
  [T, T, B, W, W, W, W, W, S, S, S, S, S, B, T, T],
  [T, T, B, W, W, W, W, S, S, S, S, S, S, B, T, T],
  [T, T, T, B, W, W, W, S, S, S, S, S, B, T, T, T],
  [T, T, T, T, B, B, B, B, B, B, B, B, T, T, T, T],
];

export const QUESTION_MARK_SPRITE: SpriteData = [
  [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, D, D, D, D, D, T, T, T, T, T, T],
  [T, T, T, T, D, W, W, W, W, W, D, T, T, T, T, T],
  [T, T, T, D, W, W, D, D, D, W, W, D, T, T, T, T],
  [T, T, T, D, W, D, T, T, T, D, W, D, T, T, T, T],
  [T, T, T, T, T, T, T, T, T, D, W, D, T, T, T, T],
  [T, T, T, T, T, T, T, T, D, W, W, D, T, T, T, T],
  [T, T, T, T, T, T, T, D, W, W, D, T, T, T, T, T],
  [T, T, T, T, T, T, T, D, W, D, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, D, W, D, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, D, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, D, W, D, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, D, W, D, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, D, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
];

const CHICK: SpriteData = [
  [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, B, B, B, B, B, T, T, T, T, T, T],
  [T, T, T, T, B, Y, Y, Y, Y, Y, B, T, T, T, T, T],
  [T, T, T, B, Y, Y, B, Y, B, Y, Y, B, T, T, T, T],
  [T, T, B, Y, Y, Y, B, Y, B, Y, Y, Y, B, T, T, T],
  [T, T, B, Y, Y, Y, Y, O, Y, Y, Y, Y, B, T, T, T],
  [T, T, B, Y, Y, Y, O, O, O, Y, Y, Y, B, T, T, T],
  [T, B, Y, Y, Y, Y, Y, O, Y, Y, Y, Y, Y, B, T, T],
  [T, B, Y, Y, Y, Y, Y, Y, Y, Y, Y, Y, Y, B, T, T],
  [T, B, Y, B, Y, Y, Y, Y, Y, Y, Y, B, Y, B, T, T],
  [T, B, Y, Y, B, B, B, B, B, B, B, Y, Y, B, T, T],
  [T, T, B, Y, Y, Y, Y, Y, Y, Y, Y, Y, B, T, T, T],
  [T, T, T, B, B, Y, Y, Y, Y, Y, B, B, T, T, T, T],
  [T, T, T, T, T, B, T, B, T, B, T, T, T, T, T, T],
  [T, T, T, T, B, B, T, B, T, B, B, T, T, T, T, T],
];

const SLIME: SpriteData = [
  [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, T, B, T, T, T, T, T, T, T],
  [T, T, T, T, T, T, T, B, G, B, T, T, T, T, T, T],
  [T, T, T, T, T, T, B, G, G, G, B, T, T, T, T, T],
  [T, T, T, T, T, B, G, G, G, G, G, B, T, T, T, T],
  [T, T, T, T, B, G, G, B, G, B, G, G, B, T, T, T],
  [T, T, T, B, G, G, G, B, G, B, G, G, G, B, T, T],
  [T, T, B, G, G, G, G, G, G, G, G, G, G, G, B, T],
  [T, B, G, G, G, G, G, G, G, G, G, G, G, G, G, B],
  [T, B, G, DG, G, G, G, G, G, G, G, G, G, DG, G, B],
  [B, G, DG, DG, DG, G, G, G, G, G, G, DG, DG, DG, G, B],
  [B, G, G, DG, G, G, G, G, G, G, G, G, DG, G, G, B],
  [B, G, G, G, G, G, G, G, G, G, G, G, G, G, G, B],
  [T, B, B, B, B, B, B, B, B, B, B, B, B, B, B, T],
];

const CAT: SpriteData = [
  [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
  [T, T, T, T, B, B, T, T, T, T, B, B, T, T, T, T],
  [T, T, T, B, P, P, B, T, T, B, P, P, B, T, T, T],
  [T, T, T, B, P, P, B, T, T, B, P, P, B, T, T, T],
  [T, T, T, B, GR, GR, B, B, B, B, GR, GR, B, T, T, T],
  [T, T, B, GR, GR, GR, GR, GR, GR, GR, GR, GR, B, T, T],
  [T, T, B, GR, B, GR, GR, GR, GR, B, GR, GR, B, T, T],
  [T, T, B, GR, B, GR, GR, GR, GR, B, GR, GR, B, T, T],
  [T, T, B, GR, GR, GR, P, P, GR, GR, GR, GR, B, T, T],
  [T, T, B, GR, GR, GR, GR, GR, GR, GR, GR, GR, B, T, T],
  [T, B, GR, GR, B, B, B, B, B, B, GR, GR, B, T, T],
  [T, B, GR, GR, B, W, B, B, W, B, GR, GR, B, T, T],
  [T, B, GR, GR, B, B, B, B, B, B, GR, GR, B, T, T],
  [T, B, GR, GR, GR, GR, GR, GR, GR, GR, GR, B, T, T],
  [T, T, B, GR, GR, GR, GR, GR, GR, GR, B, T, T, T],
  [T, T, T, B, B, B, B, B, B, B, B, T, T, T, T, T],
];

const DOG: SpriteData = [
    [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
    [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
    [T, T, B, B, B, T, T, T, T, T, B, B, B, T, T, T],
    [T, B, BR, BR, BR, B, T, T, T, B, BR, BR, BR, B, T, T],
    [T, B, BR, BR, BR, BR, B, B, B, BR, BR, BR, BR, B, T, T],
    [T, B, BR, BR, BR, BR, BR, BR, BR, BR, BR, BR, BR, B, T, T],
    [T, B, BR, B, B, BR, BR, BR, BR, BR, B, B, BR, B, T, T],
    [T, B, BR, B, B, BR, BR, BR, BR, BR, B, B, BR, B, T, T],
    [T, T, B, BR, BR, BR, BR, B, BR, BR, BR, BR, B, T, T],
    [T, T, T, B, B, B, BR, B, BR, BR, B, B, B, T, T, T],
    [T, T, T, T, T, B, BR, BR, BR, BR, B, T, T, T, T, T],
    [T, T, T, T, T, B, W, B, W, B, W, B, T, T, T, T],
    [T, T, T, T, T, B, W, W, W, W, W, B, T, T, T, T],
    [T, T, T, T, T, B, W, B, B, B, W, B, T, T, T, T],
    [T, T, T, T, T, B, B, T, T, T, B, B, T, T, T, T],
    [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
];

const GHOST: SpriteData = [
    [T, T, T, T, T, T, B, B, B, B, T, T, T, T, T, T],
    [T, T, T, T, T, B, W, W, W, W, B, T, T, T, T, T],
    [T, T, T, T, B, W, W, W, W, W, W, B, T, T, T, T],
    [T, T, T, B, W, W, W, W, W, W, W, W, B, T, T, T],
    [T, T, B, W, W, W, W, W, W, W, W, W, W, B, T, T],
    [T, T, B, W, W, B, B, W, W, B, B, W, W, B, T, T],
    [T, B, W, W, W, B, B, W, W, B, B, W, W, W, B, T],
    [T, B, W, W, W, W, W, W, W, W, W, W, W, W, B, T],
    [T, B, W, W, W, W, PU, PU, PU, PU, W, W, W, B, T],
    [T, B, W, W, W, W, PU, PU, PU, PU, W, W, W, B, T],
    [T, B, W, W, W, W, W, W, W, W, W, W, W, B, T, T],
    [T, B, W, W, W, W, W, W, W, W, W, W, W, B, T, T],
    [T, B, W, W, W, B, W, W, W, B, W, W, W, B, T, T],
    [T, T, B, W, B, T, B, W, B, T, B, W, B, T, T, T],
    [T, T, T, B, T, T, T, B, T, T, T, B, T, T, T, T],
    [T, T, T, T, T, T, T, T, T, T, T, T, T, T, T, T],
];

const ROBOT: SpriteData = [
    [T, T, T, T, T, T, T, B, B, T, T, T, T, T, T, T],
    [T, T, T, T, T, T, T, B, B, T, T, T, T, T, T, T],
    [T, T, T, T, T, T, T, B, B, T, T, T, T, T, T, T],
    [T, T, T, T, B, B, B, B, B, B, B, B, T, T, T, T],
    [T, T, T, B, GR, GR, GR, GR, GR, GR, GR, GR, B, T, T],
    [T, T, B, GR, GR, GR, GR, GR, GR, GR, GR, GR, GR, B, T],
    [T, T, B, GR, R, R, GR, GR, GR, GR, R, R, GR, B, T],
    [T, T, B, GR, R, R, GR, GR, GR, GR, R, R, GR, B, T],
    [T, T, B, GR, GR, GR, GR, GR, GR, GR, GR, GR, GR, B, T],
    [T, T, B, GR, GR, GR, GR, GR, GR, GR, GR, GR, GR, B, T],
    [T, T, B, GR, B, B, B, B, B, B, B, B, GR, B, T],
    [T, T, B, GR, B, Y, Y, Y, Y, Y, Y, B, GR, B, T],
    [T, T, B, GR, B, Y, Y, Y, Y, Y, Y, B, GR, B, T],
    [T, T, B, GR, B, B, B, B, B, B, B, B, GR, B, T],
    [T, T, B, GR, GR, GR, GR, GR, GR, GR, GR, GR, GR, B, T],
    [T, T, T, B, B, B, B, B, B, B, B, B, B, T, T],
];

export const PETS: Pet[] = [
  { id: 'chick', name: '像素小鸡', sprite: CHICK, description: '一只充满活力的小鸡！', color: 'bg-yellow-50' },
  { id: 'slime', name: '绿色史莱姆', sprite: SLIME, description: 'Q弹的冒险伙伴。', color: 'bg-green-50' },
  { id: 'cat', name: '灰灰猫', sprite: CAT, description: '高冷的观察者。', color: 'bg-gray-50' },
  { id: 'dog', name: '汪汪队', sprite: DOG, description: '忠诚的朋友。', color: 'bg-orange-50' },
  { id: 'ghost', name: '小幽灵', sprite: GHOST, description: '它其实很怕黑。', color: 'bg-indigo-50' },
  { id: 'robot', name: '机器人-X', sprite: ROBOT, description: '比普、比普。', color: 'bg-slate-50' },
];