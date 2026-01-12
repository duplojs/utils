import { S, pipe, when } from "@scripts";

const maybeValue = true ? "DuploJS" : "NestJS";

if (S.startsWith(maybeValue, "Du")) {
	// maybeValue is "DuploJS"
}

pipe(
	maybeValue,
	when(
		S.startsWith("Du"),
		(value) => {
			// value is "DuploJS"
		},
	),
);

S.startsWith("DuploJS", "Du"); // true
