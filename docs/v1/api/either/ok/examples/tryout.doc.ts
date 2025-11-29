import { E, pipe, S, whenElse, type ExpectType } from "@duplojs/utils";

const input = "hello@duplo.dev" as string;

const result = pipe(
	input,
	whenElse(
		S.includes("@"),
		E.ok,
		E.fail,
	),
);

type check = ExpectType<
	typeof result,
	E.EitherOk | E.EitherFail,
	"strict"
>;
