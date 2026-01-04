import { A, isType, pipe } from "@scripts";

A.findLast(
	[1, 2, 3],
	(value) => value > 1,
); // 3

A.findLast(
	<const>[1, "alpha", null],
	isType("string"),
); // "alpha"

pipe(
	[1, "alpha", null],
	A.findLast(isType("string")),
); // "alpha"
