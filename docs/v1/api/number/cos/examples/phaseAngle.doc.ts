import { N, A, pipe, innerPipe } from "@duplojs/utils";

const samples = [0, 1, 2, 3, 4, 5, 6, 7];
const quarterPi = N.divide(Math.PI, 4);

const result = pipe(
	samples,
	A.map(
		innerPipe(
			N.multiply(quarterPi),
			N.add(quarterPi),
			N.cos,
		),
	),
);

// result: [0.707, 0, -0.707, -1, -0.707, 0, 0.707, 1]
