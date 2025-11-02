import { DGenerator, DNumber, pipe } from "@duplojs/utils";

const input = [0, 1, 2];
const multiplier = 2;

const result = pipe(
	input,
	DGenerator.map((value) => DNumber.multiply(value, multiplier)),
	DGenerator.reduce(
		DGenerator.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [0, 2, 4]
