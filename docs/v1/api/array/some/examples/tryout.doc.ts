import { DArray, DNumber, equal } from "@duplojs/utils";

const input = [1, 3, 5, 8, 9];

const result = DArray.some(
	input,
	(value) => equal(DNumber.modulo(value, 2), 0),
);
// result: true

const result2 = DArray.some(input, (value) => value > 10);
// result2: false

