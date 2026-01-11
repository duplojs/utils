/**
 * Removes whitespace from both ends of a string.
 * 
 * Signature: `trim(input)` → returns the trimmed string
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.trim("  DuploJS  "); // "DuploJS"
 * 
 * pipe(
 * 	"  hello  ",
 * 	S.trim,
 * ); // "hello"
 * 
 * S.trim("\ntext\t"); // "text"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.trim`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/trim
 * 
 * @namespace S
 * 
 */
export declare function trim<GenericInput extends string>(input: GenericInput): string;
