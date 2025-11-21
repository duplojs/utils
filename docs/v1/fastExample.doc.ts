import { pipe, DArray, DNumber, equal, innerPipe } from "@duplojs/utils";

const result = pipe(
	[1, 2, 3, 4, 5, 6],
	DArray.filter(
		innerPipe(
			DNumber.modulo(2),
			equal(0),
		),
	),
	DArray.map(DNumber.multiply(2)),
	DArray.reduce(
		0,
		({ element, lastValue, next }) => next(DNumber.add(element, lastValue)),
	),
	DNumber.round,
);
