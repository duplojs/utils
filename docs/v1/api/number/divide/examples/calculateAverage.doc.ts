import { N, A, pipe } from "@duplojs/utils";

const scores = [85, 92, 78, 95, 88];

const result = pipe(
	scores,
	A.reduce(
		A.reduceFrom(0),
		({ element, lastValue, next }) => next(
			N.add(lastValue, element),
		),
	),
	N.divide(A.length(scores)),
);

// result: 87.6
