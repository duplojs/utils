/**
 * Finds the last index of a substring.
 * 
 * **Supported call styles:**
 * - Classic: `lastIndexOf(input, searchString, position?)` → returns an index or `undefined`
 * - Curried: `lastIndexOf(searchString)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.lastIndexOf("DuploJS Utils", "JS"); // 5
 * 
 * S.lastIndexOf("DuploJS Utils", "JS", 5); // undefined
 * 
 * pipe(
 * 	"DuploJS Utils",
 * 	S.lastIndexOf("Utils"),
 * ); // 8
 * 
 * ```
 * 
 * @remarks
 * - Returns `undefined` when the substring is not found
 * - Uses the same semantics as [`String.prototype.lastIndexOf`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/lastIndexOf)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/lastIndexOf
 * 
 * @namespace S
 * 
 */
export declare function lastIndexOf<GenericInput extends string>(searchString: string): (input: GenericInput) => number | undefined;
export declare function lastIndexOf<GenericInput extends string>(input: GenericInput, searchString: string, position?: number): number | undefined;
