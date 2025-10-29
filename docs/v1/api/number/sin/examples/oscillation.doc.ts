import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const timeSteps = [0, 0.5, 1, 1.5, 2, 2.5, 3];
const amplitude = 10;
const frequency = 2;
const angularFrequency = DNumber.multiply(DNumber.multiply(2, Math.PI), frequency);

const result = pipe(
	timeSteps,
	DArray.map(
		innerPipe(
			DNumber.multiply(angularFrequency),
			DNumber.sin,
			DNumber.multiply(amplitude),
		),
	),
);

// result: [0, 0, 0, 0, 0, 0, 0] (rounded)
