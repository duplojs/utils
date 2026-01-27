import type { Hour, IsLeapYear, IsSafeYear, Millisecond, Minute, Second, TheDate, MonthWithDay, SpoolingDate } from "./types";
import * as DEither from "../either";
import type * as DString from "../string";
import { type And, type IsEqual, type Not, type IsExtends } from "../common";
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
 * Creates a TheDate from various inputs.
 * 
 * Signature: `create(input)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * // Either<"date-created", TheDate>
 * const mayBeDateFromNativeDate = D.create(
 * 	new Date("2024-06-20T12:00:00Z"),
 * );
 * 
 * // Either<"date-created", TheDate>
 * const mayBeDateFromTimestamp = D.create(
 * 	1_700_000_000_000,
 * );
 * 
 * // "date1709183400000+"
 * const dateFromSafeFormat = D.create(
 * 	"2024-02-29",
 * 	{
 * 		hour: "10",
 * 		minute: "30",
 * 	},
 * );
 * 
 * const dateWrongLeapYear = D.create(
 * 	// @ts-expect-error Safe with leap year.
 * 	"2023-02-29",
 * );
 * 
 * const dateWrongRangeYear = D.create(
 * 	// @ts-expect-error Safe against dates that fall outside the supported date range.
 * 	"-596126-12-30",
 * );
 * 
 * pipe(
 * 	"2024-02-29",
 * 	D.create,
 * ); // "date1709183400000+"
 * 
 * ```
 * 
 * @remarks
 * - Returns an Either tagged "date-created" or "date-created-error" for invalid inputs.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/date/create
 * 
 * @namespace D
 * 
 */
export declare function create<GenericInput extends TheDate | Date | number>(input: GenericInput): MayBe;
export declare function create<GenericInput extends SpoolingDate>(input: GenericInput): MayBe;
export declare function create<GenericInput extends SafeDate>(input: GenericInput & ForbiddenDate<GenericInput>, params?: SafeDateParams): TheDate;
export {};
