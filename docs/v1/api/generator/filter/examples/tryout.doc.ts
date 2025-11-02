import { DGenerator, DNumber, equal, pipe } from "@duplojs/utils";

const divisor = 2;
const remainder = 0;
const input = [0, 1, 2, 3, 4, 5, 6];

const result = pipe(
	input,
	DGenerator.filter((value) => equal(DNumber.modulo(value, divisor), remainder)),
	DGenerator.reduce(
		DGenerator.reduceFrom<number[]>([]),
		({ element, lastValue, next }) => next([...lastValue, element]),
	),
);
// result: [0, 2, 4]
