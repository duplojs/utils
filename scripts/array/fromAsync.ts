import { type AnyFunction } from "@scripts/common";

interface ArrayFromParams {
	index: number;
}

export function fromAsync<
	GenericElement extends unknown,
>(
	arrayLike: ArrayLike<GenericElement>,
): Promise<GenericElement[]>;

export function fromAsync<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	arrayLike: ArrayLike<GenericElement>,
	theFunction: (value: GenericElement, params: ArrayFromParams) => Promise<GenericOutput> | GenericOutput,
): Promise<GenericOutput[]>;

export function fromAsync<
	GenericElement extends unknown,
>(
	iterable: Iterable<GenericElement>,
): Promise<GenericElement[]>;

export function fromAsync<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	iterable: Iterable<GenericElement>,
	theFunction: (value: GenericElement, params: ArrayFromParams) => Promise<GenericOutput> | GenericOutput,
): Promise<GenericOutput[]>;

export function fromAsync<
	GenericElement extends unknown,
>(): (arrayLike: ArrayLike<GenericElement>) => Promise<GenericElement[]>;

export function fromAsync<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	theFunction: (value: GenericElement, params: ArrayFromParams) => Promise<GenericOutput> | GenericOutput,
): (arrayLike: ArrayLike<GenericElement>) => Promise<GenericOutput[]>;

export function fromAsync<
	GenericElement extends unknown,
>(): (iterable: Iterable<GenericElement>) => Promise<GenericElement[]>;

export function fromAsync<
	GenericElement extends unknown,
	GenericOutput extends unknown,
>(
	theFunction: (value: GenericElement, params: ArrayFromParams) => Promise<GenericOutput> | GenericOutput,
): (iterable: Iterable<GenericElement>) => Promise<GenericOutput[]>;

export function fromAsync(
	...args:
		| [ArrayLike<unknown>]
		| [ArrayLike<unknown>, AnyFunction]
		| [Iterable<unknown>]
		| [Iterable<unknown>, AnyFunction]
		| []
		| [AnyFunction]
): any {
	if (args.length === 0) {
		return async(arrayLikeOrIterable: ArrayLike<unknown> | Iterable<unknown>) => fromAsync(
			arrayLikeOrIterable as ArrayLike<unknown>,
		);
	}

	if (args.length === 1) {
		const [arrayLikeOrIterableOrTheFunction] = args;
		if (typeof arrayLikeOrIterableOrTheFunction === "function") {
			return async(arrayLikeOrIterable: ArrayLike<unknown> | Iterable<unknown>) => fromAsync(
				arrayLikeOrIterable as ArrayLike<unknown>,
				arrayLikeOrIterableOrTheFunction,
			);
		}

		return Promise.resolve(Array.from(arrayLikeOrIterableOrTheFunction));
	}

	const [arrayLikeOrIterable, theFunction] = args;

	const array = Array.from(arrayLikeOrIterable);

	const promises = array.map((value, index) => Promise.resolve(theFunction(value, { index })));

	return Promise.all(promises);
}
