import type { AnyFunction, SimplifyTopLevel } from "@scripts/common";

export interface GroupFunctionOutput<
	GenericGroupName extends string = string,
	GenericGroupValue extends unknown = unknown,
> {
	group: GenericGroupName;
	value: GenericGroupValue;
}

/**
 * {@include generator/groupOutput/index.md}
 */
export function groupOutput<
	const GenericGroupName extends string,
	GenericGroupValue extends unknown,
>(
	group: GenericGroupName,
): (value: GenericGroupValue) => GroupFunctionOutput<
	GenericGroupName,
	GenericGroupValue
>;

export function groupOutput<
	const GenericGroupName extends string,
	GenericGroupValue extends unknown,
>(
	group: GenericGroupName,
	value: GenericGroupValue,
): GroupFunctionOutput<
	GenericGroupName,
	GenericGroupValue
>;

export function groupOutput(
	...args: [unknown, string] | [string]
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

export interface GroupFunctionParams {
	index: number;
	output: typeof groupOutput;
}

export type GroupResult<
	GenericOutput extends GroupFunctionOutput,
> = SimplifyTopLevel<{
	readonly [Output in GenericOutput as Output["group"]]?: readonly [Output["value"], ...Output["value"][]]
}>;

/**
 * {@include generator/group/index.md}
 */
export function group<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => GenericOutput,
): (iterator: Iterable<GenericElement>) => GroupResult<GenericOutput>;

export function group<
	GenericElement extends unknown,
	GenericOutput extends GroupFunctionOutput,
>(
	iterator: Iterable<GenericElement>,
	theFunction: (
		element: GenericElement,
		params: GroupFunctionParams
	) => GenericOutput,
): GroupResult<GenericOutput>;

export function group(
	...args:
	| [Iterable<unknown>, AnyFunction<any, GroupFunctionOutput>]
	| [AnyFunction]
): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (iterator: Iterable<unknown>) => group(iterator, theFunction);
	}

	const [iterator, theFunction] = args;

	const result: Record<string, unknown[]> = {};
	let index = 0;

	for (const element of iterator) {
		const { group, value } = theFunction(element, {
			index,
			output: groupOutput,
		});

		if (result[group]) {
			result[group].push(value);
		} else {
			result[group] = [value];
		}

		index++;
	}

	return result;
}
