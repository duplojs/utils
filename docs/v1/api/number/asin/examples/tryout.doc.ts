import { N } from "@duplojs/utils";

const sinValue = 0.5;
const radians = N.asin(sinValue);

const degrees = N.divide(N.multiply(radians, 180), Math.PI);
// degrees: 30
