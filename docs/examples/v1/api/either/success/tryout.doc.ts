import { E, pipe, S, equal, whenElse, type ExpectType } from "@duplojs/utils";

const input = "  duplo  ";

const result = pipe(
	input,
	S.trim,
	whenElse(
		(value) => equal(S.length(value), 0),
		E.error,
		E.success,
	),
);

type check = ExpectType<
	typeof result,
	E.EitherError<string> | E.EitherSuccess<string>,
	"strict"
>;
