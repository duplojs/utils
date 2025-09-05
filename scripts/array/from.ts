export function from<
	GenericElement extends unknown,
>(
	input: ArrayLike<GenericElement>,
): GenericElement[];

export function from<
	GenericElement extends unknown,
>(
	input: Iterable<GenericElement>,
): GenericElement[];

export function from<
	GenericElement extends unknown,
>(
	input: AsyncIterable<GenericElement>,
): Promise<GenericElement[]>;

export function from(
	input: ArrayLike<unknown> | Iterable<unknown> | AsyncIterable<unknown>,
): any {
	if (typeof input === "object" && Symbol.asyncIterator in input) {
		return Array.fromAsync(input);
	}

	return Array.from(input);
}
