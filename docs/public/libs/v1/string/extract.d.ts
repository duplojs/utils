export interface ExtractResult {
    matchedValue: string;
    groups: string[];
    namedGroups?: Record<string, string>;
    offset: number;
    self: string;
}
/**
 * Extracts details about the first match of a pattern in a string.
 * 
 * **Supported call styles:**
 * - Classic: `extract(input, pattern)` → returns an ExtractResult or `undefined`
 * - Curried: `extract(pattern)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.extract("id=order-42", /(?<name>\w+)-(\d+)/);
 * // {
 * //   matchedValue: "order-42",
 * //   groups: ["order", "42"],
 * //   namedGroups: { name: "order" },
 * //   offset: 3,
 * //   self: "id=order-42",
 * // }
 * 
 * S.extract("hello", /\d+/); // undefined
 * 
 * pipe(
 * 	"user-7",
 * 	S.extract(/(\w+)-(\d+)/),
 * ); // ExtractResult | undefined
 * 
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/extract
 * 
 * @namespace S
 * 
 */
export declare function extract<GenericInput extends string>(pattern: string | RegExp): (input: GenericInput) => ExtractResult | undefined;
export declare function extract<GenericInput extends string>(input: GenericInput, pattern: string | RegExp): ExtractResult | undefined;
