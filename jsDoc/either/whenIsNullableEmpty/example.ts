import { E, pipe } from "@scripts";

const result = pipe(
	E.nullable(true ? "value" : null),
	E.whenIsNullableEmpty(() => "nullable"),
);

// type: "nullable" | E.EitherNullableFilled<"value">
