import { S, pipe, when } from "@scripts";

const maybeValue = true ? "DuploJS" : "DuploTS";

if (S.endsWith(maybeValue, "JS")) {
	// maybeValue is "DuploJS"
}

pipe(
	maybeValue,
	when(
		S.endsWith("JS"),
		(value) => {
			// value is "DuploJS"
		},
	),
);

S.endsWith("DuploJS", "JS"); // true
