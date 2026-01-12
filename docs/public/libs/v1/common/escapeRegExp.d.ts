/**
 * The escapeRegExp() function escapes special characters in a string so it can be reused in a regular expression without altering its meaning.
 * 
 * Signature: `escapeRegExp(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const raw = "price (EUR) + taxes?";
 * const escaped = escapeRegExp(raw);
 * 
 * const regex = new RegExp(escaped);
 * // regex matches the literal string "price (EUR) + taxes?"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/escapeRegExp
 * 
 * @namespace C
 * 
 */
export declare function escapeRegExp<GenericInput extends string>(input: GenericInput): string;
