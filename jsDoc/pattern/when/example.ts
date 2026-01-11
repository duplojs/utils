import { A, innerPipe, isType, P, pipe } from "@scripts";

pipe(
	5,
	P.when(
		(value) => value > 3,
		(value) => value * 2,
	),
	P.otherwise((value) => value),
); // 10

A.map(
	<const>["alpha", 2],
	innerPipe(
		P.when(
			isType("string"),
			(value) => value.toUpperCase(),
		),
		P.otherwise((value) => value),
	),
); // ["ALPHA", 2]
