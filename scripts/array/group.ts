import type { SimplifyTopLevel } from "@scripts/common/types/simplifyTopLevel";
import type { AnyFunction } from "@scripts/common/types/anyFunction";
import type { GroupFunctionOutput } from "@scripts/generator";

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
	readonly [Output in GenericOutput as Output["group"]]?: readonly [Output["value"], ...Output["value"][]]
}>;

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

export function group(...args: [readonly unknown[], AnyFunction<any, GroupFunctionOutput>] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (array: unknown[]) => group(array, theFunction);
	}
	const [array, theFunction] = args;

	const result: Record<string, unknown[]> = {};

	for (let index = 0; index < array.length; index++) {
		const { group, value } = theFunction(array[index], {
			index,
			output: groupOutput,
		});

		if (result[group]) {
			result[group].push(value);
		} else {
			result[group] = [value];
		}
	}

	return result;
}
