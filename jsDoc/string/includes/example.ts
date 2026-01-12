import { S, pipe, when } from "@scripts";

const maybeValue = true ? "DuplpoJS" : "DuploTS";

if (S.includes(maybeValue, "JS")) {
	// maybeValue is "DuplpoJS"
}

pipe(
	maybeValue,
	when(
		S.includes("JS"),
		(value) => {
			// value is "DuplpoJS"
		},
	),
);

S.includes("DuploJS", "JS"); // true
