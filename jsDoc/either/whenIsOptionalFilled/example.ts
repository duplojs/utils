import { E, pipe, S } from "@scripts";

const result = pipe(
	E.optional(true ? "value" : undefined),
	E.whenIsOptionalFilled(S.capitalize),
);

// type: E.EitherOptionalEmpty | "Value"
