import { type SimplifyTopLevel } from "./types/simplifyTopLevel";
export type Enum<GenericValues extends [string, ...string[]] = [string, ...string[]]> = SimplifyTopLevel<{
    [Prop in GenericValues[number]]: Prop;
} & {
    toTuple(): GenericValues;
    has(value: string): value is GenericValues[number];
}>;
export declare function createEnum<GenericValue extends string, GenericValues extends [GenericValue, ...GenericValue[]]>(values: GenericValues): Enum<GenericValues>;
export type GetEnumValue<GenericEnum extends Enum<any>> = ReturnType<GenericEnum["toTuple"]>[number];
