import { type SimplifyTopLevel } from "./types/simplifyTopLevel";

export type Enum<
	GenericValues extends [string, ...string[]] = [string, ...string[]],
> = SimplifyTopLevel<
	{
		[Prop in GenericValues[number]]: Prop
	} & {
		toTuple(): GenericValues;
		has(value: string): value is GenericValues[number];
	}
>;

/**
 * {@include common/createEnum/index.md}
 */
export function createEnum<
	GenericValue extends string,
	GenericValues extends [GenericValue, ...GenericValue[]],
>(values: GenericValues): Enum<GenericValues> {
	return Object.fromEntries(
		[
			...values.map((value) => [value, value]),
			["toTuple", () => values],
			["has", (value: GenericValue) => values.includes(value)],
		],
	);
}

export type GetEnumValue<
	GenericEnum extends Enum<any>,
> = ReturnType<GenericEnum["toTuple"]>[number];
