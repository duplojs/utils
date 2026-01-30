export interface Memoized<GenericValue extends unknown> {
    readonly value: GenericValue;
}
/**
 * The memo() function evaluates a function only once then memorizes the result. The first access to `value` triggers the evaluation.
 * 
 * Signature: `memo(theFunction)` → returns a memoized object
 * 
 * The input function is called only once.
 * 
 * ```ts
 * let calls = 0;
 * const expensive = memo(() => {
 * 	calls += 1;
 * 	return "cached";
 * });
 * 
 * const first = expensive.value;
 * // "cached", calls = 1
 * const second = expensive.value;
 * // "cached", calls = 1 (no recompute)
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/memo
 * 
 */
export declare function memo<GenericOutput extends unknown>(theFunction: () => GenericOutput): Memoized<GenericOutput>;
