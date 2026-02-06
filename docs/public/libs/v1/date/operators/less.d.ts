import type { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Checks whether a date is less than or equal to a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `less(input, threshold)` → `boolean`
 * - Curried: `less(threshold)` → `(input) => boolean`
 * 
 * All parameters accept `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const threshold = D.create("2024-06-20");
 * const input = D.create("2024-05-01");
 * 
 * const result = D.less(input, threshold);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.less(threshold),
 * ); // true
 * ```
 * 
 * @remarks
 * - Inclusive comparison: `input <= threshold`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/less
 * 
 * @namespace D
 * 
 */
export declare function less<GenericValue extends TheDate | SerializedTheDate>(threshold: TheDate | SerializedTheDate): (input: GenericValue) => boolean;
export declare function less<GenericValue extends TheDate | SerializedTheDate>(input: GenericValue, threshold: TheDate | SerializedTheDate): boolean;
