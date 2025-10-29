import { DNumber } from "@duplojs/utils";

const degrees = 45;
const radians = DNumber.divide(DNumber.multiply(degrees, Math.PI), 180);

const result = DNumber.tan(radians);
// result: 1 (tan 45° = 1)
