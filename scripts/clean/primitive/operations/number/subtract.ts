import { unwrap, wrapValue } from "@scripts/common";
import { type Number } from "../../base";

export function subtract(subtrahend: Number | number): (value: Number) => Number;

export function subtract(value: Number, subtrahend: Number | number): Number;

export function subtract(...args: [Number | number] | [Number, Number | number]) {
	if (args.length === 1) {
		const [subtrahend] = args;
		return (value: Number) => subtract(value, subtrahend);
	}

	const [value, subtrahend] = args;

	return wrapValue(
		unwrap(value) - unwrap(subtrahend),
	);
}
