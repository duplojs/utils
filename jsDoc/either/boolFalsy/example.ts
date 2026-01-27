import { E, pipe, equal, when } from "@scripts";

const input = "word" as string;

const result = pipe(
	input,
	when(
		equal(""),
		E.boolFalsy,
	),
);

// type: string | E.BoolFalsy<"">
