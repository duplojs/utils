import { A, N } from "@duplojs/utils";

const input = [1, 5, 10, 15, 20];

const result = A.findIndex(input, N.greaterThan(10));
// result: 3

const result2 = A.find(
	input,
	(value, { index }) => N.greaterThan(value, 5)
	&& N.greaterThan(index, 2),
);
// result2: 10
