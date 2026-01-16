import { type Or, type UnionContain } from "./types";
export type EligibleEqual = string | null | number | undefined | bigint | boolean | symbol;
type ExpectLiteral<GenericValue extends EligibleEqual> = Or<[
    UnionContain<GenericValue, string>,
    UnionContain<GenericValue, number>,
    UnionContain<GenericValue, boolean>,
    UnionContain<GenericValue, bigint>,
    UnionContain<GenericValue, symbol>
]> extends true ? never : GenericValue;
/**
 * The equal() function compares a value to one or several literals. With primitives, it acts as a type guard and restricts the type to the provided values.
 * 
 * **Supported call styles:**
 * - Classic: `equal(input, value)` → returns a value
 * - Curried: `equal(value)` → returns a function waiting for the input
 * - Classic predicate: `equal(input, value)` → narrows the input type
 * - Curried predicate: `equal(value)` → narrows the input type
 * 
 * Predicate overloads (type guards) narrow the output type.
 * 
 * ```ts
 * type Status = "pending" | "success" | "error";
 * 
 * const status = "success" as Status;
 * 
 * if (equal(status, [
 * 	"success",
 * 	"error",
 * ])) {
 * 	// type: "success" | "error"
 * }
 * 
 * const result = pipe(
 * 	status,
 * 	when(
 * 		equal("success"),
 * 		() => "ok",
 * 	),
 * );
 * // result: "ok"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/equal
 * 
 */
export declare function equal<GenericInput extends EligibleEqual | object, GenericValue extends Exclude<GenericInput, object>>(value: ExpectLiteral<GenericValue> | ExpectLiteral<GenericValue>[]): (input: GenericInput) => input is NoInfer<GenericValue>;
export declare function equal<GenericInput extends EligibleEqual | object, GenericValue extends Exclude<GenericInput, object>>(value: GenericValue | GenericValue[]): (input: GenericInput) => boolean;
export declare function equal<GenericInput extends EligibleEqual | object, GenericValue extends Exclude<GenericInput, object>>(input: GenericInput, value: ExpectLiteral<GenericValue> | ExpectLiteral<GenericValue>[]): input is GenericValue;
export declare function equal<GenericInput extends EligibleEqual | object, GenericValue extends Exclude<GenericInput, object>>(input: GenericInput, value: GenericValue | GenericValue[]): boolean;
export {};
