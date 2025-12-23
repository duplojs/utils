import { E, N, P, pipe, type ExpectType } from "@duplojs/utils";

const input = 0 as number;

const result = pipe(
	input,
	P.when(
		N.greaterThan(0),
		(value) => E.right("number.positive", value),
	),
	P.otherwise(
		(value) => E.left("number.notPositive", value),
	),
);

type check = ExpectType<
	typeof result,
	E.EitherRight<"number.positive", number> | E.EitherLeft<"number.notPositive", number>,
	"strict"
>;
