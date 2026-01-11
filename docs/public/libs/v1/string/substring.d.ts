/**
 * Extracts a substring from a string.
 * 
 * **Supported call styles:**
 * - Classic: `substring(input, start, end?)` → returns a substring
 * - Curried: `substring(start, end?)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.substring("DuploJS Utils", 7); // " Utils"
 * 
 * S.substring("DuploJS Utils", 0, 6); // "DuploJ"
 * 
 * pipe(
 * 	"DuploJS Utils",
 * 	S.substring(0, 6),
 * ); // "DuploJ"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.substring`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/substring)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/substring
 * 
 * @namespace S
 * 
 */
export declare function substring<GenericInput extends string>(start: number, end?: number): (input: GenericInput) => string;
export declare function substring<GenericInput extends string>(input: GenericInput, start: number, end?: number): string;
