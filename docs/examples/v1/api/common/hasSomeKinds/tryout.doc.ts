import { hasSomeKinds, type ExpectType, pipe, when, E } from "@duplojs/utils";

const result = pipe(
	E.ok() as E.Ok | E.Error | E.Success,
	when(
		hasSomeKinds([
			E.eitherOkKind,
			E.eitherErrorKind,
		]),
		(value) => {
			type check = ExpectType<
				typeof value,
				E.Ok | E.Error,
				"strict"
			>;

			return <const>"known";
		},
	),
);

type check = ExpectType<
	typeof result,
	"known" | E.Success<unknown>,
	"strict"
>;
