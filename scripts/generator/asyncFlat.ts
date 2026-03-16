import { type FlatAsyncIterator } from "./types";

/**
 * {@include generator/asyncFlat/index.md}
 */
export function asyncFlat<
	GenericValue extends unknown,
	GenericDepth extends number = 1,
>(
	iterator: AsyncIterable<GenericValue> | Iterable<GenericValue>,
	depth?: GenericDepth,
): AsyncGenerator<
	FlatAsyncIterator<GenericValue, GenericDepth>,
	void,
	unknown
>;

export async function *asyncFlat(
	iterator: AsyncIterable<unknown> | Iterable<unknown>,
	depth = 1,
): any {
	for await (const value of iterator) {
		if (
			depth >= 1
			&& value
			&& typeof value === "object"
			&& (
				Symbol.iterator in value
				|| Symbol.asyncIterator in value
			)
		) {
			yield *asyncFlat(value as never, depth - 1);
		} else {
			yield value;
		}
	}
}
