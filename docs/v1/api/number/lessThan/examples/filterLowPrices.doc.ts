import { DNumber, DArray, pipe } from "@duplojs/utils";

const prices = [20, 50, 35, 50, 45, 60];
const priceThreshold = 50;

const result = pipe(
	prices,
	DArray.filter(
		DNumber.lessThan(priceThreshold),
	),
);

// result: [20, 35, 45]
