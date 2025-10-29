import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const prices = [19.99, 25.45, 12.67, 8.12];
const growthRate = 1.20;

const result = pipe(
	prices,
	DArray.map(
		innerPipe(
			DNumber.multiply(growthRate),
			DNumber.round,
		),
	),
);

// result: [24, 31, 15, 10]
