import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const angles = [0, 30, 60, 90, 120, 150, 180];
const radius = 100;
const degreesToRadians = DNumber.divide(Math.PI, 180);

const result = pipe(
	angles,
	DArray.map(
		innerPipe(
			DNumber.multiply(degreesToRadians),
			DNumber.sin,
			DNumber.multiply(radius),
		),
	),
);

// result: [0, 50, 86.6, 100, 86.6, 50, 0]
