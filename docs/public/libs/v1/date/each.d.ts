import { TheDate } from "./theDate";
import type { Unit, SerializedTheDate } from "./types";
/**
 * Creates an iterator over a date range with a chosen unit step.
 * 
 * Signature: `each(range, unit?)` → `Iterator<TheDate>`
 * 
 * ```ts
 * const range = {
 * 	start: D.create("2024-06-01"),
 * 	end: D.create("2024-06-03"),
 * } as const;
 * 
 * const iterator = D.each(range, "day");
 * const values = A.from(iterator);
 * // values: TheDate[]
 * 
 * const reverse = A.from(
 * 	D.each({
 * 		start: D.create("2024-06-03"),
 * 		end: D.create("2024-06-01"),
 * 	}),
 * );
 * // reverse: TheDate[]
 * ```
 * 
 * @remarks
 * - Supports ascending and descending ranges.
 * - Includes the end value when exactly aligned with step boundaries.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/each
 * 
 * @namespace D
 * 
 */
export declare function each(range: {
    start: TheDate | SerializedTheDate;
    end: TheDate | SerializedTheDate;
}, unit?: Unit): Generator<TheDate, unknown, unknown>;
