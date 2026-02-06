import type { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Checks whether a date is greater than or equal to a threshold.
 * 
 * **Supported call styles:**
 * - Classic: `greater(input, threshold)` → `boolean`
 * - Curried: `greater(threshold)` → `(input) => boolean`
 * 
 * All parameters accept `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const threshold = D.create("2024-06-01");
 * const input = D.create("2024-06-20");
 * 
 * const result = D.greater(input, threshold);
 * // result: true
 * 
 * pipe(
 * 	input,
 * 	D.greater(threshold),
 * ); // true
 * ```
 * 
 * @remarks
 * - Inclusive comparison: `input >= threshold`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/greater
 * 
 * @namespace D
 * 
 */
export declare function greater<GenericValue extends TheDate | SerializedTheDate>(threshold: TheDate | SerializedTheDate): (input: GenericValue) => boolean;
export declare function greater<GenericValue extends TheDate | SerializedTheDate>(input: GenericValue, threshold: TheDate | SerializedTheDate): boolean;
