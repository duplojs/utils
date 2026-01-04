import { G, pipe } from "@scripts";

const values = [9, 12, 15, 18, 21];
const threshold = 15;

const result = pipe(
	values,
	G.filter((value) => value >= threshold && value % 3 === 0),
	G.reduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([
			...lastValue,
			element,
		]),
	),
);
