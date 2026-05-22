/**
 * {@include generator/concat/index.md}
 */
export function concat<
	const GenericElement extends unknown,
>(
	elements: Iterable<GenericElement>,
): (
	iterator: Iterable<GenericElement>
) => Generator<GenericElement, unknown, unknown>;

export function concat<
	const GenericElement extends unknown,
>(
	iterator: Iterable<GenericElement>,
	elements: Iterable<GenericElement>,
	...elementsRest: Iterable<GenericElement>[]
): Generator<GenericElement, unknown, unknown>;

export function concat(
	...args:
		| [Iterable<unknown>, Iterable<unknown>, ...Iterable<unknown>[]]
		| [Iterable<unknown>]
): any {
	if (args.length === 1) {
		const [elements] = args;
		return (iterator: Iterable<unknown>) => concat(iterator, elements);
	}

	const [iterator, elements, ...elementsRest] = args as [
		Iterable<unknown>,
		Iterable<unknown>,
		...Iterable<unknown>[],
	];

	return (function *() {
		yield *iterator;
		yield *elements;

		for (const value of elementsRest) {
			yield *value;
		}
	})();
}
