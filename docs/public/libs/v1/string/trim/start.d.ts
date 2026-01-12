/**
 * Removes whitespace from the start of a string.
 * 
 * Signature: `trimStart(input)` → returns the trimmed string
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.trimStart("  DuploJS  "); // "DuploJS  "
 * 
 * pipe(
 * 	"  hello  ",
 * 	S.trimStart,
 * ); // "hello  "
 * 
 * S.trimStart("\ntext\t"); // "text\t"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.trimStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trimStart)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/trimStart
 * 
 * @namespace S
 * 
 */
export declare function trimStart<GenericInput extends string>(input: GenericInput): string;
