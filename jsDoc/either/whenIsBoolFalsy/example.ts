import { E, pipe } from "@scripts";

const result = pipe(
	E.bool(true ? "value" : null),
	E.whenIsBoolFalsy(() => "falsy"),
);

// type: E.BoolTruthy<"value"> | "falsy"
