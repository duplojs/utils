import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayFilterParams {
	index: number;
}

export function filter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	predicate: (item: GenericElement, params: ArrayFilterParams) => item is GenericOutput,
): (array: readonly GenericElement[]) => GenericOutput[];
export function filter<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	array: readonly GenericElement[],
	predicate: (item: GenericElement, params: ArrayFilterParams) => item is GenericOutput,
): GenericOutput[];
export function filter<
	GenericElement extends unknown,
>(
	predicate: (item: GenericElement, params: ArrayFilterParams) => boolean,
): (array: readonly GenericElement[]) => GenericElement[];
export function filter<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	predicate: (item: GenericElement, params: ArrayFilterParams) => boolean,
): GenericElement[];
export function filter(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;

		return (array: unknown[]) => filter(array, predicate as never);
	}

	const [array, predicate] = args;

	return array.filter((item, index) => predicate(item, { index }));
}
