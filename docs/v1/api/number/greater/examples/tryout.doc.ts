import { DNumber } from "@duplojs/utils";

const value = 10;
const threshold = 5;
const result = DNumber.greater(value, threshold);
// result: true (10 >= 5)
