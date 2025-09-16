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

export interface ArrayGroupFunctionParams<
	GenericElement extends unknown = unknown,
> {
	element: GenericElement;
	index: number;
	output<
		GenericGroupeName extends string,
		GenericGroupeValue extends GenericElement,
	>(
		group: GenericGroupeName,
		value: GenericGroupeValue
	): ArrayGroupFunctionOutput<
		GenericGroupeName,
		GenericGroupeValue
	>;
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
		params: ArrayGroupFunctionParams<GenericElement>
	) => GenericOutput,
): (array: readonly GenericElement[]) => ArrayGroupResult<GenericOutput>;
export function group<
	GenericElement extends unknown,
	GenericOutput extends ArrayGroupFunctionOutput,
>(
	array: readonly GenericElement[],
	theFunction: (
		params: ArrayGroupFunctionParams<GenericElement>
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
			const { group, value } = theFunction({
				index,
				element,
				output: (group: unknown, value: unknown) => ({
					group,
					value,
				}),
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
