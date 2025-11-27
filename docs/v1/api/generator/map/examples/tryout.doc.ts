import { G, N, pipe } from "@duplojs/utils";

const input = [0, 1, 2];
const multiplier = 2;

const result = pipe(
	input,
	G.map((value) => N.multiply(value, multiplier)),
	G.reduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [0, 2, 4]
