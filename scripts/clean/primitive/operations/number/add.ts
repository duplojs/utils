import { unwrap, wrapValue } from "@scripts/common";
import { type Number } from "../../base";

/**
 * {@include clean/add/index.md}
 */
export function add(operand: Number | number): (value: Number) => Number;

export function add(value: Number, operand: Number | number): Number;

export function add(...args: [Number | number] | [Number, Number | number]) {
	if (args.length === 1) {
		const [operand] = args;
		return (value: Number) => add(value, operand);
	}

	const [value, operand] = args;

	return wrapValue(
		unwrap(value) + unwrap(operand),
	);
}
