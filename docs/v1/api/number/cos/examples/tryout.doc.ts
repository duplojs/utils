import { DNumber } from "@duplojs/utils";

const degrees = 60;
const radians = DNumber.divide(DNumber.multiply(degrees, Math.PI), 180);

const result = DNumber.cos(radians);
// result: 0.5 (cos 60° = 0.5)
