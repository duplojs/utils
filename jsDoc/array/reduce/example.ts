import { A, pipe } from "@scripts";

A.reduce(
	[1, 2, 3],
	0,
	({ element, lastValue, next }) => next(lastValue + element),
); // 6

pipe(
	[1, 2],
	A.reduce(1, ({ element, lastValue, next }) => next(lastValue * element)),
); // 2

A.reduce(
	[1, 2, 3],
	0,
	({ element, lastValue, next, exit }) => element === 2 ? exit(lastValue) : next(lastValue + element),
); // 1
