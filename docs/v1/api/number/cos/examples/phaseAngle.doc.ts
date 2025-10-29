import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const samples = [0, 1, 2, 3, 4, 5, 6, 7];
const quarterPi = DNumber.divide(Math.PI, 4);

const result = pipe(
	samples,
	DArray.map(
		innerPipe(
			DNumber.multiply(quarterPi),
			DNumber.add(quarterPi),
			DNumber.cos,
		),
	),
);

// result: [0.707, 0, -0.707, -1, -0.707, 0, 0.707, 1]
