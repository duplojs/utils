import { E } from "@scripts";

const maybeValue = E.nullable(true ? "value" : null);

if (E.isNullableEmpty(maybeValue)) {
	// type: E.EitherNullableEmpty
}
