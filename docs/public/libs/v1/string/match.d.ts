/**
 * Finds the first match of a pattern in a string.
 * 
 * **Supported call styles:**
 * - Classic: `match(input, pattern)` → returns a match array or `undefined`
 * - Curried: `match(pattern)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.match("foo_foo_foo", /f.o_/); // ["foo_"]
 * 
 * S.match("foo_foo_foo", "foo"); // ["foo"]
 * 
 * pipe(
 * 	"alpha_beta",
 * 	S.match(/a../),
 * ); // ["alph"]
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/match
 * 
 * @namespace S
 * 
 */
export declare function match<GenericInput extends string>(pattern: string | RegExp): (input: GenericInput) => RegExpMatchArray | undefined;
export declare function match<GenericInput extends string>(input: GenericInput, pattern: string | RegExp): RegExpMatchArray | undefined;
