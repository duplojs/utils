/**
 * Normalizes a timestamp into the supported safe range.
 * 
 * Signature: `makeSafeTimestamp(timestamp)` → `number`
 * 
 * ```ts
 * const rounded = D.makeSafeTimestamp(1_700_000_000_000.4);
 * // rounded: 1700000000000
 * 
 * const fromNaN = D.makeSafeTimestamp(Number.NaN);
 * // fromNaN: 0
 * 
 * const clamped = D.makeSafeTimestamp(8_640_000_000_000_500);
 * // clamped: 8640000000000000
 * 
 * ```
 * 
 * @remarks
 * - `NaN` becomes `0`.
 * - Floating values are rounded.
 * - Values outside bounds are clamped.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/makeSafeTimestamp
 * 
 * @namespace D
 * 
 */
export declare function makeSafeTimestamp(timestamp: number): number;
