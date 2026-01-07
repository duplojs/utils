import { type AnyTuple } from "../common";
import { type TheTime } from "./types";
/**
 * Returns the smallest time from an iterable.
 * 
 * Signature: `minTime(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = D.minTime([
 * 	D.createTheTime(3_000),
 * 	D.createTheTime(1_000),
 * 	D.createTheTime(2_000),
 * ]);
 * // result: "time1000+"
 * 
 * const result2 = D.minTime([
 * 	"time3000-",
 * 	"time1000-",
 * ] as const);
 * // result2: "time3000-"
 * 
 * const result3 = D.minTime([
 * 	"time500+",
 * 	"time100+",
 * ] as const);
 * // result3: "time100+"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/minTime
 * 
 * @namespace D
 * 
 */
export declare function minTime<GenericInput extends AnyTuple<TheTime>>(input: GenericInput): `time${number}-` | `time${number}+`;
