import { E, pipe, S, whenElse } from "@scripts";

const input = "hello@duplo.dev" as string;

const result = pipe(
	input,
	whenElse(
		S.includes("@"),
		E.ok,
		E.fail,
	),
);

// type: E.Ok | E.Fail
