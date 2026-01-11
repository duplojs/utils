import { E, hasSomeKinds, pipe, when } from "@scripts";

const input = E.ok() as E.EitherOk | E.EitherError;

if (hasSomeKinds(input, [
	E.eitherOkKind,
	E.eitherErrorKind,
])) {
	// type: E.EitherOk | E.EitherError
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
// result: "known" | E.EitherError<unknown>
