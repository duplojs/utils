import { type TheTime } from "../../../../date";
import { type Time } from "../../base";
import { type AnyTuple } from "../../../../common";
/**
 * Returns the largest duration from a tuple of Time values.
 * 
 * **Supported call styles:**
 * - Classic: `timeMax(input)` -> returns a Time
 * 
 * The input can mix wrapped Times and raw TheTime values.
 * 
 * ```ts
 * const largest = C.timeMax([
 * 	C.Time.createOrThrow(D.createTheTime(1_000)),
 * 	D.createTheTime(500),
 * 	D.createTheTime(2_000),
 * ]);
 * // largest: C.Time
 * 
 * const fromRaw = C.timeMax([
 * 	D.createTheTime(10),
 * 	D.createTheTime(5),
 * 	D.createTheTime(20),
 * ]);
 * // fromRaw: C.Time
 * 
 * const mixed = C.timeMax([
 * 	C.Time.createOrThrow(D.createTheTime(100)),
 * 	D.createTheTime(50),
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
