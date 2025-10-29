import { DNumber, DArray, pipe } from "@duplojs/utils";

const scores = [85.7, 92.3, 78.9, 88.4, 95.1];

const result = pipe(
	scores,
	DArray.reduce(
		DArray.reduceFrom(0),
		({ element, lastValue, next }) => next(
			DNumber.add(lastValue, element),
		),
	),
	DNumber.divide(DArray.length(scores)),
	DNumber.round,
);

// result: 88
