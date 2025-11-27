import { N, A, pipe } from "@duplojs/utils";

const scores = [85.7, 92.3, 78.9, 88.4, 95.1];

const result = pipe(
	scores,
	A.reduce(
		A.reduceFrom(0),
		({ element, lastValue, next }) => next(
			N.add(lastValue, element),
		),
	),
	N.divide(A.length(scores)),
	N.round,
);

// result: 88
