import { instanceOf, pipe, when } from "@scripts";

const input = new Date();

if (instanceOf(input, Date)) {
	// type: Date
}

const result = pipe(
	input,
	when(
		instanceOf(Date),
		(value) => value.toISOString(),
	),
);
// result: "..."
