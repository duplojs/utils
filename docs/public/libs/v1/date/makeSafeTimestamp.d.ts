/**
 * Clamps a timestamp to the supported safe range.
 * 
 * Signature: `makeSafeTimestamp(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = D.makeSafeTimestamp(1_700_000_000_000.4);
 * // result: 1700000000000
 * 
 * const result2 = D.makeSafeTimestamp(Number.NaN);
 * // result2: 0
 * 
 * const result3 = D.makeSafeTimestamp(8_640_000_000_000_500);
 * // result3: 8640000000000000
 * ```
 * 
 * @remarks
 * - Rounds non-integers, replaces NaN with 0, and clamps to min/max bounds.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/makeSafeTimestamp
 * 
 * @namespace D
 * 
 */
export declare function makeSafeTimestamp(timestamp: number): number;
