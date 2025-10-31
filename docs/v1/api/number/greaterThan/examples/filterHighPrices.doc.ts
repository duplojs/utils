import { DNumber, DArray, pipe } from "@duplojs/utils";

const prices = [50, 75, 100, 50, 120, 80];
const priceLimit = 50;

const result = pipe(
	prices,
	DArray.filter(
		DNumber.greaterThan(priceLimit),
	),
);

// result: [75, 100, 120, 80]
