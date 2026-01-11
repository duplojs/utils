import { unwrap, wrapValue } from "@scripts/common";
import { type Number } from "../../base";

/**
 * {@include clean/divide/index.md}
 */
export function divide(divisor: Number | number): (value: Number) => Number;

export function divide(value: Number, divisor: Number | number): Number;

export function divide(...args: [Number | number] | [Number, Number | number]) {
	if (args.length === 1) {
		const [divisor] = args;
		return (value: Number) => divide(value, divisor);
	}

	const [value, divisor] = args;

	return wrapValue(
		unwrap(value) / unwrap(divisor),
	);
}
