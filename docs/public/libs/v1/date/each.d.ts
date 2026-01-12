import type { TheDate, Unit } from "./types";
/**
 * Iterates over a date range.
 * 
 * Signature: `each(range, unit)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = {
 * 	start: D.create("2024-06-01"),
 * 	end: D.create("2024-06-03"),
 * } as const;
 * 
 * const iterator = D.each(input);
 * const result = A.from(iterator);
 * // result: ["date1717200000000+", "date1717286400000+", "date1717372800000+"]
 * 
 * pipe(
 * 	input,
 * 	D.each,
 * ); // result: ["date1717200000000+", "date1717286400000+", "date1717372800000+"]
 * 
 * ```
 * 
 * @remarks
 * - Includes the end date when it falls on a step boundary.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/each
 * 
 * @namespace D
 * 
 */
export declare function each(range: {
    start: TheDate;
    end: TheDate;
}, unit?: Unit): Generator<`date${number}-` | `date${number}+`, unknown, unknown>;
