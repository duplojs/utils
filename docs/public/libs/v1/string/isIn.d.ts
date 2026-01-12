/**
 * Checks whether a string is present in a list.
 * 
 * **Supported call styles:**
 * - Classic: `isIn(input, list)` → returns a boolean
 * - Curried: `isIn(list)` → returns a function waiting for the input
 * - Classic predicate: `isIn(input, list)` → narrows the string type
 * - Curried predicate: `isIn(list)` → narrows the string type
 * 
 * The input array is not mutated.
 * 
 * ```ts
 * const statusList = [
 * 	"draft",
 * 	"published",
 * ];
 * 
 * const maybeStatus = true ? "draft" : "archived";
 * 
 * if (S.isIn(maybeStatus, statusList)) {
 * 	// maybeStatus is "draft" | "published"
 * }
 * 
 * pipe(
 * 	maybeStatus,
 * 	when(
 * 		S.isIn(statusList),
 * 		(value) => {
 * 			// value is "draft" | "published"
 * 		},
 * 	),
 * );
 * 
 * S.isIn("archived", statusList); // false
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output type
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/isIn
 * 
 * @namespace S
 * 
 */
export declare function isIn<GenericInput extends string, GenericValue extends GenericInput>(array: readonly GenericValue[]): (input: GenericInput) => input is Extract<GenericInput, GenericValue>;
export declare function isIn<GenericInput extends string, GenericValue extends GenericInput>(input: GenericInput, array: readonly GenericValue[]): input is Extract<GenericInput, GenericValue>;
