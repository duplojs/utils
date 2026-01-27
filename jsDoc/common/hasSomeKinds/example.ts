import { E, hasSomeKinds, pipe, when } from "@scripts";

const input = E.ok() as E.Ok | E.Error;

if (hasSomeKinds(input, [
	E.eitherOkKind,
	E.eitherErrorKind,
])) {
	// type: E.Ok | E.Error
}

const result = pipe(
	input,
	when(
		hasSomeKinds([
			E.eitherOkKind,
			E.eitherErrorKind,
		]),
		() => "known",
	),
);
// result: "known" | E.Error<unknown>
