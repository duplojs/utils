import { N, A, pipe } from "@duplojs/utils";

const scores = [85, 60, 92, 45, 78, 50];
const minimumScore = 50;

const result = pipe(
	scores,
	A.filter(
		N.greater(minimumScore),
	),
);

// result: [85, 60, 92, 78, 50]
