import { pipe, A, N, equal, innerPipe } from "@duplojs/utils";

const result = pipe(
	[1, 2, 3, 4, 5, 6],
	A.filter(
		innerPipe(
			N.modulo(2),
			equal(0),
		),
	),
	A.map(N.multiply(2)),
	A.reduce(
		0,
		({ element, lastValue, next }) => next(N.add(element, lastValue)),
	),
	N.round,
);
