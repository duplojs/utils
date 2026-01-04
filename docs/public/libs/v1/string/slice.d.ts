/**
 * Slices a portion of a string.
 * 
 * **Supported call styles:**
 * - Classic: `slice(input, start, end?)` → returns a substring
 * - Curried: `slice(start, end?)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.slice("DuploJS Utils", 0, 7); // "DuploJS"
 * 
 * S.slice("DuploJS Utils", -5); // "Utils"
 * 
 * pipe(
 * 	"DuploJS Utils",
 * 	S.slice(0, 7),
 * ); // "DuploJS"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.slice`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/slice
 * 
 * @namespace S
 * 
 */
export declare function slice<GenericInput extends string>(start: number, end: number): (input: GenericInput) => string;
export declare function slice<GenericInput extends string>(input: GenericInput, start: number, end: number): string;
