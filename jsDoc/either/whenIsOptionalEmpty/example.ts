import { E, pipe } from "@scripts";

const result = pipe(
	E.optional(true ? "value" : undefined),
	E.whenIsOptionalEmpty(() => "empty"),
);

// type: E.EitherOptionalFilled<"value"> | "empty"
