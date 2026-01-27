import { E } from "@scripts";

const maybeValue = E.optional(true ? "value" : undefined);

if (E.isOptionalFilled(maybeValue)) {
	// type: E.OptionalFilled<"value">
}
