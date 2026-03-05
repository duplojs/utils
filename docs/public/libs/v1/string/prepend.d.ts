/**
 * Prepends one or more strings to an input string.
 * 
 * **Supported call styles:**
 * - Classic: `prepend(input, text, ...textsRest)` -> returns a new string
 * - Curried: `prepend(text)` -> returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.prepend(
 * 	"Utils",
 * 	"Duplo",
 * 	"JS ",
 * ); // "DuploJS Utils"
 * 
 * pipe(
 * 	"world",
 * 	S.prepend("hello "),
 * ); // "hello world"
 * 
 * S.prepend(
 * 	"value",
 * 	"[",
 * 	"] ",
 * ); // "[] value"
 * ```
 * 
 * @remarks
 * - Classic style supports multiple prefix strings with rest parameters.
 * - Curried style prepends a single `text` value.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/prepend
 * @see [`S.concat`](https://utils.duplojs.dev/en/v1/api/string/concat) For appending strings
 * 
 * @namespace S
 * 
 */
export declare function prepend(text: string): (input: string) => string;
export declare function prepend(input: string, ...textsRest: string[]): string;
