/**
 * Clamps a time value to the supported safe range.
 * 
 * Signature: `makeSafeTimeValue(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = D.makeSafeTimeValue(1.2);
 * // result: 1
 * 
 * const result2 = D.makeSafeTimeValue(Number.NaN);
 * // result2: 0
 * 
 * const result3 = D.makeSafeTimeValue(Infinity);
 * // result3: 9007199254740991
 * ```
 * 
 * @remarks
 * - Rounds non-integers, replaces NaN with 0, and clamps to min/max bounds.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/makeSafeTimeValue
 * 
 * @namespace D
 * 
 */
export declare function makeSafeTimeValue(timeValue: number): number;
