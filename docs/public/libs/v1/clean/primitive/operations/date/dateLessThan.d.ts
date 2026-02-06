import { type Date } from "../../base";
import { type TheDate } from "../../../../date";
/**
 * Checks whether a wrapped `Date` is strictly before a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `dateLessThan(date, threshold)` → `boolean`
 * - Curried: `dateLessThan(threshold)` → function waiting for the date
 * 
 * `threshold` accepts wrapped `Date` or raw `TheDate`.
 * 
 * ```ts
 * const date = C.Date.createOrThrow(D.create("2024-02-29"));
 * const threshold = D.create("2024-03-01");
 * 
 * const result = C.dateLessThan(date, threshold);
 * // result: true
 * 
 * pipe(
 * 	date,
 * 	C.dateLessThan(threshold),
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/dateLessThan
 * 
 * @namespace C
 * 
 */
export declare function dateLessThan(threshold: Date | TheDate): (primitive: Date) => boolean;
export declare function dateLessThan(primitive: Date, threshold: Date | TheDate): boolean;
