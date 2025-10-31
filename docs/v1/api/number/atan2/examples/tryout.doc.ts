import { DNumber } from "@duplojs/utils";

const xPosition = 1;
const yPosition = 1;

const radians = DNumber.atan2(yPosition, xPosition);

const degrees = DNumber.divide(DNumber.multiply(radians, 180), Math.PI);
// degrees: 45

