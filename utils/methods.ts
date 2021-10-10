import { COLORS } from './contants';

export const between = (min: number, max: number) => Math.floor(Math.random() * (max - min) + min);

export const selectColorRanging = (index:number) => COLORS[index];

const METHODS = {
  between,
  selectColorRanging
}

export default METHODS