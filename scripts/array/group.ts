import { type SimplifyTopLevel } from "@scripts/common/types/simplifyTopLevel";
import { reduce, reduceFrom } from "./reduce";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface ArrayGroupFunctionOutput<
	GenericGroupName extends string = string,
	GenericGroupValue extends unknown = unknown,
> {
	group: GenericGroupName;
	value: GenericGroupValue;
}

/**
 * {@include array/groupOutput/index.md}
 */
export function groupOutput<
	GenericGroupValue extends unknown,
	GenericGroupName extends string,
>(
	group: GenericGroupName,
): (value: GenericGroupValue) => ArrayGroupFunctionOutput<
	GenericGroupName,
	GenericGroupValue
>;

export function groupOutput<
	GenericGroupValue extends unknown,
	GenericGroupName extends string,
>(
	group: GenericGroupName,
	value: GenericGroupValue,
): ArrayGroupFunctionOutput<
	GenericGroupName,
	GenericGroupValue
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

// Fix: TypeScript can create an intersection from a union during type inference,
// which causes `never` types. Using GenericArray instead of GenericElement
// preserves the array structure and avoids this inference bug.
/**
 * {@include array/group/index.md}
 */
export function group<
	GenericArray extends readonly unknown[],
	GenericOutput extends ArrayGroupFunctionOutput,
>(
	theFunction: (
		element: GenericArray[number],
		params: ArrayGroupFunctionParams
	) => GenericOutput,
): (array: GenericArray) => ArrayGroupResult<GenericOutput>;
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
		reduceFrom({}),
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
