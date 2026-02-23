import type { TheTime } from "./theTime";
import type { SerializedTheTime } from "./types";
type ComputeTimeUnit = "week" | "day" | "hour" | "minute" | "second" | "millisecond";
/**
 * Converts a time value to a numeric value in the requested time unit.
 * 
 * **Supported call styles:**
 * - Classic: `computeTime(input, unit)` → `number`
 * - Curried: `computeTime(unit)` → `(input) => number`
 * 
 * `input` accepts `TheTime` or `SerializedTheTime`.
 * `unit` accepts `week | day | hour | minute | second | millisecond`.
 * 
 * ```ts
 * const input = D.createTime(7_200_000, "millisecond");
 * 
 * const hours = D.computeTime(input, "hour");
 * // hours: number
 * 
 * const minutesFromSerialized = D.computeTime("time3600000-", "minute");
 * // minutesFromSerialized: number
 * 
 * const days = pipe(
 * 	D.createTime(172_800_000, "millisecond"),
 * 	D.computeTime("day"),
 * );
 * // days: number
 * 
 * ```
 * 
 * @remarks
 * - `computeTime` keeps the sign of the input value.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/computeTime
 * 
 * @namespace D
 * 
 */
export declare function computeTime(unit: ComputeTimeUnit): (input: TheTime | SerializedTheTime) => number;
export declare function computeTime(input: TheTime | SerializedTheTime, unit: ComputeTimeUnit): number;
export {};
