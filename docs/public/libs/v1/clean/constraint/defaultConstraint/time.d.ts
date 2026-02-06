import { type GetConstraint } from "../base";
import * as DDataParser from "../../../dataParser";
import { TheTime } from "../../../date";
/**
 * Constraint handler that validates strictly positive durations (>= 1 millisecond).
 * 
 * **Supported call styles:**
 * - Classic: `PositiveTime.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate time values and to constrain NewTypes to positive durations.
 * 
 * ```ts
 * const result = C.PositiveTime.create(D.createTime(1, "second"));
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"positive-time", D.TheTime>>
 * }
 * 
 * const value = C.PositiveTime.createOrThrow(D.createTime(500, "millisecond"));
 * // value: C.ConstrainedType<"positive-time", D.TheTime>
 * 
 * C.PositiveTime.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const PositiveTime: import("..").ConstraintHandler<"positive-time", TheTime, readonly [DDataParser.DataParserCheckerTimeMin], number | TheTime | `time${number}-` | `time${number}+`>;
export type PositiveTime = GetConstraint<typeof PositiveTime>;
/**
 * Constraint handler that validates strictly negative durations (<= -1 millisecond).
 * 
 * **Supported call styles:**
 * - Classic: `NegativeTime.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate time values and to constrain NewTypes to negative durations.
 * 
 * ```ts
 * const result = C.NegativeTime.create(D.createTime(-1, "second"));
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"negative-time", D.TheTime>>
 * }
 * 
 * const value = C.NegativeTime.createOrThrow(D.createTime(-500, "millisecond"));
 * // value: C.ConstrainedType<"negative-time", D.TheTime>
 * 
 * C.NegativeTime.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const NegativeTime: import("..").ConstraintHandler<"negative-time", TheTime, readonly [DDataParser.DataParserCheckerTimeMax], number | TheTime | `time${number}-` | `time${number}+`>;
export type NegativeTime = GetConstraint<typeof NegativeTime>;
