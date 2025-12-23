import { E, N, pipe, whenElse, type ExpectType } from "@duplojs/utils";

const input = 3 as number;

const result = pipe(
	input,
	whenElse(
		N.lessThan(3),
		(value) => pipe(
			value,
			N.add(1),
			E.success,
		),
		E.fail,
	),
);

type check = ExpectType<
	typeof result,
	E.EitherSuccess<number> | E.EitherFail,
	"strict"
>;
