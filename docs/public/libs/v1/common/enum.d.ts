import { type UnionToTuple, type IsEqual, type AnyTuple } from "./types";
import { type SimplifyTopLevel } from "./types/simplifyTopLevel";
export type Enum<GenericValues extends AnyTuple<string>> = SimplifyTopLevel<{
    [Prop in GenericValues[number]]: Prop;
} & {
    toTuple(): GenericValues;
    has(value: string): value is GenericValues[number];
    contract<GenericContractValue extends GenericValues[number]>(...args: IsEqual<GenericContractValue, GenericValues[number]> extends true ? IsEqual<GenericValues["length"], UnionToTuple<GenericContractValue>["length"]> extends true ? [] : ["A value is duplicated."] : [
        "One of the values ​​is missing.",
        Exclude<GenericContractValue, GenericValues[number]>
    ]): Enum<GenericValues>;
}>;
/**
 * The createEnum() function creates an immutable, typed string enum. The returned object exposes each value as a key, plus `toTuple()`, `has()`, and `contract()`.
 * 
 * Supported call style:
 * - Classic: `createEnum(values)` -> returns an enum object
 * 
 * Behavior:
 * - each string value is exposed as both key and value
 * - `toTuple()` returns the original tuple
 * - `has(value)` narrows a string to the enum union
 * - `contract<...>()` validates that the enum matches an expected union at type level
 * - the input tuple is not mutated
 * 
 * ```ts
 * const enumValue = createEnum([
 * 	"value1",
 * 	"value2",
 * 	"value3",
 * ]);
 * 
 * type EnumValue = GetEnumValue<typeof enumValue>;
 * // type EnumValue = "value1" | "value2" | "value3"
 * 
 * const tuple = enumValue.toTuple();
 * // type: ["value1", "value2", "value3"]
 * 
 * const maybe = true ? "value1" : "none";
 * 
 * if (enumValue.has(maybe)) {
 * 	// type: "value1"
 * } else {
 * 	// type: "none"
 * }
 * 
 * const contractedEnum = enumValue.contract<
 * 	"value1" | "value2" | "value3"
 * >();
 * // contractedEnum.toTuple(): ["value1", "value2", "value3"]
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/createEnum
 * 
 */
export declare function createEnum<const GenericValues extends AnyTuple<string>>(values: GenericValues): Enum<GenericValues>;
export type GetEnumValue<GenericEnum extends {
    toTuple(): AnyTuple<string>;
}> = ReturnType<GenericEnum["toTuple"]>[number];
