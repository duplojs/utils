import { E, pipe, S } from "@scripts";

const result = pipe(
	E.nullable(true ? "value" : null),
	E.whenIsNullableFilled(S.capitalize),
);

// type: E.NullableEmpty | "Value"
