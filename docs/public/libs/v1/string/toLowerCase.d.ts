/**
 * Lowercases all characters in a string.
 * 
 * Signature: `toLowerCase(input)` → returns the lowercased string
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.toLowerCase("ZERIIX"); // "zeriix"
 * 
 * pipe(
 * 	"HELLO",
 * 	S.toLowerCase,
 * ); // "hello"
 * 
 * S.toLowerCase("DUPlO"); // "duplo"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.toLowerCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/toLowerCase
 * 
 * @namespace S
 * 
 */
export declare function toLowerCase<GenericString extends string>(input: GenericString): Lowercase<GenericString>;
