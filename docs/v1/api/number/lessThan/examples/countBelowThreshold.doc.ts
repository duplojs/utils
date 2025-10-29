import { DNumber, DArray, pipe, whenElse } from "@duplojs/utils";

const ratings = [3.5, 4.0, 2.8, 4.5, 3.9, 4.0];
const qualityThreshold = 4.0;

const result = pipe(
	ratings,
	DArray.reduce(
		DArray.reduceFrom(0),
		({ element, lastValue, next }) => next(
			whenElse(
				element,
				DNumber.lessThan(qualityThreshold),
				() => DNumber.add(lastValue, 1),
				() => lastValue,
			),
		),
	),
);

// result: 2
