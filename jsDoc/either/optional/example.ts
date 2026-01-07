import { E } from "@scripts";

const result = E.optional(true ? "value" : undefined);

// type: E.EitherOptionalEmpty | E.EitherOptionalFilled<"value">
