import { A, N, pipe } from "@duplojs/utils";

const input = [120, 80, 150] as const;

const result = A.sum(input);
// result: 350

const result2 = pipe(
	input,
	A.filter(N.greaterThan(90)),
	A.sum,
);
// result2: 270
