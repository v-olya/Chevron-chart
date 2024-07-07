import { baseHSL } from "./constants";

const [hue, satur, light] = baseHSL;

export const lightenHSL = (index: number, length: number): string =>
  `hsl(${hue} ${satur}% ${light + ((100 - light) * index) / length}%)`;
