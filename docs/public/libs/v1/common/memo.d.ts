import { type AnyValue } from "./types";
export interface Memoized<GenericValue extends unknown> {
    readonly value: GenericValue;
}
/**
 * The memo() function evaluates a function only once then memorizes the result. Subsequent calls return the same value without recalculation.
 * 
 * Signature: `memo(theFunction)` → returns a value
 * 
 * The input value is not mutated.
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
 * @namespace C
 * 
 */
export declare function memo<GenericOutput extends AnyValue>(theFunction: () => GenericOutput): Memoized<GenericOutput>;
