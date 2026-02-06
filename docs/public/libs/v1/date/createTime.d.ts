import { type IsEqual, type And } from "../common";
import { type maxTimeValue, type minTimeValue } from "./constants";
import { type SerializedTheTime, type SpoolingTime } from "./types";
import * as DEither from "../either";
import { type IsGreater, type IsLess } from "../number";
import { TheTime } from "./theTime";
export type MayBeTime = DEither.Right<"time-created", TheTime> | DEither.Left<"time-created-error", null>;
type Units = "week" | "day" | "hour" | "minute" | "second" | "millisecond";
declare const SymbolForbiddenTime: unique symbol;
type ForbiddenTime<GenericInput extends number, GenericUnit extends Units> = IsEqual<GenericInput, number> extends true ? {
    [SymbolForbiddenTime]: "Expect only literal value.";
} : ((IsEqual<GenericUnit, "millisecond"> extends true ? And<[
    IsGreater<GenericInput, typeof minTimeValue>,
    IsLess<GenericInput, typeof maxTimeValue>
]> extends true ? GenericInput : {
    [SymbolForbiddenTime]: "Support that the milliseconds between -9007199254740991 and 9007199254740991.";
} : GenericInput) & (IsEqual<GenericUnit, "second"> extends true ? And<[
    IsGreater<GenericInput, -9007199254740>,
    IsLess<GenericInput, 9007199254740>
]> extends true ? GenericInput : {
    [SymbolForbiddenTime]: "Support that the seconds between -9007199254740 and 9007199254740.";
} : GenericInput) & (IsEqual<GenericUnit, "minute"> extends true ? And<[
    IsGreater<GenericInput, -150119987579>,
    IsLess<GenericInput, 150119987579>
]> extends true ? GenericInput : {
    [SymbolForbiddenTime]: "Support that the minutes between -150119987579 and 150119987579.";
} : GenericInput) & (IsEqual<GenericUnit, "hour"> extends true ? And<[
    IsGreater<GenericInput, -2501999792>,
    IsLess<GenericInput, 2501999792>
]> extends true ? GenericInput : {
    [SymbolForbiddenTime]: "Support that the hours between -2501999792 and 2501999792.";
} : GenericInput) & (IsEqual<GenericUnit, "day"> extends true ? And<[
    IsGreater<GenericInput, -104249991>,
    IsLess<GenericInput, 104249991>
]> extends true ? GenericInput : {
    [SymbolForbiddenTime]: "Support that the days between -104249991 and 104249991.";
} : GenericInput) & (IsEqual<GenericUnit, "week"> extends true ? And<[
    IsGreater<GenericInput, -14892855>,
    IsLess<GenericInput, 14892855>
]> extends true ? GenericInput : {
    [SymbolForbiddenTime]: "Support that the weeks between -14892855 and 14892855.";
} : GenericInput));
/**
 * Creates a `TheTime` (normalized duration) from numeric or structured inputs.
 * 
 * Signature: `createTime(input, unit?)` → `TheTime | Either<"time-created", TheTime>`
 * 
 * The return type depends on the overload:
 * - Literal `number + unit` overload returns `TheTime` directly.
 * - Runtime inputs (`number`, `SerializedTheTime`, `SpoolingTime`, `TheTime`) can return `Either`.
 * 
 * ```ts
 * const direct = D.createTime(90, "minute");
 * // direct: TheTime
 * 
 * const mayBeFromSerialized = D.createTime("time5400000+");
 * // mayBeFromSerialized: Either<"time-created", TheTime>
 * 
 * const mayBeFromSpooling = D.createTime({
 * 	value: "+01:30:00",
 * 	minute: 15,
 * });
 * // mayBeFromSpooling: Either<"time-created", TheTime>
 * 
 * pipe(
 * 	120,
 * 	D.createTime,
 * ); // Either<"time-created", TheTime>
 * ```
 * 
 * @remarks
 * - `TheTime` represents a duration, not a calendar date.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/createTime
 * @see https://utils.duplojs.dev/en/v1/api/date/createTimeOrThrow
 * 
 * @namespace D
 * 
 */
export declare function createTime<GenericInput extends number, GenericUnit extends Units = "millisecond">(input: GenericInput & ForbiddenTime<GenericInput, GenericUnit>, unit: GenericUnit): TheTime;
export declare function createTime<GenericInput extends number | TheTime | SpoolingTime | SerializedTheTime>(input: GenericInput): MayBeTime;
export {};
