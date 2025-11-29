import { G, N, pipe } from "@duplojs/utils";

const input = [10, 20, 30];

const result = pipe(
	input,
	G.map((value, { index }) => N.add(value, index)),
	G.reduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [10, 21, 32]
