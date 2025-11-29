import { N, A, pipe, innerPipe } from "@duplojs/utils";

const scores = [85, 110, -5, 95, 120, 50];

const result = pipe(
	scores,
	A.map(N.clamp(0, 100)),
	A.map(
		innerPipe(
			N.divide(100),
			N.multiply(100),
			Math.round,
		),
	),
);

// result: [85, 100, 0, 95, 100, 50]
