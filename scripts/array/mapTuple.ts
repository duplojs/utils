import type { AnyFunction } from "@scripts/common/types";
import type { MapTuple } from "./types";

interface ArrayMapTupleParams<
	GenericInputTuple extends readonly unknown[],
> {
	index: number;
	self: GenericInputTuple;
}

/**
 * {@include array/mapTuple/index.md}
 */
export function mapTuple<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown,
>(
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapTupleParams<GenericInput>
	) => GenericOutput,
): (input: GenericInput) => MapTuple<GenericInput, GenericOutput>;

export function mapTuple<
	GenericInput extends readonly unknown[],
	GenericOutput extends unknown,
>(
	input: GenericInput,
	theFunction: (
		element: GenericInput[number],
		params: ArrayMapTupleParams<GenericInput>
	) => GenericOutput,
): MapTuple<GenericInput, GenericOutput>;

export function mapTuple(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (input: unknown[]) => mapTuple(input, theFunction);
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
