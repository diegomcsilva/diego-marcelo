import { COLORS } from './contants';

export const between = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

export const selectColorRanging = () => COLORS[between(0, COLORS.length - 1)];

const METHODS = {
  between,
  selectColorRanging
}

export default METHODS