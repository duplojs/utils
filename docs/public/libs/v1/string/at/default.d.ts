/**
 * Returns the character at a given index.
 * 
 * **Supported call styles:**
 * - Classic: `at(input, index)` → returns a character or `undefined`
 * - Curried: `at(index)` → returns a function waiting for the input
 * 
 * Negative indexes count from the end.
 * The input string is not mutated.
 * 
 * ```ts
 * S.at("DuploJS", -1); // "S"
 * 
 * pipe(
 * 	"TypeScript",
 * 	S.at(-1),
 * ); // "t"
 * 
 * S.at("Alpha", 12); // undefined
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.at`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/at)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/at
 * 
 * @namespace S
 * 
 */
export declare function at<GenericString extends string, GenericIndex extends number>(index: GenericIndex): (input: GenericString) => string | undefined;
export declare function at<GenericString extends string, GenericIndex extends number>(input: GenericString, index: GenericIndex): string | undefined;
