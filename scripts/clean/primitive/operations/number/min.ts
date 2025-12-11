import { type AnyTuple, unwrap, wrapValue } from "@scripts/common";
import { type Number } from "../../base";

export function min(input: AnyTuple<Number | number>): Number {
	return wrapValue(
		Math.min(
			...input.map(unwrap),
		),
	);
}
