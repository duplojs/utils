import { DArray, DNumber } from "@duplojs/utils";

const input = [1, 5, 10, 15, 20];

const result = DArray.findIndex(input, DNumber.greaterThan(10));
// result: 3

const result2 = DArray.find(
	input,
	(value, { index }) => DNumber.greaterThan(value, 5)
	&& DNumber.greaterThan(index, 2),
);
// result2: 10
