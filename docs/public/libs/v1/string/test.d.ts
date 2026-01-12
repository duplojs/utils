/**
 * Tests a string against a regular expression.
 * 
 * **Supported call styles:**
 * - Classic: `test(input, regExp)` → returns a boolean
 * - Curried: `test(regExp)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.test("DuploJS", /JS$/); // true
 * 
 * pipe(
 * 	"DuploTS",
 * 	S.test(/JS$/),
 * ); // false
 * 
 * S.test("alpha", /ph/); // true
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`RegExp.prototype.test`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/test
 * 
 * @namespace S
 * 
 */
export declare function test<GenericInput extends string>(regExp: RegExp): (input: GenericInput) => boolean;
export declare function test<GenericInput extends string>(input: GenericInput, regExp: RegExp): boolean;
