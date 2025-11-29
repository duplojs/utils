import { N } from "@duplojs/utils";

const degrees = 45;
const radians = N.divide(N.multiply(degrees, Math.PI), 180);

const result = N.tan(radians);
// result: 1 (tan 45° = 1)
