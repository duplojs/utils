/**
 * Uppercases the first character of a string.
 * 
 * Signature: `capitalize(input)` → returns the capitalized string
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.capitalize("zeriix"); // "Zeriix"
 * 
 * pipe(
 * 	"alpha",
 * 	S.capitalize,
 * ); // "Alpha"
 * 
 * S.capitalize("DUPLO"); // "DUPLO"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.charAt`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt) and [`String.prototype.toUpperCase`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/capitalize
 * 
 * @namespace S
 * 
 */
export declare function capitalize<GenericString extends string>(input: GenericString): Capitalize<GenericString>;
