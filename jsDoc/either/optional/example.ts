import { E } from "@scripts";

const result = E.optional(true ? "value" : undefined);

// type: E.OptionalEmpty | E.OptionalFilled<"value">
