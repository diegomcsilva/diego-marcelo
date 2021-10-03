import { COLORS } from './../utils/contants';

export const between = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

export const selectColorRanging = () => COLORS[between(0, COLORS.length - 1)];