import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface GeneratorFilterParams {
	index: number;
}

export function filter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	predicate: (item: GenericElement, params: GeneratorFilterParams) => item is GenericOutput,
): (iterator: Iterable<GenericElement>) => Generator<GenericOutput, unknown, unknown>;

export function filter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	iterator: Iterable<GenericElement>,
	predicate: (item: GenericElement, params: GeneratorFilterParams) => item is GenericOutput,
): Generator<GenericOutput, unknown, unknown>;

export function filter<
	GenericElement extends unknown,
>(
	predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean,
): (iterator: Iterable<GenericElement>) => Generator<GenericElement, unknown, unknown>;

export function filter<
	GenericElement extends unknown,
>(
	iterator: Iterable<GenericElement>,
	predicate: (item: GenericElement, params: GeneratorFilterParams) => boolean,
): Generator<GenericElement, unknown, unknown>;

export function filter(...args: [Iterable<unknown>, AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;

		return (iterator: Iterable<unknown>) => filter(iterator, predicate as never);
	}

	const [iterator, predicate] = args;

	let index = 0;
	return (function *() {
		for (const element of iterator) {
			if (predicate(element, { index })) {
				yield element;
			}
			index++;
		}
	})();
}
