import { type IsEqual } from "../common";
type ComputeResult<GenericString extends string, GenericSearchString extends string> = Extract<GenericString, `${GenericSearchString}${string}`> extends infer InferredResult extends GenericString ? IsEqual<InferredResult, never> extends true ? GenericString & `${GenericSearchString}${string}` : InferredResult : never;
/**
 * Checks whether a string starts with a substring.
 * 
 * **Supported call styles:**
 * - Classic: `startsWith(input, searchString)` → returns a boolean
 * - Curried: `startsWith(searchString)` → returns a function waiting for the input
 * - Classic predicate: `startsWith(input, searchString)` → narrows the string type
 * - Curried predicate: `startsWith(searchString)` → narrows the string type
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * const maybeValue = true ? "DuploJS" : "NestJS";
 * 
 * if (S.startsWith(maybeValue, "Du")) {
 * 	// maybeValue is "DuploJS"
 * }
 * 
 * pipe(
 * 	maybeValue,
 * 	when(
 * 		S.startsWith("Du"),
 * 		(value) => {
 * 			// value is "DuploJS"
 * 		},
 * 	),
 * );
 * 
 * S.startsWith("DuploJS", "Du"); // true
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type
 * - Uses the same semantics as [`String.prototype.startsWith`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/startsWith
 * 
 * @namespace S
 * 
 */
export declare function startsWith<GenericString extends string, GenericSearchString extends string>(searchString: GenericSearchString): (input: GenericString) => input is ComputeResult<GenericString, GenericSearchString>;
export declare function startsWith<GenericString extends string, GenericSearchString extends string>(input: GenericString, searchString: GenericSearchString): input is ComputeResult<GenericString, GenericSearchString>;
export {};
