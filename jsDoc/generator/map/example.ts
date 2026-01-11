import { G, N, pipe } from "@scripts";

const values = [8, 12, 20];
const rate = 1.1;

const result = pipe(
	values,
	G.map((value) => N.multiply(value, rate)),
	G.reduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([
			...lastValue,
			element,
		]),
	),
);
