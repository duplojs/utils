import { N } from "@duplojs/utils";

const degrees = 60;
const radians = N.divide(N.multiply(degrees, Math.PI), 180);

const result = N.cos(radians);
// result: 0.5 (cos 60° = 0.5)
