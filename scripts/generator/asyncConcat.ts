/**
 * {@include generator/asyncConcat/index.md}
 */
export function asyncConcat<
	const GenericElement extends unknown,
>(
	elements: AsyncIterable<GenericElement> | Iterable<GenericElement>,
): (
	iterator: AsyncIterable<GenericElement> | Iterable<GenericElement>
) => AsyncGenerator<GenericElement, unknown, unknown>;

export function asyncConcat<
	const GenericElement extends unknown,
>(
	iterator: AsyncIterable<GenericElement> | Iterable<GenericElement>,
	elements: AsyncIterable<GenericElement> | Iterable<GenericElement>,
	...elementsRest: (AsyncIterable<GenericElement> | Iterable<GenericElement>)[]
): AsyncGenerator<GenericElement, unknown, unknown>;

export function asyncConcat(
	...args:
		| [
			AsyncIterable<unknown> | Iterable<unknown>,
			AsyncIterable<unknown> | Iterable<unknown>,
			...(AsyncIterable<unknown> | Iterable<unknown>)[],
		]
		| [AsyncIterable<unknown> | Iterable<unknown>]
): any {
	if (args.length === 1) {
		const [elements] = args;
		return (
			iterator: AsyncIterable<unknown> | Iterable<unknown>,
		) => asyncConcat(iterator, elements);
	}

	const [iterator, elements, ...elementsRest] = args as [
		AsyncIterable<unknown> | Iterable<unknown>,
		AsyncIterable<unknown> | Iterable<unknown>,
		...(AsyncIterable<unknown> | Iterable<unknown>)[],
	];

	return (async function *() {
		for await (const value of iterator) {
			yield value;
		}

		for await (const value of elements) {
			yield value;
		}

		for (const iterable of elementsRest) {
			for await (const value of iterable) {
				yield value;
			}
		}
	})();
}
