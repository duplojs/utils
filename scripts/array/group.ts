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
	item: GenericElement;
	index: number;
	output<
		GenericGroupeName extends string,
	>(
		group: GenericGroupeName,
		value: GenericElement
	): ArrayGroupFunctionOutput<
		GenericGroupeName,
		GenericElement
	>;
}

export type ArrayGroupResult<
	GenericOutput extends ArrayGroupFunctionOutput,
> = SimplifyTopLevel<{
	[Output in GenericOutput as Output["group"]]: Output["value"][]
}>;

export function group<
	GenericElement extends unknown,
	GenericOutput extends ArrayGroupFunctionOutput,
>(
	theFunction: (
		params: ArrayGroupFunctionParams<GenericElement>
	) => GenericOutput,
): (array: GenericElement[]) => ArrayGroupResult<GenericOutput>;
export function group<
	GenericElement extends unknown,
	GenericOutput extends ArrayGroupFunctionOutput,
>(
	array: GenericElement[],
	theFunction: (
		params: ArrayGroupFunctionParams<GenericElement>
	) => GenericOutput,
): ArrayGroupResult<GenericOutput>;
export function group(...args: [unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (array: unknown[]) => group(array, theFunction);
	}
	const [array, theFunction] = args;

	return reduce(
		array,
		reduce.from({}),
		({ index, item, lastValue, mergeObject }) => {
			const { group, value } = theFunction({
				index,
				item,
				output: (group: unknown, value: unknown) => ({
					group,
					value,
				}),
			});

			return mergeObject(
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
