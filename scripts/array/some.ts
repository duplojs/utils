import { type AnyFunction } from "@scripts/common";

interface ArraySomeParams<
	GenericInputArray extends readonly unknown[],
> {
	index: number;
	self: GenericInputArray;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericInput instead of GenericElement
// preserves the array structure and avoids this inference bug.
/**
 * {@include array/some/index.md}
 */
export function some<
	GenericInput extends readonly unknown[],
>(
	predicate: (
		element: GenericInput[number],
		params: ArraySomeParams<GenericInput>
	) => boolean,
): (input: GenericInput) => boolean;

export function some<
	GenericInput extends readonly unknown[],
>(
	input: GenericInput,
	predicate: (
		element: GenericInput[number],
		params: ArraySomeParams<GenericInput>
	) => boolean,
): boolean;

export function some(...args: [AnyFunction] | [readonly unknown[], AnyFunction]) {
	if (args.length === 1) {
		const [predicate] = args;

		return (input: unknown[]) => some(input, predicate as never);
	}

	const [input, predicate] = args;

	return input.some((element, index) => predicate(
		element,
		{
			index,
			self: input,
		},
	));
}
