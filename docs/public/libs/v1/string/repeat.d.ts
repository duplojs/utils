/**
 * Repeats a string a number of times.
 * 
 * **Supported call styles:**
 * - Classic: `repeat(input, count)` → returns a repeated string
 * - Curried: `repeat(count)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.repeat("abc", 3); // "abcabcabc"
 * 
 * pipe(
 * 	"-",
 * 	S.repeat(5),
 * ); // "-----"
 * 
 * S.repeat("Duplo", 2); // "DuploDuplo"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.repeat`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/repeat
 * 
 * @namespace S
 * 
 */
export declare function repeat<GenericInput extends string>(count: number): (input: GenericInput) => string;
export declare function repeat<GenericInput extends string>(input: GenericInput, count: number): string;
