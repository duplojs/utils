/**
 * Returns the character at the given index.
 * 
 * **Supported call styles:**
 * - Classic: `charAt(input, index)` → returns a character
 * - Curried: `charAt(index)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.charAt("DuploJS", 0); // "D"
 * 
 * pipe(
 * 	"Utilities",
 * 	S.charAt(0),
 * ); // "U"
 * 
 * S.charAt("Alpha", 2); // "p"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.charAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/charAt
 * 
 * @namespace S
 * 
 */
export declare function charAt<GenericInput extends string>(index: number): (input: GenericInput) => string;
export declare function charAt(input: string, index: number): string;
