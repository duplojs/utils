import { A, N } from "@duplojs/utils";

const input = [1, 5, 10, 15, 20];

const result1 = A.findLastIndex(input, N.greaterThan(10));
// result1: 4

const result2 = A.findLastIndex(
	input,
	(value, { index }) => N.greaterThan(value, 5)
	&& N.lessThan(index, 3),
);
// result2: 2

