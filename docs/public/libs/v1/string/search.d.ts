/**
 * Searches a string for a pattern and returns the index.
 * 
 * **Supported call styles:**
 * - Classic: `search(input, pattern)` → returns an index or `undefined`
 * - Curried: `search(pattern)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.search("DuploJS Utils", "JS"); // 5
 * 
 * S.search("DuploJS Utils", "js"); // undefined
 * 
 * pipe(
 * 	"DuploJS Utils",
 * 	S.search(/Utils/),
 * ); // 8
 * 
 * ```
 * 
 * @remarks
 * - Returns `undefined` when the pattern is not found
 * - Uses the same semantics as [`String.prototype.search`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/search
 * 
 * @namespace S
 * 
 */
export declare function search<GenericInput extends string>(pattern: string | RegExp): (input: GenericInput) => number | undefined;
export declare function search<GenericInput extends string>(input: GenericInput, pattern: string | RegExp): number | undefined;
