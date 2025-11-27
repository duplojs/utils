import { N } from "@duplojs/utils";

const cosValue = 0.5;
const radians = N.acos(cosValue);

const degrees = N.divide(N.multiply(radians, 180), Math.PI);
// degrees: 60
