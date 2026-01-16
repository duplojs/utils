/**
 * The sleep() function creates an asynchronous pause for a number of milliseconds.
 * 
 * Signature: `sleep(duration)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const start = Date.now();
 * 
 * await sleep(5);
 * 
 * const elapsed = Date.now() - start;
 * // elapsed >= 5 (approx)
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/common/sleep
 * 
 */
export declare function sleep(millieSeconde?: number): Promise<void>;
