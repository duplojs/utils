import { A, pipe } from "@scripts";

A.maxElements(
	[1, 2, 3],
	2,
); // false

A.maxElements(
	[1, 2],
	2,
); // true

pipe(
	["alpha", "beta"],
	A.maxElements(3),
); // true
