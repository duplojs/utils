import { A, isType, pipe } from "@scripts";

A.filter(
	[1, 2, 3, 4],
	(value) => value > 2,
); // [3, 4]

pipe(
	<const>[1, "alpha", null],
	A.filter(
		isType("string"),
	),
); // "alpha"[]
