import { E, pipe, type ExpectType } from "@duplojs/utils";

const result = pipe(
	E.bool(true ? "value" : null),
	E.whenIsBoolFalsy(() => "error"),
);

type check = ExpectType<
	typeof result,
	E.EitherBoolTruthy<"value"> | "error",
	"strict"
>;
