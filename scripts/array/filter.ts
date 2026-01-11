import { type AnyFunction } from "@scripts/common/types/anyFunction";

interface ArrayFilterParams<
	GenericInputArray extends readonly unknown[],
> {
	index: number;
	self: GenericInputArray;
}

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericInput instead of GenericElement
// preserves the array structure and avoids this inference bug.
/**
 * {@include array/filter/index.md}
 */
export function filter<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number],
>(
	predicate: (
		item: GenericInput[number],
		params: ArrayFilterParams<GenericInput>
	) => item is GenericOutput,
): (input: GenericInput) => GenericOutput[];

export function filter<
	GenericInput extends readonly unknown[],
	GenericOutput extends GenericInput[number],
>(
	input: GenericInput,
	predicate: (
		item: GenericInput[number],
		params: ArrayFilterParams<GenericInput>
	) => item is GenericOutput,
): GenericOutput[];

export function filter<
	GenericInput extends readonly unknown[],
>(
	predicate: (
		item: GenericInput[number],
		params: ArrayFilterParams<GenericInput>
	) => boolean,
): (input: GenericInput) => GenericInput[number][];

export function filter<
	GenericInput extends readonly unknown[],
>(
	input: GenericInput,
	predicate: (
		item: GenericInput[number],
		params: ArrayFilterParams<GenericInput>
	) => boolean,
): GenericInput[number][];

export function filter(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [predicate] = args;

		return (input: unknown[]) => filter(input, predicate as never);
	}

	const [input, predicate] = args;

	return input.filter((item, index) => predicate(
		item,
		{
			index,
			self: input,
		},
	));
}
