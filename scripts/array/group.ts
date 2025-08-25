import { type SimplifyTopLevel } from "@scripts/common/types/simplifyTopLevel";
import { arrayReduce } from "./reduce";
import { type AnyFunction } from "@scripts/common/types/anyFunction";

export interface ArrayGroupFunctionOutput<
	GenericGroupeName extends string = string,
	GenericGroupeValue extends unknown = unknown,
> {
	group: GenericGroupeName;
	value: GenericGroupeValue;
}

export interface ArrayGroupFunctionParams<
	GenericItem extends unknown = unknown,
> {
	item: GenericItem;
	index: number;
	output<
		GenericGroupeName extends string,
	>(
		group: GenericGroupeName,
		value: GenericItem
	): ArrayGroupFunctionOutput<
		GenericGroupeName,
		GenericItem
	>;
}

export type ArrayGroupResult<
	GenericOutput extends ArrayGroupFunctionOutput,
> = SimplifyTopLevel<{
	[Output in GenericOutput as Output["group"]]: Output["value"][]
}>;

export function arrayGroup<
	GenericItem extends unknown,
	GenericOutput extends ArrayGroupFunctionOutput,
>(
	theFunction: (
		params: ArrayGroupFunctionParams<GenericItem>
	) => GenericOutput,
): (array: GenericItem[]) => ArrayGroupResult<GenericOutput>;
export function arrayGroup<
	GenericItem extends unknown,
	GenericOutput extends ArrayGroupFunctionOutput,
>(
	array: GenericItem[],
	theFunction: (
		params: ArrayGroupFunctionParams<GenericItem>
	) => GenericOutput,
): ArrayGroupResult<GenericOutput>;
export function arrayGroup(...args: [unknown[], AnyFunction] | [AnyFunction]): any {
	if (args.length === 1) {
		const [theFunction] = args;
		return (array: unknown[]) => arrayGroup(array, theFunction);
	}
	const [array, theFunction] = args;

	return arrayReduce(
		array,
		arrayReduce.from({}),
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
