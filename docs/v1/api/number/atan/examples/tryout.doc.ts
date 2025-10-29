import { DNumber } from "@duplojs/utils";

const tanValue = 1;
const radians = DNumber.atan(tanValue);

const degrees = DNumber.divide(DNumber.multiply(radians, 180), Math.PI);
// degrees: 45
