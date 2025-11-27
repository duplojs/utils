import { N, A, pipe, whenElse } from "@duplojs/utils";

const ratings = [3.5, 4.0, 2.8, 4.5, 3.9, 4.0];
const qualityThreshold = 4.0;

const result = pipe(
	ratings,
	A.reduce(
		A.reduceFrom(0),
		({ element, lastValue, next }) => next(
			whenElse(
				element,
				N.lessThan(qualityThreshold),
				() => N.add(lastValue, 1),
				() => lastValue,
			),
		),
	),
);

// result: 2
