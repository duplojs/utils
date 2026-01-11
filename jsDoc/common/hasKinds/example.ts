import { E, hasKinds, pipe, when } from "@scripts";

const input = E.ok() as E.EitherOk | E.EitherError;

if (hasKinds(input, [
	E.eitherOkKind,
	E.eitherRightKind,
])) {
	// type: E.EitherOk
}

const result = pipe(
	input,
	when(
		hasKinds([
			E.eitherOkKind,
			E.eitherRightKind,
		]),
		() => "ok",
	),
);
// result: "ok" | E.EitherError<unknown>
