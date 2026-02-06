/**
 * Normalizes a time value into the supported safe range.
 * 
 * Signature: `makeSafeTimeValue(timeValue)` → `number`
 * 
 * ```ts
 * const rounded = D.makeSafeTimeValue(1.2);
 * // rounded: 1
 * 
 * const fromNaN = D.makeSafeTimeValue(Number.NaN);
 * // fromNaN: 0
 * 
 * const clamped = D.makeSafeTimeValue(Infinity);
 * // clamped: 9007199254740991
 * 
 * ```
 * 
 * @remarks
 * - `NaN` becomes `0`.
 * - Floating values are rounded.
 * - Values outside bounds are clamped.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/makeSafeTimeValue
 * 
 * @namespace D
 * 
 */
export declare function makeSafeTimeValue(timeValue: number): number;
