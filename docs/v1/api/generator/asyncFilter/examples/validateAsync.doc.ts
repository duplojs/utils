import { DGenerator, DNumber, DArray, pipe } from "@duplojs/utils";

const minPrice = 50;
const prices = [10, 75, 120, 5];
const pricesCount = DArray.length(prices);

const result = await pipe(
	prices,
	DGenerator.asyncFilter(DNumber.greaterThan(minPrice)),
	DGenerator.asyncReduce(
		DGenerator.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [75, 120]
