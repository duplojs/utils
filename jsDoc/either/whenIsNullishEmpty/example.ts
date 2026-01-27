import { E, pipe } from "@scripts";

const result = pipe(
	E.nullish(true ? "value" : null),
	E.whenIsNullishEmpty(() => "nullish"),
);

// type: "nullish" | E.NullishFilled<"value">
