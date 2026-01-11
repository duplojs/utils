/**
 * Lowercases the first character of a string.
 * 
 * Signature: `uncapitalize(input)` → returns the uncapitalized string
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.uncapitalize("Zeriix"); // "zeriix"
 * 
 * pipe(
 * 	"Hello",
 * 	S.uncapitalize,
 * ); // "hello"
 * 
 * S.uncapitalize("title"); // "title"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.charAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) and [`String.prototype.toLowerCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/uncapitalize
 * 
 * @namespace S
 * 
 */
export declare function uncapitalize<GenericString extends string>(input: GenericString): Uncapitalize<GenericString>;
