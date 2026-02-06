import { type Date } from "../../base";
import { type TheDate } from "../../../../date";
/**
 * Checks whether a wrapped `Date` is strictly after a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `dateGreaterThan(date, threshold)` → `boolean`
 * - Curried: `dateGreaterThan(threshold)` → function waiting for the date
 * 
 * `threshold` accepts wrapped `Date` or raw `TheDate`.
 * 
 * ```ts
 * const date = C.Date.createOrThrow(D.create("2024-03-01"));
 * const threshold = D.create("2024-02-29");
 * 
 * const result = C.dateGreaterThan(date, threshold);
 * // result: true
 * 
 * pipe(
 * 	date,
 * 	C.dateGreaterThan(threshold),
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateGreaterThan
 * 
 * @namespace C
 * 
 */
export declare function dateGreaterThan(threshold: Date | TheDate): (primitive: Date) => boolean;
export declare function dateGreaterThan(primitive: Date, threshold: Date | TheDate): boolean;
