import type { Split } from "./types/split";
interface StringSplitParams<GenericLimit extends number> {
    limit: GenericLimit;
}
/**
 * Splits a string into an array of substrings.
 * 
 * **Supported call styles:**
 * - Classic: `split(input, separator, params?)` → returns an array of strings
 * - Curried: `split(separator)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.split("apple,banana,cherry", ","); // ["apple", "banana", "cherry"]
 * 
 * pipe(
 * 	"aa.bb.cc",
 * 	S.split("."),
 * ); // ["aa", "bb", "cc"]
 * 
 * S.split("alpha-beta-gamma", "-", { limit: 2 }); // ["alpha", "beta"]
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.split`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/split
 * 
 * @namespace S
 * 
 */
export declare function split<GenericString extends string, GenericSeparator extends string>(separator: GenericSeparator | RegExp): (input: GenericString) => Split<GenericString, GenericSeparator>;
export declare function split<GenericString extends string, GenericSeparator extends string, GenericLimit extends number>(input: GenericString, separator: GenericSeparator | RegExp, params?: StringSplitParams<GenericLimit>): Split<GenericString, GenericSeparator, GenericLimit>;
export {};
