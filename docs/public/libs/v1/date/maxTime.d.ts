import type { AnyTuple } from "../common/types/anyTuple";
import { TheTime } from "./theTime";
import type { SerializedTheTime } from "./types";
/**
 * Returns the greatest duration from a tuple of time values.
 * 
 * Signature: `maxTime(input)` → `TheTime`
 * 
 * ```ts
 * const value = D.maxTime([
 * 	D.createTime(3_000, "millisecond"),
 * 	D.createTime(1_000, "millisecond"),
 * 	"time2000+",
 * ] as const);
 * // value: TheTime
 * 
 * const value2 = D.maxTime([
 * 	"time3000-",
 * 	"time1000-",
 * ] as const);
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/maxTime
 * 
 * @namespace D
 * 
 */
export declare function maxTime<GenericInput extends AnyTuple<TheTime | SerializedTheTime>>(input: GenericInput): TheTime;
