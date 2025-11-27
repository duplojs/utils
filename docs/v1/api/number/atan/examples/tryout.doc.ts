import { N } from "@duplojs/utils";

const tanValue = 1;
const radians = N.atan(tanValue);

const degrees = N.divide(N.multiply(radians, 180), Math.PI);
// degrees: 45
