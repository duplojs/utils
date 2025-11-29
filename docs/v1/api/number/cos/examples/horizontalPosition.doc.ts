import { N, A, pipe, innerPipe } from "@duplojs/utils";

const angles = [0, 30, 60, 90, 120, 150, 180];
const radius = 100;
const degreesToRadians = N.divide(Math.PI, 180);

const result = pipe(
	angles,
	A.map(
		innerPipe(
			N.multiply(degreesToRadians),
			N.cos,
			N.multiply(radius),
		),
	),
);

// result: [100, 86.6, 50, 0, -50, -86.6, -100]
