import { unwrap } from "@scripts/common";
import { type Number, type String } from "../../base";

export function lengthGreaterThan(length: Number | number): (primitive: String) => boolean;

export function lengthGreaterThan(primitive: String, length: Number | number): boolean;

export function lengthGreaterThan(...args: [Number | number] | [String, Number | number]) {
	if (args.length === 1) {
		const [length] = args;
		return (primitive: String) => lengthGreaterThan(primitive, length);
	}

	const [primitive, length] = args;

	return unwrap(primitive).length > unwrap(length);
}
