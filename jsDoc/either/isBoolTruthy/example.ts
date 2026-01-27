import { E } from "@scripts";

const maybeInput = E.bool(true ? true : null);

if (E.isBoolTruthy(maybeInput)) {
	// type: E.BoolTruthy<true>
}
