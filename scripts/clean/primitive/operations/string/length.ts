import { unwrap, wrapValue } from "@scripts/common";
import { type Number, type String } from "../../base";

/**
 * {@include clean/length/index.md}
 */
export function length(primitive: String): Number {
	return wrapValue(unwrap(primitive).length);
}
