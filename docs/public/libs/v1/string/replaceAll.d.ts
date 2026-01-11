/**
 * Replaces all matches in a string.
 * 
 * **Supported call styles:**
 * - Classic: `replaceAll(input, pattern, replacement)` → returns a new string
 * - Curried: `replaceAll(pattern, replacement)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.replaceAll("Hello world, how are you?", " ", "-"); // "Hello-world,-how-are-you?"
 * 
 * S.replaceAll("My code is 1234", /\d/g, "*"); // "My code is ****"
 * 
 * pipe(
 * 	"a b c",
 * 	S.replaceAll(" ", ""),
 * ); // "abc"
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.replaceAll`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/replaceAll
 * 
 * @namespace S
 * 
 */
export declare function replaceAll<GenericInput extends string>(pattern: string | RegExp, replacement: string): (input: GenericInput) => string;
export declare function replaceAll(input: string, pattern: string | RegExp, replacement: string): string;
