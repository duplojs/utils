import { DNumber } from "@duplojs/utils";

const sinValue = 0.5;
const radians = DNumber.asin(sinValue);

const degrees = DNumber.divide(DNumber.multiply(radians, 180), Math.PI);
// degrees: 30
