import { N } from "@duplojs/utils";

const xPosition = 1;
const yPosition = 1;

const radians = N.atan2(yPosition, xPosition);

const degrees = N.divide(N.multiply(radians, 180), Math.PI);
// degrees: 45

