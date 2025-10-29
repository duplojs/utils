import { DNumber, DArray, pipe } from "@duplojs/utils";

const prices = [10.5, 25.99, 8.75, 15.20];

const result = pipe(
	prices,
	DArray.reduce(
		DArray.reduceFrom(0),
		({ element, lastValue, next }) => next(
			DNumber.add(lastValue, element),
		),
	),
	DNumber.round,
);

// result: 60.44
