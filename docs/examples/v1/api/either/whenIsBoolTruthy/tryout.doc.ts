import { E, pipe, S, type ExpectType } from "@duplojs/utils";

const result = pipe(
	E.bool(true ? "value" : null),
	E.whenIsBoolTruthy(S.toUpperCase),
);

type check = ExpectType<
	typeof result,
	E.BoolFalsy<null> | "VALUE",
	"strict"
>;
