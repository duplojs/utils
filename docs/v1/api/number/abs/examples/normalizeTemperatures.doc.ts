import { N, A, pipe } from "@duplojs/utils";

const temperatures = [-5, 10, -15, 20, -3];

const result = pipe(
	temperatures,
	A.map(N.abs),
	A.reduce(
		A.reduceFrom(0),
		({ element, lastValue, next }) => next(
			N.add(lastValue, element),
		),
	),
	(total) => N.divide(
		total,
		A.length(temperatures),
	),
);

// result: 10.6
