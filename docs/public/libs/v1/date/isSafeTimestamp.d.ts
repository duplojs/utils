/**
 * Checks whether a timestamp is a safe integer inside supported date bounds.
 * 
 * Signature: `isSafeTimestamp(timestamp)` → `boolean`
 * 
 * ```ts
 * const ok = D.isSafeTimestamp(1_700_000_000_000);
 * // ok: true
 * 
 * const tooLarge = D.isSafeTimestamp(9_000_000_000_000_000);
 * // tooLarge: false
 * 
 * pipe(
 * 	1_700_000_000_000,
 * 	D.isSafeTimestamp,
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/isSafeTimestamp
 * 
 * @namespace D
 * 
 */
export declare function isSafeTimestamp(timestamp: number): boolean;
