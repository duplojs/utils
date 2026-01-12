export interface StringReplacerParams {
    matchedValue: string;
    groups: string[];
    namedGroups?: Record<string, string>;
    offset: number;
    self: string;
}
export type StringReplacer = (params: StringReplacerParams) => string;
/**
 * Replaces the first match in a string.
 * 
 * **Supported call styles:**
 * - Classic: `replace(input, pattern, replacement)` → returns a new string
 * - Curried: `replace(pattern, replacement)` → returns a function waiting for the input
 * 
 * The input string is not mutated.
 * 
 * ```ts
 * S.replace("DuploJS is the best.", "best", "most complete"); // "DuploJS is the most complete."
 * 
 * S.replace("Order 1234 is ready.", /\d/, "*"); // "Order *234 is ready."
 * 
 * pipe(
 * 	"Hello world",
 * 	S.replace("world", "team"),
 * ); // "Hello team"
 * 
 * ```
 * 
 * @remarks
 * - Only the first occurrence is replaced
 * - Uses the same semantics as [`String.prototype.replace`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/replace
 * 
 * @namespace S
 * 
 */
export declare function replace<GenericInput extends string>(pattern: string | RegExp, replacement: string | StringReplacer): (input: GenericInput) => string;
export declare function replace<GenericInput extends string>(input: GenericInput, pattern: string | RegExp, replacement: string | StringReplacer): string;
