import { N, A, pipe, innerPipe } from "@duplojs/utils";

const timeSteps = [0, 0.5, 1, 1.5, 2, 2.5, 3];
const amplitude = 10;
const frequency = 2;
const angularFrequency = N.multiply(N.multiply(2, Math.PI), frequency);

const result = pipe(
	timeSteps,
	A.map(
		innerPipe(
			N.multiply(angularFrequency),
			N.sin,
			N.multiply(amplitude),
		),
	),
);

// result: [0, 0, 0, 0, 0, 0, 0] (rounded)
