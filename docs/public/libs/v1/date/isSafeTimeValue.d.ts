/**
 * Checks whether a time value is a safe integer inside supported time bounds.
 * 
 * Signature: `isSafeTimeValue(timeValue)` → `boolean`
 * 
 * ```ts
 * const ok = D.isSafeTimeValue(1_500);
 * // ok: true
 * 
 * const nan = D.isSafeTimeValue(Number.NaN);
 * // nan: false
 * 
 * const tooLarge = D.isSafeTimeValue(9_007_199_254_740_992);
 * // tooLarge: false
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/isSafeTimeValue
 * 
 * @namespace D
 * 
 */
export declare function isSafeTimeValue(timeValue: number): boolean;
