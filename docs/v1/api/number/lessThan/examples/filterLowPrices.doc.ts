import { N, A, pipe } from "@duplojs/utils";

const prices = [20, 50, 35, 50, 45, 60];
const priceThreshold = 50;

const result = pipe(
	prices,
	A.filter(
		N.lessThan(priceThreshold),
	),
);

// result: [20, 35, 45]
