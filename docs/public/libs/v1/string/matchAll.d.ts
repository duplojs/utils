/**
 * Finds all matches of a pattern in a string.
 * 
 * **Supported call styles:**
 * - Classic: `matchAll(input, pattern)` → returns an iterator of matches
 * - Curried: `matchAll(pattern)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * pipe(
 * 	"foo_foo_foo",
 * 	S.matchAll(/f.o_/g),
 * 	A.from,
 * 	A.map(A.first),
 * 	A.filter((value) => value !== undefined),
 * ); // ["foo_", "foo_", "foo_"]
 * 
 * S.matchAll("alpha_beta", /a../g); // RegExpStringIterator
 * 
 * pipe(
 * 	"one_two",
 * 	S.matchAll(/\w+/g),
 * 	A.from,
 * ); // ["one", "two"]
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.matchAll`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/matchAll
 * 
 * @namespace S
 * 
 */
export declare function matchAll<GenericInput extends string>(pattern: RegExp): (input: GenericInput) => RegExpStringIterator<RegExpMatchArray>;
export declare function matchAll<GenericInput extends string>(input: GenericInput, pattern: RegExp): RegExpStringIterator<RegExpMatchArray>;
