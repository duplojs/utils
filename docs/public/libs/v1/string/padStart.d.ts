/**
 * Pads a string at the start to reach a target length.
 * 
 * **Supported call styles:**
 * - Classic: `padStart(input, targetLength, padString)` → returns a padded string
 * - Curried: `padStart(targetLength, padString)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.padStart("7", 3, "0"); // "007"
 * 
 * pipe(
 * 	"42",
 * 	S.padStart(4, "0"),
 * ); // "0042"
 * 
 * S.padStart("abc", 5, "."); // "..abc"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.padStart`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/padStart
 * 
 * @namespace S
 * 
 */
export declare function padStart<GenericInput extends string>(targetLength: number, padString: string): (input: GenericInput) => string;
export declare function padStart<GenericInput extends string>(input: GenericInput, targetLength: number, padString: string): string;
