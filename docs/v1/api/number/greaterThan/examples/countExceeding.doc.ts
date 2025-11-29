import { N, A, pipe, whenElse } from "@duplojs/utils";

const temperatures = [18, 22, 25, 30, 20, 28];
const comfortLimit = 25;

const result = pipe(
	temperatures,
	A.reduce(
		A.reduceFrom(0),
		({ element, lastValue, next }) => next(
			whenElse(
				element,
				N.greaterThan(comfortLimit),
				() => N.add(lastValue, 1),
				() => lastValue,
			),
		),
	),
);

// result: 2
