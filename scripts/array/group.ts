import { type SimplifyTopLevel } from "@scripts/common/types/simplifyTopLevel";
import { reduce } from "./reduce";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface ArrayGroupFunctionOutput<
	GenericGroupeName extends string = string,
	GenericGroupeValue extends unknown = unknown,
> {
	group: GenericGroupeName;
	value: GenericGroupeValue;
}

export function groupOutput<
	GenericGroupeValue extends unknown,
	GenericGroupeName extends string,
>(
	group: GenericGroupeName,
): (value: GenericGroupeValue) => ArrayGroupFunctionOutput<
	GenericGroupeName,
	GenericGroupeValue
>;

export function groupOutput<
	GenericGroupeValue extends unknown,
	GenericGroupeName extends string,
>(
	group: GenericGroupeName,
	value: GenericGroupeValue,
): ArrayGroupFunctionOutput<
	GenericGroupeName,
	GenericGroupeValue
>;

export function groupOutput(
	...args: [string, unknown] | [string]
) {
	if (args.length === 1) {
		const [group] = args;

		return (input: unknown) => groupOutput(group, input);
	}

	const [group, value] = args;

	return {
		group,
		value,
	};
}

export interface ArrayGroupFunctionParams {
	index: number;
	output: typeof groupOutput;
}

export type ArrayGroupResult<
	GenericOutput extends ArrayGroupFunctionOutput,
> = SimplifyTopLevel<{
	[Output in GenericOutput as Output["group"]]?: Output["value"][]
}>;

export function group<
	GenericElement extends unknown,
	GenericOutput extends ArrayGroupFunctionOutput,
>(
	theFunction: (
		element: GenericElement,
		params: ArrayGroupFunctionParams
	) => GenericOutput,
): (array: readonly GenericElement[]) => ArrayGroupResult<GenericOutput>;
export function group<
	GenericElement extends unknown,
	GenericOutput extends ArrayGroupFunctionOutput,
>(
	array: readonly GenericElement[],
	theFunction: (
		element: GenericElement,
		params: ArrayGroupFunctionParams
	) => GenericOutput,
): ArrayGroupResult<GenericOutput>;
export function group(...args: [readonly unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (array: unknown[]) => group(array, theFunction);
	}
	const [array, theFunction] = args;

	return reduce(
		array,
		({ from }) => from({}),
		({ index, element, lastValue, nextWithObject }) => {
			const { group, value } = theFunction(element, {
				index,
				output: groupOutput,
			});

			return nextWithObject(
				lastValue,
				{
					[group]: [
						...(lastValue[group as never] ?? []),
						value,
					],
				},
			);
		},
	) as never;
}
