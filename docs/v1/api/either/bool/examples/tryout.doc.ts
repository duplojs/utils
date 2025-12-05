import { A, E, pipe, type ExpectType, equal } from "@duplojs/utils";

const result = pipe(
	["duplo"],
	A.find(equal("nest")),
	E.bool,
);

type check = ExpectType<
	typeof result,
	E.EitherBoolFalsy<undefined> | E.EitherBoolTruthy<"nest">,
	"strict"
>;
