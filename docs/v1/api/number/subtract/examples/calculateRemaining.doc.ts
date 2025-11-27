import { N, A, pipe } from "@duplojs/utils";

const budget = 500;
const expenses = [120, 80, 45, 90];

const result = pipe(
	expenses,
	A.reduce(
		A.reduceFrom(budget),
		({ element, lastValue, next }) => next(
			N.subtract(lastValue, element),
		),
	),
);

// result: 165
