import { A, pipe } from "@scripts";

A.toTuple(
	2,
	[
		(value) => value + 1,
		(value) => value * 2,
	],
); // [3, 4]

pipe(
	"alpha",
	A.toTuple(
		[(value) => value.length],
	),
); // [5]
