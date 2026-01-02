import { hasKinds, type ExpectType, pipe, when, E } from "@duplojs/utils";

const result = pipe(
	E.ok() as E.EitherOk | E.EitherError | E.EitherSuccess,
	when(
		hasKinds([
			E.eitherOkKind,
			E.eitherRightKind,
		]),
		(value) => {
			type check = ExpectType<
				typeof value,
				E.EitherOk,
				"strict"
			>;

			return <const>"ok";
		},
	),
);

type check = ExpectType<
	typeof result,
	"ok" | E.EitherError<unknown> | E.EitherSuccess<unknown>,
	"strict"
>;
