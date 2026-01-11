import { type TheDate } from "./types";
/**
 * Creates a TheDate from a timestamp in milliseconds.
 * 
 * Signature: `createTheDate(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = D.createTheDate(1_700_000_000_000);
 * // result: "date1700000000000+"
 * 
 * const result2 = D.createTheDate(-1_700_000_000_000);
 * // result2: "date1700000000000-"
 * 
 * const result3 = D.createTheDate(8_640_000_000_000_500);
 * // result3: "date8640000000000000+"
 * ```
 * 
 * @remarks
 * - The input is rounded and clamped to the supported timestamp range.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/createTheDate
 * 
 * @namespace D
 * 
 */
export declare function createTheDate(timestamp: number): TheDate;
