import { unwrap, wrapValue } from "@scripts/common";
import { type Number, type String } from "../../base";

export function length(primitive: String): Number {
	return wrapValue(unwrap(primitive).length);
}
