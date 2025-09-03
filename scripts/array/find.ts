import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayFindParams {
	index: number;
}

export function find<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	predicate: (element: GenericElement, params: ArrayFindParams) => element is GenericOutput,
): (array: readonly GenericElement[]) => GenericOutput | undefined;
export function find<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	array: readonly GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindParams) => element is GenericOutput,
): GenericOutput | undefined;
export function find<
	GenericElement extends unknown,
>(
	predicate: (element: GenericElement, params: ArrayFindParams) => boolean,
): (array: readonly GenericElement[]) => GenericElement | undefined;
export function find<
	GenericElement extends unknown,
>(
	array: readonly GenericElement[],
	predicate: (element: GenericElement, params: ArrayFindParams) => boolean,
): GenericElement | undefined;
export function find(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;

		return (array: unknown[]) => find(array, predicate as never);
	}
	const [array, predicate] = args;

	return array.find((element, index) => predicate(element, { index }));
}
