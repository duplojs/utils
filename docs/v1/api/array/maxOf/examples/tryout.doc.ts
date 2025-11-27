import { A, N, pipe } from "@duplojs/utils";

const input = [18, 45, 27, 45, 30] as const;

const result = A.maxOf(input);
// result: 45

const result2 = pipe(
	input,
	A.map(N.add(10)),
	A.maxOf,
);
// result2: 55
