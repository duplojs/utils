import type { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Checks whether a date is strictly greater than a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `greaterThan(input, threshold)` → `boolean`
 * - Curried: `greaterThan(threshold)` → `(input) => boolean`
 * 
 * All parameters accept `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const threshold = D.create("2024-06-20");
 * const input = D.create("2024-06-20");
 * 
 * const result = D.greaterThan(input, threshold);
 * // result: false
 * 
 * pipe(
 * 	input,
 * 	D.greaterThan(threshold),
 * ); // false
 * ```
 * 
 * @remarks
 * - Strict comparison: `input > threshold`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/greaterThan
 * 
 * @namespace D
 * 
 */
export declare function greaterThan<GenericValue extends TheDate | SerializedTheDate>(threshold: TheDate | SerializedTheDate): (input: GenericValue) => boolean;
export declare function greaterThan<GenericValue extends TheDate | SerializedTheDate>(input: GenericValue, threshold: TheDate | SerializedTheDate): boolean;
