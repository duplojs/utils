import { type IsEqual, type AnyFunction, type BreakGenericLink } from "./types";
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
/**
 * The isType() function creates a type guard based on typeof, Array.isArray, iterables, functions, etc. It allows narrowing a union to the checked type.
 * 
 * **Supported call styles:**
 * - Classic: `isType(input, type)` → returns a value
 * - Curried: `isType(type)` → returns a function waiting for the input
 * - Classic predicate: `isType(input, type)` → narrows the input type
 * - Curried predicate: `isType(type)` → narrows the input type
 * 
 * Predicate overloads (type guards) narrow the output type.
 * 
 * ```ts
 * type Input = string | number;
 * 
 * const input = 3 as Input;
 * 
 * if (isType(input, "number")) {
 * 	// type: number
 * }
 * 
 * const result = pipe(
 * 	input,
 * 	when(
 * 		isType("number"),
 * 		(value) => value + 1,
 * 	),
 * );
 * // result: 4
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/isType
 * 
 */
export declare function isType<GenericInput extends unknown, GenericType extends EligibleType<GenericInput>>(type: GenericType): (input: GenericInput) => input is ComputeResult<BreakGenericLink<GenericInput>, Type[GenericType]>;
export declare function isType<GenericInput extends unknown, GenericType extends EligibleType<GenericInput>>(input: GenericInput, type: GenericType): input is ComputeResult<GenericInput, Type[GenericType]>;
export {};
