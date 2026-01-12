import { type IsEqual } from "../common";
type ComputeResult<GenericString extends string, GenericSearchString extends string> = Extract<GenericString, `${string}${GenericSearchString}${string}`> extends infer InferredResult extends GenericString ? IsEqual<InferredResult, never> extends true ? GenericString & `${string}${GenericSearchString}${string}` : InferredResult : never;
/**
 * Checks whether a string contains a substring.
 * 
 * **Supported call styles:**
 * - Classic: `includes(input, searchString)` → returns a boolean
 * - Curried: `includes(searchString)` → returns a function waiting for the input
 * - Classic predicate: `includes(input, searchString)` → narrows the string type
 * - Curried predicate: `includes(searchString)` → narrows the string type
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * const maybeValue = true ? "DuplpoJS" : "DuploTS";
 * 
 * if (S.includes(maybeValue, "JS")) {
 * 	// maybeValue is "DuplpoJS"
 * }
 * 
 * pipe(
 * 	maybeValue,
 * 	when(
 * 		S.includes("JS"),
 * 		(value) => {
 * 			// value is "DuplpoJS"
 * 		},
 * 	),
 * );
 * 
 * S.includes("DuploJS", "JS"); // true
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type
 * - Uses the same semantics as [`String.prototype.includes`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/includes
 * 
 * @namespace S
 * 
 */
export declare function includes<GenericString extends string, GenericSearchString extends string>(searchString: GenericSearchString): (input: GenericString) => input is ComputeResult<GenericString, GenericSearchString>;
export declare function includes<GenericString extends string, GenericSearchString extends string>(input: GenericString, searchString: GenericSearchString): input is ComputeResult<GenericString, GenericSearchString>;
export {};
