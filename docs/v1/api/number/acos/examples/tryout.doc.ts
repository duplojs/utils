import { DNumber } from "@duplojs/utils";

const cosValue = 0.5;
const radians = DNumber.acos(cosValue);

const degrees = DNumber.divide(DNumber.multiply(radians, 180), Math.PI);
// degrees: 60
