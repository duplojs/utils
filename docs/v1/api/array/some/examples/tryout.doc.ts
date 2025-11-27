import { A, N, equal } from "@duplojs/utils";

const input = [1, 3, 5, 8, 9];

const result = A.some(
	input,
	(value) => equal(N.modulo(value, 2), 0),
);
// result: true

const result2 = A.some(input, (value) => value > 10);
// result2: false

