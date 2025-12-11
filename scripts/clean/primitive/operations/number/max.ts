import { unwrap, wrapValue } from "@scripts/common";
import { type Number } from "../../base";

export function max(input: readonly (Number | number)[]): Number {
	return wrapValue(
		Math.max(
			...input.map(unwrap),
		),
	);
}
