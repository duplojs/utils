import { type AnyTuple } from "../../../../common";
import { TheTime } from "../../../../date";
import { type Time } from "../../base";
/**
 * Returns the smallest wrapped `Time` from a tuple.
 * 
 * **Supported call styles:**
 * - Classic: `timeMin(input)` → `Time`
 * 
 * `input` can mix wrapped `Time` and raw `TheTime` values.
 * 
 * ```ts
 * const smallest = C.timeMin([
 * 	C.Time.createOrThrow(D.createTime(1_000, "millisecond")),
 * 	D.createTime(500, "millisecond"),
 * 	D.createTime(2_000, "millisecond"),
 * ]);
 * // smallest: C.Time
 * 
 * const mixed = C.timeMin([
 * 	C.Time.createOrThrow(D.createTime(100, "millisecond")),
 * 	D.createTime(50, "millisecond"),
 * ]);
 * // mixed: C.Time
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/timeMin
 * 
 * @namespace C
 * 
 */
export declare function timeMin(input: AnyTuple<Time | TheTime>): Time;
