import { A, N, pipe } from "@duplojs/utils";

const input = [32, 18, 45, 11] as const;

const result = A.minOf(input);
// result: 11

const result2 = pipe(
	input,
	A.map(N.subtract(5)),
	A.minOf,
);
// result2: 6
