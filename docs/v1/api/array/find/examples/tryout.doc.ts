import { DArray, DNumber } from "@duplojs/utils";

const input = [1, 5, 10, 15, 20];

const result = DArray.find(input, DNumber.greaterThan(10));
// result: 15

const result2 = DArray.find(
	input,
	(value, { index }) => DNumber.greaterThan(value, 10)
	&& DNumber.greaterThan(index, 2),
);
// result2: 10

