import { A, N } from "@duplojs/utils";

const input = [1, 5, 10, 15, 20];

const result = A.findLast(input, N.greaterThan(10));
// result: 20

const result2 = A.findLast(
	input,
	(value, { index }) => N.greaterThan(value, 5)
	&& N.lessThan(index, 3),
);
// result2: 10
