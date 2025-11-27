import { A, N, equal } from "@duplojs/utils";

const input = [2, 4, 6, 8, 10];
const result = A.every(
	input,
	(value) => equal(N.modulo(value, 2), 0),
);
// result: true

const result2 = A.every(input, N.greaterThan(5));
// result2: false
