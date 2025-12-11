import { unwrap } from "@scripts/common";
import { type Number, type String } from "../../base";

export function lengthEqual(length: Number | number): (primitive: String) => boolean;

export function lengthEqual(primitive: String, length: Number | number): boolean;

export function lengthEqual(...args: [Number | number] | [String, Number | number]) {
	if (args.length === 1) {
		const [length] = args;
		return (primitive: String) => lengthEqual(primitive, length);
	}

	const [primitive, length] = args;

	return unwrap(primitive).length === unwrap(length);
}
