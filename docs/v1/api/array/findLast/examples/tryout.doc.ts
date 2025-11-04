import { DArray, DNumber } from "@duplojs/utils";

const input = [1, 5, 10, 15, 20];

const result = DArray.findLast(input, DNumber.greaterThan(10));
// result: 20

const result2 = DArray.findLast(
	input,
	(value, { index }) => DNumber.greaterThan(value, 5)
	&& DNumber.lessThan(index, 3),
);
// result2: 10
