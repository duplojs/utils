/**
 * Checks whether a timestamp is safe.
 * 
 * Signature: `isSafeTimestamp(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = 1_700_000_000_000;
 * const result = D.isSafeTimestamp(input);
 * // result: true
 * 
 * const input2 = 9_000_000_000_000_000;
 * const result2 = D.isSafeTimestamp(input2);
 * // result2: false
 * 
 * pipe(
 * 	input,
 * 	D.isSafeTimestamp,
 * ); // result: true
 * 
 * ```
 * 
 * @remarks
 * - Checks against the engine min/max timestamp limits.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/isSafeTimestamp
 * 
 * @namespace D
 * 
 */
export declare function isSafeTimestamp(timestamp: number): boolean;
