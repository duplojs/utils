import type { Hour, IsLeapYear, IsSafeYear, Millisecond, Minute, Second, MonthWithDay, SpoolingDate } from "./types";
import * as DEither from "../either";
import type * as DString from "../string";
import { type And, type IsEqual, type Not, type IsExtends } from "../common";
import { TheDate } from "./theDate";
import type { SerializedTheDate } from "./types/serializedTheDate";
export type MayBe = DEither.Right<"date-created", TheDate> | DEither.Left<"date-created-error", null>;
type SafeDate = `${number}-${MonthWithDay}`;
declare const SymbolForbiddenDate: unique symbol;
type ForbiddenDate<GenericDate extends string> = And<[
    IsExtends<GenericDate, SafeDate>,
    Not<IsEqual<GenericDate, SafeDate>>
]> extends true ? ((DString.Includes<GenericDate, "."> extends true ? {
    [SymbolForbiddenDate]: "Year can't be includes a float number.";
} : GenericDate) & (GenericDate extends `${infer InferredYear extends number}-02-29` ? IsLeapYear<InferredYear> extends true ? GenericDate : {
    [SymbolForbiddenDate]: "Is not a leap year.";
} : GenericDate) & (GenericDate extends `${infer InferredYear extends number}-${MonthWithDay}` ? IsSafeYear<InferredYear> extends true ? GenericDate : {
    [SymbolForbiddenDate]: "Support that the years between -271820 and 275759.";
} : GenericDate)) : GenericDate;
interface SafeDateParams {
    hour?: Hour;
    minute?: Minute;
    second?: Second;
    millisecond?: Millisecond;
}
/**
 * Creates a `TheDate` from date-like inputs.
 * 
 * Signature: `create(input, params?)` → `TheDate | MaybeEither<TheDate>`
 * 
 * The return type depends on the overload:
 * - Safe literal date strings (`YYYY-MM-DD`) return `TheDate` directly.
 * - Runtime inputs (`number`, `Date`, `SerializedTheDate`, `SpoolingDate`, other strings) return `Either`.
 * 
 * ```ts
 * const direct = D.create("2024-02-29", {
 * 	hour: "10",
 * 	minute: "30",
 * });
 * // direct: TheDate
 * 
 * const mayBeFromTimestamp = D.create(1_700_000_000_000);
 * // mayBeFromTimestamp: Either.Right<"date-created", TheDate> | DEither.Left<"date-created-error", null>
 * 
 * const mayBeFromSpooling = D.create({
 * 	value: "2024-06-20T12:00:00Z",
 * 	timezone: "Europe/Paris",
 * });
 * // mayBeFromSpooling: Either<"date-created", TheDate>
 * ```
 * 
 * @remarks
 * - Use this API when you want a non-throwing creation flow.
 * - For throwing behavior, use `createOrThrow`.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/create
 * @see https://utils.duplojs.dev/en/v1/api/date/createOrThrow
 * 
 * @namespace D
 * 
 */
export declare function create<GenericInput extends TheDate | Date | number | SerializedTheDate>(input: GenericInput): MayBe;
export declare function create<GenericInput extends SpoolingDate>(input: GenericInput): MayBe;
export declare function create<GenericInput extends SafeDate>(input: GenericInput & ForbiddenDate<GenericInput>, params?: SafeDateParams): TheDate;
export {};
