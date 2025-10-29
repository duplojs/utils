import { DNumber } from "@duplojs/utils";

const value = 5;
const threshold = 10;
const result = DNumber.less(value, threshold);
// result: true (5 <= 10)
