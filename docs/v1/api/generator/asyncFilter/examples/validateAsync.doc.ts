import { G, N, A, pipe } from "@duplojs/utils";

const minPrice = 50;
const prices = [10, 75, 120, 5];
const pricesCount = A.length(prices);

const result = await pipe(
	prices,
	G.asyncFilter(N.greaterThan(minPrice)),
	G.asyncReduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [75, 120]
