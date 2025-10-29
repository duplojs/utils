import { DNumber, DArray, pipe, whenElse } from "@duplojs/utils";

const temperatures = [18, 22, 25, 30, 20, 28];
const comfortLimit = 25;

const result = pipe(
	temperatures,
	DArray.reduce(
		DArray.reduceFrom(0),
		({ element, lastValue, next }) => next(
			whenElse(
				element,
				DNumber.greaterThan(comfortLimit),
				() => DNumber.add(lastValue, 1),
				() => lastValue,
			),
		),
	),
);

// result: 2
