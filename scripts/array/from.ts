import { type AnyFunction } from "@scripts/common";

interface ArrayFromParams {
	index: number;
}

export function from<
	GenericElement extends unknown,
>(
	arrayLike: ArrayLike<GenericElement>,
): GenericElement[];

export function from<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	arrayLike: ArrayLike<GenericElement>,
	theFunction: (value: GenericElement, params: ArrayFromParams) => GenericOutput,
): GenericOutput[];

export function from<
	GenericElement extends unknown,
>(
	iterable: Iterable<GenericElement>,
): GenericElement[];

export function from<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	iterable: Iterable<GenericElement>,
	theFunction: (value: GenericElement, params: ArrayFromParams) => GenericOutput,
): GenericOutput[];

export function from<
	GenericElement extends unknown,
>(): (arrayLike: ArrayLike<GenericElement>) => GenericElement[];

export function from<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	theFunction: (value: GenericElement, params: ArrayFromParams) => GenericOutput,
): (arrayLike: ArrayLike<GenericElement>) => GenericOutput[];

export function from<
	GenericElement extends unknown,
>(): (iterable: Iterable<GenericElement>) => GenericElement[];

export function from<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	theFunction: (value: GenericElement, params: ArrayFromParams) => GenericOutput,
): (iterable: Iterable<GenericElement>) => GenericOutput[];

export function from(
	...args:
		| [ArrayLike<unknown>]
		| [ArrayLike<unknown>, AnyFunction]
		| [Iterable<unknown>]
		| [Iterable<unknown>, AnyFunction]
		| []
		| [AnyFunction]
): any {
	if (args.length === 0) {
		return (arrayLikeOrIterable: ArrayLike<unknown> | Iterable<unknown>) => from(
			arrayLikeOrIterable as ArrayLike<unknown>,
		);
	}

	if (args.length === 1) {
		const [arrayLikeOrIterableOrTheFunction] = args;
		if (typeof arrayLikeOrIterableOrTheFunction === "function") {
			return (arrayLikeOrIterable: ArrayLike<unknown> | Iterable<unknown>) => from(
				arrayLikeOrIterable as ArrayLike<unknown>,
				arrayLikeOrIterableOrTheFunction,
			);
		}

		return Array.from(arrayLikeOrIterableOrTheFunction);
	}

	const [arrayLikeOrIterable, theFunction] = args;

	return Array.from(arrayLikeOrIterable, (value, index) => theFunction(value, { index }));
}
