import { hasKinds, type ExpectType, pipe, when, E } from "@duplojs/utils";

const result = pipe(
	E.ok() as E.Ok | E.Error | E.Success,
	when(
		hasKinds([
			E.eitherOkKind,
			E.eitherRightKind,
		]),
		(value) => {
			type check = ExpectType<
				typeof value,
				E.Ok,
				"strict"
			>;

			return <const>"ok";
		},
	),
);

type check = ExpectType<
	typeof result,
	"ok" | E.Error<unknown> | E.Success<unknown>,
	"strict"
>;
