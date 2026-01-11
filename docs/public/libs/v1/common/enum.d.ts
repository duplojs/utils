import { type SimplifyTopLevel } from "./types/simplifyTopLevel";
export type Enum<GenericValues extends [string, ...string[]] = [string, ...string[]]> = SimplifyTopLevel<{
    [Prop in GenericValues[number]]: Prop;
} & {
    toTuple(): GenericValues;
    has(value: string): value is GenericValues[number];
}>;
/**
 * The createEnum() function creates an immutable, typed string enum. The returned object exposes the keys/values, the has method, and toTuple.
 * 
 * Signature: `createEnum(values)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const enumValue = createEnum([
 * 	"value1",
 * 	"value2",
 * 	"value3",
 * ]);
 * 
 * type EnumValue = GetEnumValue<typeof enumValue>;
 * 
 * const tuple = enumValue.toTuple();
 * 
 * // type: ["value1", "value2", "value3"]
 * 
 * const maybe = true ? "value1" : "none";
 * 
 * if (enumValue.has(maybe)) {
 * 	// type: "value1"
 * } else {
 * 	// type: "none"
 * }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/createEnum
 * 
 * @namespace C
 * 
 */
export declare function createEnum<GenericValue extends string, GenericValues extends [GenericValue, ...GenericValue[]]>(values: GenericValues): Enum<GenericValues>;
export type GetEnumValue<GenericEnum extends Enum<any>> = ReturnType<GenericEnum["toTuple"]>[number];
