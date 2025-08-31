import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayFindParams {
	index: number;
}

export function find<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	predicate: (item: GenericElement, params: ArrayFindParams) => item is GenericOutput,
): (array: GenericElement[]) => GenericOutput | undefined;
export function find<
	GenericElement extends unknown,
	GenericOutput extends GenericElement,
>(
	array: GenericElement[],
	predicate: (item: GenericElement, params: ArrayFindParams) => item is GenericOutput,
): GenericOutput | undefined;
export function find<
	GenericElement extends unknown,
>(
	predicate: (item: GenericElement, params: ArrayFindParams) => boolean,
): (array: GenericElement[]) => GenericElement | undefined;
export function find<
	GenericElement extends unknown,
>(
	array: GenericElement[],
	predicate: (item: GenericElement, params: ArrayFindParams) => boolean,
): GenericElement | undefined;
export function find(...args: [unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;

		return (array: unknown[]) => find(array, predicate as never);
	}
	const [array, predicate] = args;

	return array.find((item, index) => predicate(item, { index }));
}
