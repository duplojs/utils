import { E, N, pipe, whenElse } from "@scripts";

const input = 3 as number;

const result = pipe(
	input,
	whenElse(
		N.lessThan(3),
		(value) => pipe(
			value,
			N.add(1),
			E.success,
		),
		E.fail,
	),
);

// type: E.Success<number> | E.Fail
