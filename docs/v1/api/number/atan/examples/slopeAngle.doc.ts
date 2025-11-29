import { N, A, pipe, innerPipe } from "@duplojs/utils";

const slopePercentages = [0, 5, 10, 15, 20, 25, 50, 100];

const result = pipe(
	slopePercentages,
	A.map(
		innerPipe(
			N.divide(100),
			N.atan,
			N.multiply(180 / Math.PI),
		),
	),
);

// result: [0, 2.86, 5.71, 8.53, 11.31, 14.04, 26.57, 45]
