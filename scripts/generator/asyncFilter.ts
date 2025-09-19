import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface GeneratorFilterParams {
	index: number;
}

export function asyncFilter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	predicate: (item: GenericElement, params: GeneratorFilterParams) => item is GenericOutput,
): (
	iterator: Iterable<GenericElement>
	| AsyncIterable<GenericElement>
) => AsyncGenerator<GenericOutput, unknown, unknown>;

export function asyncFilter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	predicate: (item: GenericElement, params: GeneratorFilterParams) => item is GenericOutput,
): AsyncGenerator<GenericOutput, unknown, unknown>;

export function asyncFilter<
	GenericElement extends unknown,
>(
	predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean,
): (
	iterator: Iterable<GenericElement>
	| AsyncIterable<GenericElement>
) => AsyncGenerator<GenericElement, unknown, unknown>;

export function asyncFilter<
	GenericElement extends unknown,
>(
	iterator: Iterable<GenericElement> | AsyncIterable<GenericElement>,
	predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean,
): AsyncGenerator<GenericElement, unknown, unknown>;

export function asyncFilter(
	...args: [Iterable<unknown> | AsyncIterable<unknown>, AnyFunction]
	| [AnyFunction]
): any {
	if (args.length === 1) {
		const [predicate] = args;

		return (iterator: Iterable<unknown>) => asyncFilter(iterator, predicate as never);
	}

	const [iterator, predicate] = args;

	let index = 0;
	return (async function *() {
		for await (const element of iterator) {
			if (predicate(element, { index })) {
				yield element;
			}
			index++;
		}
	})();
}
