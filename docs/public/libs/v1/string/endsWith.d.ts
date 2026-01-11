import { type IsEqual } from "../common";
type ComputeResult<GenericString extends string, GenericSearchString extends string> = Extract<GenericString, `${string}${GenericSearchString}`> extends infer InferredResult extends GenericString ? IsEqual<InferredResult, never> extends true ? GenericString & `${string}${GenericSearchString}` : InferredResult : never;
/**
 * Checks whether a string ends with a substring.
 * 
 * **Supported call styles:**
 * - Classic: `endsWith(input, searchString)` → returns a boolean
 * - Curried: `endsWith(searchString)` → returns a function waiting for the input
 * - Classic predicate: `endsWith(input, searchString)` → narrows the string type
 * - Curried predicate: `endsWith(searchString)` → narrows the string type
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * const maybeValue = true ? "DuploJS" : "DuploTS";
 * 
 * if (S.endsWith(maybeValue, "JS")) {
 * 	// maybeValue is "DuploJS"
 * }
 * 
 * pipe(
 * 	maybeValue,
 * 	when(
 * 		S.endsWith("JS"),
 * 		(value) => {
 * 			// value is "DuploJS"
 * 		},
 * 	),
 * );
 * 
 * S.endsWith("DuploJS", "JS"); // true
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type
 * - Uses the same semantics as [`String.prototype.endsWith`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/endsWith
 * 
 * @namespace S
 * 
 */
export declare function endsWith<GenericString extends string, GenericSearchString extends string>(searchString: GenericSearchString): (input: GenericString) => input is ComputeResult<GenericString, GenericSearchString>;
export declare function endsWith<GenericString extends string, GenericSearchString extends string>(input: GenericString, searchString: GenericSearchString): input is ComputeResult<GenericString, GenericSearchString>;
export {};
