import { DGenerator, DNumber, pipe } from "@duplojs/utils";

const input = [10, 20, 30];

const result = pipe(
	input,
	DGenerator.map((value, { index }) => DNumber.add(value, index)),
	DGenerator.reduce(
		DGenerator.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [10, 21, 32]
