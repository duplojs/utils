import { DArray, DNumber } from "@duplojs/utils";

const input = [1, 5, 10, 15, 20];

const result1 = DArray.findLastIndex(input, DNumber.greaterThan(10));
// result1: 4

const result2 = DArray.findLastIndex(
	input,
	(value, { index }) => DNumber.greaterThan(value, 5)
	&& DNumber.lessThan(index, 3),
);
// result2: 2

