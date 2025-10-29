import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const weights = [2.3, 5.1, 0.8, 3.9];
const costPerKg = 8;

const result = pipe(
	weights,
	DArray.map(
		innerPipe(
			DNumber.ceil,
			DNumber.multiply(costPerKg),
		),
	),
);

// result: [24, 48, 8, 32]
