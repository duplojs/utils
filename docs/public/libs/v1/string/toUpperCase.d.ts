/**
 * Uppercases all characters in a string.
 * 
 * Signature: `toUpperCase(input)` → returns the uppercased string
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.toUpperCase("duplojs"); // "DUPLOJS"
 * 
 * pipe(
 * 	"hello",
 * 	S.toUpperCase,
 * ); // "HELLO"
 * 
 * S.toUpperCase("zeriix"); // "ZERIIX"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.toUpperCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/toUpperCase
 * 
 * @namespace S
 * 
 */
export declare function toUpperCase<GenericString extends string>(input: GenericString): Uppercase<GenericString>;
