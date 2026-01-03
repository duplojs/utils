import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayFlatMapParams<
	GenericInputArray extends readonly unknown[],
> {
	index: number;
	self: GenericInputArray;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericArray instead of GenericElement
// preserves the array structure and avoids this inference bug.
/**
 * {@include array/flatMap/index.md}
 */
export function flatMap<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown,
>(
	theFunction: (
		element: GenericInput[number],
		params: ArrayFlatMapParams<GenericInput>
	) => GenericOutput,
): (input: GenericInput) => FlatArray<GenericOutput, 1>[];

export function flatMap<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown,
>(
	input: GenericInput,
	theFunction: (
		element: GenericInput[number],
		params: ArrayFlatMapParams<GenericInput>
	) => GenericOutput,
): FlatArray<GenericOutput, 1>[];

export function flatMap(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (input: unknown[]) => flatMap(input, theFunction);
	}
	const [input, theFunction] = args;

	return input.flatMap((element, index) => theFunction(
		element,
		{
			index,
			self: input,
		},
	));
}
