import { DArray, DNumber, equal } from "@duplojs/utils";

const input = [2, 4, 6, 8, 10];
const result = DArray.every(
	input,
	(value) => equal(DNumber.modulo(value, 2), 0),
);
// result: true

const result2 = DArray.every(input, DNumber.greaterThan(5));
// result2: false
