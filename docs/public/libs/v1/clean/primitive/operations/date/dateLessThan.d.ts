import { type Date } from "../../base";
import { type TheDate } from "../../../../date";
/**
 * Checks whether a Date is before a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `dateLessThan(date, threshold)` -> returns a boolean
 * - Curried: `dateLessThan(threshold)` -> returns a function waiting for the date
 * 
 * Use it to compare wrapped dates or raw TheDate values.
 * 
 * ```ts
 * const date = C.Date.createOrThrow(D.create("2024-02-29"));
 * const threshold = D.create("2024-03-01");
 * 
 * if (C.dateLessThan(date, threshold)) {
 * 	// date is before threshold
 * }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateLessThan
 * 
 * @namespace C
 * 
 */
export declare function dateLessThan(threshold: Date | TheDate): (primitive: Date) => boolean;
export declare function dateLessThan(primitive: Date, threshold: Date | TheDate): boolean;
