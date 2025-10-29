import { DNumber, DArray, pipe } from "@duplojs/utils";

const temperatures = [-5, 10, -15, 20, -3];

const result = pipe(
	temperatures,
	DArray.map(DNumber.abs),
	DArray.reduce(
		DArray.reduceFrom(0),
		({ element, lastValue, next }) => next(
			DNumber.add(lastValue, element),
		),
	),
	(total) => DNumber.divide(
		total,
		DArray.length(temperatures),
	),
);

// result: 10.6
