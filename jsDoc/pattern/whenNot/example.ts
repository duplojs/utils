import { A, innerPipe, isType, P, pipe } from "@scripts";

pipe(
	2,
	P.whenNot(
		(value) => value > 3,
		(value) => value * 2,
	),
	P.otherwise((value) => value),
); // 4

A.map(
	<const>["alpha", 2],
	innerPipe(
		P.whenNot(
			isType("string"),
			(value) => value + 1,
		),
		P.otherwise((value) => value),
	),
); // ["alpha", 3]
