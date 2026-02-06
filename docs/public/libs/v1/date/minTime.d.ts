import type { AnyTuple } from "../common/types/anyTuple";
import { TheTime } from "./theTime";
import type { SerializedTheTime } from "./types";
/**
 * Returns the smallest duration from a tuple of time values.
 * 
 * Signature: `minTime(input)` → `TheTime`
 * 
 * ```ts
 * const value = D.minTime([
 * 	D.createTime(3_000, "millisecond"),
 * 	D.createTime(1_000, "millisecond"),
 * 	"time2000+",
 * ] as const);
 * // value: TheTime
 * 
 * const value2 = D.minTime([
 * 	"time3000-",
 * 	"time1000-",
 * ] as const);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/minTime
 * 
 * @namespace D
 * 
 */
export declare function minTime<GenericInput extends AnyTuple<TheTime | SerializedTheTime>>(input: GenericInput): TheTime;
