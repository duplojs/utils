/**
 * Removes whitespace from the end of a string.
 * 
 * Signature: `trimEnd(input)` → returns the trimmed string
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.trimEnd("  DuploJS  "); // "  DuploJS"
 * 
 * pipe(
 * 	"  hello  ",
 * 	S.trimEnd,
 * ); // "  hello"
 * 
 * S.trimEnd("\ntext\t"); // "\ntext"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.trimEnd`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimEnd)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/trimEnd
 * 
 * @namespace S
 * 
 */
export declare function trimEnd<GenericInput extends string>(input: GenericInput): string;
