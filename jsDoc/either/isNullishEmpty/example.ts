import { E } from "@scripts";

const maybeValue = E.nullish(true ? "value" : null);

if (E.isNullishEmpty(maybeValue)) {
	// type: E.NullishEmpty<null>
}
