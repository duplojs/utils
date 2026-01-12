import { E, pipe, S, equal, whenElse } from "@scripts";

const input = "  duplo  ";

const result = pipe(
	input,
	S.trim,
	whenElse(
		(value) => equal(S.length(value), 0),
		E.error,
		E.success,
	),
);

// type: E.EitherError<string> | E.EitherSuccess<string>
