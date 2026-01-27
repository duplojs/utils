import { E, N, P, pipe } from "@scripts";

const input = 0 as number;

const result = pipe(
	input,
	P.when(
		N.greaterThan(0),
		(value) => E.right("number.positive", value),
	),
	P.otherwise(
		(value) => E.left("number.notPositive", value),
	),
);

// type: E.Right<"number.positive", number> | E.Left<"number.notPositive", number>
