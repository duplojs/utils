import { E } from "@scripts";

const result = E.nullable(true ? "value" : null);

// type: E.EitherNullableEmpty | E.EitherNullableFilled<"value">
