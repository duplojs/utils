import { hasSomeKinds, type ExpectType, pipe, when, E } from "@duplojs/utils";

const result = pipe(
	E.ok() as E.EitherOk | E.EitherError | E.EitherSuccess,
	when(
		hasSomeKinds([
			E.eitherOkKind,
			E.eitherErrorKind,
		]),
		(value) => {
			type check = ExpectType<
				typeof value,
				E.EitherOk | E.EitherError,
				"strict"
			>;

			return <const>"known";
		},
	),
);

type check = ExpectType<
	typeof result,
	"known" | E.EitherSuccess<unknown>,
	"strict"
>;
