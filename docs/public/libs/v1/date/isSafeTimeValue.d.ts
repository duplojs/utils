/**
 * Checks whether a time value is safe.
 * 
 * Signature: `isSafeTimeValue(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = D.isSafeTimeValue(1_500);
 * // result: true
 * 
 * const result2 = D.isSafeTimeValue(Number.NaN);
 * // result2: false
 * 
 * const result3 = D.isSafeTimeValue(9_007_199_254_740_992);
 * // result3: false
 * ```
 * 
 * @remarks
 * - Checks for safe integers within the supported time range.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/isSafeTimeValue
 * 
 * @namespace D
 * 
 */
export declare function isSafeTimeValue(timeValue: number): boolean;
