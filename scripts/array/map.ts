import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayMapParams<
	GenericInputArray extends readonly unknown[],
> {
	index: number;
	self: GenericInputArray;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericInput instead of GenericElement
// preserves the array structure and avoids this inference bug.
export function map<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown,
>(
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapParams<GenericInput>
	) => GenericOutput,
): (input: GenericInput) => GenericOutput[];

export function map<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown,
>(
	input: GenericInput,
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapParams<GenericInput>
	) => GenericOutput,
): GenericOutput[];

export function map(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (input: unknown[]) => map(input, theFunction);
	}
	const [input, theFunction] = args;

	return input.map((element, index) => theFunction(
		element,
		{
			index,
			self: input,
		},
	));
}
