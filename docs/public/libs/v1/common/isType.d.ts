import { type IsEqual, type AnyFunction } from "./types";
interface Type {
    string: [string, never];
    number: [number, never];
    boolean: [boolean, never];
    function: [AnyFunction, never];
    bigint: [bigint, never];
    undefined: [undefined, never];
    null: [null, never];
    symbol: [symbol, never];
    object: [object, readonly any[] | AnyFunction | null];
    iterable: [Iterable<any>, never];
    asyncIterable: [AsyncIterable<any>, never];
    array: [readonly any[], never];
}
type ComputeResult<GenericInput extends unknown, GenericTypeEntry extends Type[keyof Type]> = Exclude<Extract<GenericInput, GenericTypeEntry[0]>, GenericTypeEntry[1]>;
type EligibleType<GenericInput extends unknown> = {
    [Prop in keyof Type]: IsEqual<ComputeResult<GenericInput, Type[Prop]>, never> extends true ? never : Prop;
}[keyof Type];
export declare function isType<GenericInput extends unknown, GenericType extends EligibleType<GenericInput>>(type: GenericType): (input: GenericInput) => input is ComputeResult<GenericInput, Type[GenericType]>;
export declare function isType<GenericInput extends unknown, GenericType extends EligibleType<GenericInput>>(input: GenericInput, type: GenericType): input is ComputeResult<GenericInput, Type[GenericType]>;
export {};
