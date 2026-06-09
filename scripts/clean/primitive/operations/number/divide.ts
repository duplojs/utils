import { unwrap, wrapValue } from "@scripts/common";
import { type Number } from "../../base";
import { type NotZero } from "@scripts/clean/constraint";

/**
 * {@include clean/divide/index.md}
 */
export function divide(divisor: NotZero): (value: Number) => Number;

export function divide(value: Number, divisor: NotZero): Number;

export function divide(...args: [NotZero] | [Number, NotZero]) {
	if (args.length === 1) {
		const [divisor] = args;
		return (value: Number) => divide(value, divisor);
	}

	const [value, divisor] = args;

	return wrapValue(
		unwrap(value) / unwrap(divisor),
	);
}
