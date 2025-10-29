import { DNumber, DArray, pipe, innerPipe } from "@duplojs/utils";

const prices = [49.99, 89.95, 129.50, 24.75];
const discountMultiplier = 0.85;

const result = pipe(
	prices,
	DArray.map(
		innerPipe(
			DNumber.multiply(discountMultiplier),
			DNumber.floor,
		),
	),
);

// result: [42, 76, 110, 21]
