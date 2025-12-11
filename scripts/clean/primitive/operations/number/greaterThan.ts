import { unwrap } from "@scripts/common";
import { type Number } from "../../base";

export function greaterThan(threshold: Number | number): (value: Number) => boolean;

export function greaterThan(primitive: Number, threshold: Number | number): boolean;

export function greaterThan(...args: [Number | number] | [Number, Number | number]) {
	if (args.length === 1) {
		const [threshold] = args;
		return (primitive: Number) => greaterThan(primitive, threshold);
	}

	const [primitive, threshold] = args;

	return unwrap(primitive) > unwrap(threshold);
}
