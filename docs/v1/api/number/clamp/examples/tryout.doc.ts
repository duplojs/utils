import { DNumber } from "@duplojs/utils";

const value = 150;
const result = DNumber.clamp(value, 0, 100);
// result: 100
