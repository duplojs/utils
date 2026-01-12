import { type AnyTuple, unwrap, wrapValue } from "@scripts/common";
import { type Number } from "../../base";

/**
 * {@include clean/max/index.md}
 */
export function max(input: AnyTuple<Number | number>): Number {
	return wrapValue(
		Math.max(
			...input.map(unwrap),
		),
	);
}
