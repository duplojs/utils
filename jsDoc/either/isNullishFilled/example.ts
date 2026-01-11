import { E } from "@scripts";

const maybeValue = E.nullish(true ? "value" : null);

if (E.isNullishFilled(maybeValue)) {
	// type: E.EitherNullishFilled<"value">
}
