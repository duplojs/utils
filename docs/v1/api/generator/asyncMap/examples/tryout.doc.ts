import { DGenerator, DNumber, pipe } from "@duplojs/utils";

const multiplier = 2;
const input = [0, 1, 2];

const result = await pipe(
	input,
	DGenerator.asyncMap(async(value) => Promise.resolve(
		DNumber.multiply(value, multiplier),
	)),
	DGenerator.asyncReduce(
		DGenerator.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [0, 2, 4]
