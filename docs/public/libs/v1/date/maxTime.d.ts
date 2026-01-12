import { type AnyTuple } from "../common";
import { type TheTime } from "./types";
/**
 * Returns the largest time from an iterable.
 * 
 * Signature: `maxTime(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const result = D.maxTime([
 * 	D.createTheTime(3_000),
 * 	D.createTheTime(1_000),
 * 	D.createTheTime(2_000),
 * ]);
 * // result: "time3000+"
 * 
 * const result2 = D.maxTime([
 * 	"time3000-",
 * 	"time1000-",
 * ] as const);
 * // result2: "time1000-"
 * 
 * const result3 = D.maxTime([
 * 	"time500+",
 * 	"time100+",
 * ] as const);
 * // result3: "time500+"
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/maxTime
 * 
 * @namespace D
 * 
 */
export declare function maxTime<GenericInput extends AnyTuple<TheTime>>(input: GenericInput): `time${number}-` | `time${number}+`;
