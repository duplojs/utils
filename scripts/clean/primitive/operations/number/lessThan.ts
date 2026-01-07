import { unwrap } from "@scripts/common";
import { type Number } from "../../base";

/**
 * {@include clean/lessThan/index.md}
 */
export function lessThan(threshold: Number | number): (value: Number) => boolean;

export function lessThan(primitive: Number, threshold: Number | number): boolean;

export function lessThan(...args: [Number | number] | [Number, Number | number]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (primitive: Number) => lessThan(primitive, threshold);
	}

	const [primitive, threshold] = args;

	return unwrap(primitive) < unwrap(threshold);
}
