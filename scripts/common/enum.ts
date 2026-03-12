import { type UnionToTuple, type IsEqual, type AnyTuple } from "./types";
import { type SimplifyTopLevel } from "./types/simplifyTopLevel";

export type Enum<
	GenericValues extends AnyTuple<string>,
> = SimplifyTopLevel<
	{
		[Prop in GenericValues[number]]: Prop
	} & {
		toTuple(): GenericValues;
		has(value: string): value is GenericValues[number];
		contract<
			GenericContractValue extends GenericValues[number],
		>(
			...args: IsEqual<GenericContractValue, GenericValues[number]> extends true
				? IsEqual<GenericValues["length"], UnionToTuple<GenericContractValue>["length"]> extends true
					? []
					: ["A value is duplicated."]
				: [
					"One of the values ​​is missing.",
					Exclude<GenericContractValue, GenericValues[number]>,
				]
		): Enum<GenericValues>;
	}
>;

/**
 * {@include common/createEnum/index.md}
 */
export function createEnum<
	const GenericValues extends AnyTuple<string>,
>(values: GenericValues): Enum<GenericValues> {
	return Object.fromEntries(
		[
			...values.map((value) => [value, value]),
			["toTuple", () => values],
			["has", (value: GenericValues[number]) => values.includes(value)],
			["contract", () => createEnum(values)],
		],
	);
}

export type GetEnumValue<
	GenericEnum extends { toTuple(): AnyTuple<string> },
> = ReturnType<GenericEnum["toTuple"]>[number];
