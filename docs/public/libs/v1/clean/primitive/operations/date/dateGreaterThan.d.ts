import { type Date } from "../../base";
import { type TheDate } from "../../../../date";
/**
 * Checks whether a Date is after a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `dateGreaterThan(date, threshold)` -> returns a boolean
 * - Curried: `dateGreaterThan(threshold)` -> returns a function waiting for the date
 * 
 * Use it to compare wrapped dates or raw TheDate values.
 * 
 * ```ts
 * const date = C.Date.createOrThrow(D.create("2024-03-01"));
 * const threshold = D.create("2024-02-29");
 * 
 * if (C.dateGreaterThan(date, threshold)) {
 * 	// date is after threshold
 * }
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateGreaterThan
 * 
 * @namespace C
 * 
 */
export declare function dateGreaterThan(threshold: Date | TheDate): (primitive: Date) => boolean;
export declare function dateGreaterThan(primitive: Date, threshold: Date | TheDate): boolean;
