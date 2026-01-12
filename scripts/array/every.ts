import { type AnyFunction } from "@scripts/common";

interface ArrayEveryParams<
	GenericInputArray extends readonly unknown[],
> {
	index: number;
	self: GenericInputArray;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericInput instead of GenericElement
// preserves the input structure and avoids this inference bug.
/**
 * {@include array/every/index.md}
 */
export function every<
	GenericInput extends readonly unknown[],
>(
	predicate: (
		element: GenericInput[number],
		params: ArrayEveryParams<GenericInput>
	) => boolean,
): (input: GenericInput) => boolean;

export function every<
	GenericInput extends readonly unknown[],
>(
	input: GenericInput,
	predicate: (
		element: GenericInput[number],
		params: ArrayEveryParams<GenericInput>
	) => boolean,
): boolean;

export function every(...args: [AnyFunction] | [readonly unknown[], AnyFunction]) {
	if (args.length === 1) {
		const [predicate] = args;

		return (input: unknown[]) => every(input, predicate as never);
	}

	const [input, predicate] = args;

	return input.every((element, index) => predicate(
		element,
		{
			index,
			self: input,
		},
	));
}
