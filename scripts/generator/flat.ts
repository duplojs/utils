import { type FlatIterator } from "./types";

/**
 * {@include generator/flat/index.md}
 */
export function flat<
	GenericValue extends unknown,
	GenericDepth extends number = 1,
>(
	iterator: Iterable<GenericValue>,
	depth?: GenericDepth,
): Generator<
	FlatIterator<GenericValue, GenericDepth>,
	void,
	unknown
>;

export function *flat(
	iterator: Iterable<unknown>,
	depth = 1,
): any {
	for (const value of iterator) {
		if (
			depth >= 1
			&& value
			&& typeof value === "object"
			&& Symbol.iterator in value
		) {
			yield *flat(value as never, depth - 1);
		} else {
			yield value;
		}
	}
}
