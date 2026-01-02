import { A, isType, pipe } from "@scripts";

A.find(
	[1, 2, 3],
	(value) => value > 2,
); // 3

pipe(
	<const>[1, "alpha", null],
	A.find(isType("string")),
); // "alpha"
