import { N, A, pipe } from "@duplojs/utils";

const prices = [10.5, 25.99, 8.75, 15.20];

const result = pipe(
	prices,
	A.reduce(
		A.reduceFrom(0),
		({ element, lastValue, next }) => next(
			N.add(lastValue, element),
		),
	),
	N.round,
);

// result: 60.44
