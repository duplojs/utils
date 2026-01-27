import { E } from "@scripts";

const maybeValue = E.optional(true ? "value" : undefined);

if (E.isOptionalEmpty(maybeValue)) {
	// type: E.OptionalEmpty
}
