import { unwrap, wrapValue } from "@scripts/common";
import { type Number } from "../../base";

export function multiply(multiplier: Number | number): (value: Number) => Number;

export function multiply(value: Number, multiplier: Number | number): Number;

export function multiply(...args: [Number | number] | [Number, Number | number]) {
	if (args.length === 1) {
		const [multiplier] = args;
		return (value: Number) => multiply(value, multiplier);
	}

	const [value, multiplier] = args;

	return wrapValue(
		unwrap(value) * unwrap(multiplier),
	);
}
