import { unwrap } from "@scripts/common";
import { type Number, type String } from "../../base";

export function lengthLessThan(length: Number | number): (primitive: String) => boolean;

export function lengthLessThan(primitive: String, length: Number | number): boolean;

export function lengthLessThan(...args: [Number | number] | [String, Number | number]) {
	if (args.length === 1) {
		const [length] = args;
		return (primitive: String) => lengthLessThan(primitive, length);
	}

	const [primitive, length] = args;

	return unwrap(primitive).length < unwrap(length);
}
