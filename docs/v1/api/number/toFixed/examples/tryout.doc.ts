import { DNumber } from "@duplojs/utils";

const value = 3.14159;
const digits = 2;
const result = DNumber.toFixed(value, digits);
// result: "3.14"
