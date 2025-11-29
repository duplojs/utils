import { N, A, pipe } from "@duplojs/utils";

const sides = [3, 5, 7, 10];

const result = pipe(
	sides,
	A.map(N.power(2)),
);

// result: [9, 25, 49, 100]
