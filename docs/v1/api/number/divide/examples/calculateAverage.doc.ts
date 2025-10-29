import { DNumber, DArray, pipe } from "@duplojs/utils";

const scores = [85, 92, 78, 95, 88];

const result = pipe(
	scores,
	DArray.reduce(
		DArray.reduceFrom(0),
		({ element, lastValue, next }) => next(
			DNumber.add(lastValue, element),
		),
	),
	DNumber.divide(DArray.length(scores)),
);

// result: 87.6 (moyenne des scores)
