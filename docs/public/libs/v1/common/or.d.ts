import { type AnyPredicate, type AnyFunction, type IsEqual } from "./types";
type ExtractPredicate<GenericPredicatedInput extends readonly AnyFunction<any[], boolean>[]> = GenericPredicatedInput extends readonly [
    (input: any, ...args: any[]) => input is infer InferredPredicate,
    ...infer InferredRest extends readonly AnyPredicate[]
] ? InferredRest extends readonly [] ? InferredPredicate : ExtractPredicate<InferredRest> extends infer InferredResult ? IsEqual<InferredResult, never> extends true ? never : InferredPredicate | InferredResult : never : never;
/**
 * The or() function combines several predicates or type guards: if at least one passes, the result is true and the type is narrowed to the union of accepted cases.
 * 
 * **Supported call styles:**
 * - Classic: `or(input, predicates)` → returns a value
 * - Curried: `or(predicates)` → returns a function waiting for the input
 * - Classic predicate: `or(input, predicates)` → narrows the input type
 * - Curried predicate: `or(predicates)` → narrows the input type
 * 
 * Predicate overloads (type guards) narrow the output type.
 * 
 * ```ts
 * type Input = "click" | "hover" | "keydown";
 * 
 * const input = "hover" as Input;
 * 
 * if (or(input, [
 * 	equal("click"),
 * 	equal("hover"),
 * ])) {
 * 	// type: "click" | "hover"
 * }
 * 
 * const result = pipe(
 * 	input,
 * 	when(
 * 		or([
 * 			equal("click"),
 * 			equal("hover"),
 * 		]),
 * 		() => "handled",
 * 	),
 * );
 * // result: "handled"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/or
 * 
 * @namespace C
 * 
 */
export declare function or<GenericInput extends unknown, const GenericArrayPredicatedInput extends readonly [
    (input: GenericInput) => input is any,
    (input: GenericInput) => input is any,
    ...((input: GenericInput) => input is any)[]
]>(predicatedList: GenericArrayPredicatedInput): (input: GenericInput) => input is Extract<GenericInput, ExtractPredicate<GenericArrayPredicatedInput>>;
export declare function or<GenericInput extends unknown>(predicatedList: [
    (input: GenericInput) => boolean,
    (input: GenericInput) => boolean,
    ...((input: GenericInput) => boolean)[]
]): (input: GenericInput) => boolean;
export declare function or<GenericInput extends unknown, const GenericArrayPredicatedInput extends readonly [
    (input: GenericInput) => input is any,
    (input: GenericInput) => input is any,
    ...((input: GenericInput) => input is any)[]
]>(input: GenericInput, predicatedList: GenericArrayPredicatedInput): input is Extract<GenericInput, ExtractPredicate<GenericArrayPredicatedInput>>;
export declare function or<GenericInput extends unknown>(input: GenericInput, predicatedList: [
    (input: GenericInput) => boolean,
    (input: GenericInput) => boolean,
    ...((input: GenericInput) => boolean)[]
]): boolean;
export {};
