import type { TheDate } from "../theDate";
import type { SerializedTheDate } from "../types";
/**
 * Checks whether a date is inside an exclusive range.
 * 
 * **Supported call styles:**
 * - Classic: `betweenThan(input, greater, less)` → `boolean`
 * - Curried: `betweenThan(greater, less)` → `(input) => boolean`
 * 
 * All parameters accept `TheDate` or `SerializedTheDate`.
 * 
 * ```ts
 * const start = D.create("2024-06-01");
 * const end = D.create("2024-06-30");
 * const input = D.create("2024-06-30");
 * 
 * const result = D.betweenThan(input, start, end);
 * // result: false
 * 
 * pipe(
 * 	input,
 * 	D.betweenThan(start, end),
 * ); // false
 * ```
 * 
 * @remarks
 * - Exclusive bounds: `input > greater && input < less`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/betweenThan
 * 
 * @namespace D
 * 
 */
export declare function betweenThan<GenericValue extends TheDate | SerializedTheDate>(greater: TheDate | SerializedTheDate, less: TheDate | SerializedTheDate): (input: GenericValue) => boolean;
export declare function betweenThan<GenericValue extends TheDate | SerializedTheDate>(input: GenericValue, greater: TheDate | SerializedTheDate, less: TheDate | SerializedTheDate): boolean;
