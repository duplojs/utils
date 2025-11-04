import { DNumber, DArray, pipe } from "@duplojs/utils";

const budget = 500;
const expenses = [120, 80, 45, 90];

const result = pipe(
	expenses,
	DArray.reduce(
		DArray.reduceFrom(budget),
		({ element, lastValue, next }) => next(
			DNumber.subtract(lastValue, element),
		),
	),
);

// result: 165
