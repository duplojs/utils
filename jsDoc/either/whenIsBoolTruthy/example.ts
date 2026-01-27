import { E, pipe, S } from "@scripts";

const result = pipe(
	E.bool(true ? "value" : null),
	E.whenIsBoolTruthy(S.toUpperCase),
);

// type: E.BoolFalsy<null> | "VALUE"
