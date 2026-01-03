import { A } from "@scripts";

A.reduce(
	[1, 2],
	A.reduceFrom(0),
	({ element, lastValue, next }) => next(lastValue + element),
); // 3

A.reduce(
	["alpha", "beta"],
	A.reduceFrom({}),
	({ element, lastValue, nextWithObject }) => nextWithObject(lastValue, { [element]: true }),
); // { alpha: true, beta: true }

A.reduce(
	[1, 2],
	A.reduceFrom([0]),
	({ element, lastValue, nextPush }) => nextPush(lastValue, element),
); // [0, 1, 2]
