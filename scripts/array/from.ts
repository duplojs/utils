export function from<
	const GenericArray extends(
		| ArrayLike<unknown>
		| Iterable<unknown>
		| AsyncIterable<unknown>
	),
>(
	input: GenericArray,
): GenericArray extends AsyncIterable<infer InferredValue>
		? Promise<InferredValue[]>
		: GenericArray extends Iterable<infer InferredValue>
			? InferredValue[]
			: GenericArray extends ArrayLike<infer InferredValue>
				? InferredValue[]
				: never {
	if (typeof input === "object" && Symbol.asyncIterator in input) {
		return Array.fromAsync(input) as never;
	}

	return Array.from(input) as never;
}
