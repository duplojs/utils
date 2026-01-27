import { E, pipe, S, when, type ExpectType } from "@duplojs/utils";

const input = "hello@duplo.dev" as string;

const result = pipe(
	input,
	when(
		S.includes("@"),
		E.boolTruthy,
	),
);

type check = ExpectType<
	typeof result,
	string | E.BoolTruthy<`${string}@${string}`>,
	"strict"
>;
