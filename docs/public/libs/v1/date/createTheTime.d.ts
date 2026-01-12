import { type TheTime } from "./types";
/**
 * Creates a TheTime from a time value in milliseconds.
 * 
 * Signature: `createTheTime(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = D.createTheTime(90_000);
 * // result: "time90000+"
 * 
 * const result2 = D.createTheTime(-90_000);
 * // result2: "time90000-"
 * ```
 * 
 * @remarks
 * - The input is rounded and clamped to the supported time range.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/createTheTime
 * 
 * @namespace D
 * 
 */
export declare function createTheTime(timestamp: number): TheTime;
