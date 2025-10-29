import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const scores = [85, 110, -5, 95, 120, 50];

const result = pipe(
	scores,
	DArray.map(DNumber.clamp(0, 100)),
	DArray.map(
		innerPipe(
			DNumber.divide(100),
			DNumber.multiply(100),
			Math.round,
		),
	),
);

// result: [85, 100, 0, 95, 100, 50]
