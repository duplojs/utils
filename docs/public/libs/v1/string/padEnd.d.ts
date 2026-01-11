/**
 * Pads a string at the end to reach a target length.
 * 
 * **Supported call styles:**
 * - Classic: `padEnd(input, targetLength, padString)` → returns a padded string
 * - Curried: `padEnd(targetLength, padString)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.padEnd("abc", 6, "."); // "abc..."
 * 
 * pipe(
 * 	"42",
 * 	S.padEnd(4, "0"),
 * ); // "4200"
 * 
 * S.padEnd("duplo", 7, "!"); // "duplo!!"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.padEnd`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padEnd)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/padEnd
 * 
 * @namespace S
 * 
 */
export declare function padEnd<GenericInput extends string>(targetLength: number, padString: string): (input: GenericInput) => string;
export declare function padEnd<GenericInput extends string>(input: GenericInput, targetLength: number, padString: string): string;
