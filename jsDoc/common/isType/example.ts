import { isType, pipe, when } from "@scripts";

type Input = string | number;

const input = 3 as Input;

if (isType(input, "number")) {
	// type: number
}

const result = pipe(
	input,
	when(
		isType("number"),
		(value) => value + 1,
	),
);
// result: 4
