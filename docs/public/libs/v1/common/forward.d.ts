/**
 * The forward() function returns the passed argument without modifying it. Useful to standardize an API that expects a function, or to improve readability in a pipeline.
 * 
 * Signature: `forward(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = {
 * 	id: 1,
 * 	name: "ZeRiix",
 * };
 * 
 * const result = forward(input);
 * 
 * // type: { id: number; name: string; }
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/forward
 * 
 */
export declare function forward<GenericValue extends unknown>(value: GenericValue): GenericValue;
