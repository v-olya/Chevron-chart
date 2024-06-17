import { baseHSL } from "./constants.js";

const [hue, satur, light] = baseHSL;

export const lightenHSL = (index, length) =>
  `hsl(${hue} ${satur}% ${light + ((100 - light) * index) / length}%)`;
