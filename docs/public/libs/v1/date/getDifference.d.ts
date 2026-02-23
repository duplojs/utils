import type { TheDate } from "./theDate";
import { TheTime } from "./theTime";
import type { SerializedTheDate } from "./types";
/**
 * Returns the time difference between two dates as `TheTime`.
 * 
 * **Supported call styles:**
 * - Classic: `getDifference(input, reference)` → `TheTime`
 * - Curried: `getDifference(reference)` → `(input) => TheTime`
 * 
 * The difference is computed as `input - reference` in milliseconds and returned as `TheTime`.
 * 
 * ```ts
 * const input = D.create("2024-01-03");
 * const reference = D.create("2024-01-01");
 * 
 * const difference = D.getDifference(input, reference);
 * // difference: TheTime
 * 
 * const asMilliseconds = difference.toNative();
 * // asMilliseconds: number
 * 
 * const withSerialized = D.getDifference(
 * 	"date172800000+",
 * 	"date86400000+",
 * );
 * // withSerialized: TheTime
 * 
 * pipe(
 * 	input,
 * 	D.getDifference(reference),
 * ```
 * 
 * @remarks
 * - `TheTime` supports negative values, so `getDifference` preserves the sign of `input - reference`.
 * - Input accepts `TheDate` and `SerializedTheDate`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/getDifference
 * 
 * @namespace D
 * 
 */
export declare function getDifference(reference: TheDate | SerializedTheDate): (input: TheDate | SerializedTheDate) => TheTime;
export declare function getDifference(input: TheDate | SerializedTheDate, reference: TheDate | SerializedTheDate): TheTime;
