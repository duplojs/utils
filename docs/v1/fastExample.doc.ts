import { pipe, DArray, DNumber } from "@duplojs/utils";

const result = pipe(
	[1, 2, 3, 4, 5, 6],
	DArray.filter((value) => value % 2 === 0),
	DArray.map((value) => value * 2),
	DArray.reduce(
		0,
		({ element, lastValue, next }) => next(element + lastValue),
	),
	DNumber.round,
);
