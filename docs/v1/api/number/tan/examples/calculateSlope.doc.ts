import { N, A, pipe, innerPipe } from "@duplojs/utils";

const inclinationAngles = [0, 5, 10, 15, 20, 30, 45];
const degreesToRadians = N.divide(Math.PI, 180);
const percentageMultiplier = 100;

const result = pipe(
	inclinationAngles,
	A.map(
		innerPipe(
			N.multiply(degreesToRadians),
			N.tan,
			N.multiply(percentageMultiplier),
		),
	),
);

// result: [0, 8.7, 17.6, 26.8, 36.4, 57.7, 100]
