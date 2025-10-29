import { DNumber } from "@duplojs/utils";

const degrees = 90;
const radians = (degrees * Math.PI) / 180;

const result = DNumber.sin(radians);
// result: 1 (sinus 90° = 1)
