import { TheTime } from "../../../../date";
import { type AnyTuple } from "../../../../common";
import { type Time } from "../../base";
/**
 * Returns the largest wrapped `Time` from a tuple.
 * 
 * **Supported call styles:**
 * - Classic: `timeMax(input)` → `Time`
 * 
 * `input` can mix wrapped `Time` and raw `TheTime` values.
 * 
 * ```ts
 * const largest = C.timeMax([
 * 	C.Time.createOrThrow(D.createTime(1_000, "millisecond")),
 * 	D.createTime(500, "millisecond"),
 * 	D.createTime(2_000, "millisecond"),
 * ]);
 * // largest: C.Time
 * 
 * const mixed = C.timeMax([
 * 	C.Time.createOrThrow(D.createTime(100, "millisecond")),
 * 	D.createTime(50, "millisecond"),
 * ]);
 * // mixed: C.Time
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/timeMax
 * 
 * @namespace C
 * 
 */
export declare function timeMax(input: AnyTuple<Time | TheTime>): Time;
