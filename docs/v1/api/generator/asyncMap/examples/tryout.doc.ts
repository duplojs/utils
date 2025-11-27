import { G, N, pipe } from "@duplojs/utils";

const multiplier = 2;
const input = [0, 1, 2];

const result = await pipe(
	input,
	G.asyncMap(async(value) => Promise.resolve(
		N.multiply(value, multiplier),
	)),
	G.asyncReduce(
		G.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [0, 2, 4]
