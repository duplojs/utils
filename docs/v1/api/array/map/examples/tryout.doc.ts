import { A, N } from "@duplojs/utils";

const input = [5, 10, 15] as const;

const result = A.map(
	input,
	(value, { index }) => N.multiply(value, N.add(index, 1)),
);
// result: [5, 20, 45]
