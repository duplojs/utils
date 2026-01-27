import { E, hasKinds, pipe, when } from "@scripts";

const input = E.ok() as E.Ok | E.Error;

if (hasKinds(input, [
	E.eitherOkKind,
	E.eitherRightKind,
])) {
	// type: E.Ok
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
// result: "ok" | E.Error<unknown>
