import { E, pipe, S, when } from "@scripts";

const input = "hello@duplo.dev" as string;

const result = pipe(
	input,
	when(
		S.includes("@"),
		E.boolTruthy,
	),
);

// type: string | E.BoolTruthy<`${string}@${string}`>
