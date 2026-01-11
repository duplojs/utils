import { E } from "@scripts";

const maybeValue = E.nullable(true ? "value" : null);

if (E.isNullableFilled(maybeValue)) {
	// type: E.EitherNullableFilled<"value">
}
