import { type Hour, type IsLeapYear, type IsSafeYear, type Millisecond, type Minute, type Second, type TheDate } from "./types";
import * as DEither from "../either";
import { type MonthWithDay } from "./types/month";
import type * as DString from "../string";
import { type And, type IsEqual, type Not, type IsExtends } from "../common";
import { type SpoolingDate } from "./types/spoolingDate";
export type MayBe = DEither.EitherRight<"date-created", TheDate> | DEither.EitherLeft<"date-created-error", null>;
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
export declare function create<GenericInput extends TheDate | Date | number>(input: GenericInput): MayBe;
export declare function create<GenericInput extends SpoolingDate>(input: GenericInput): MayBe;
export declare function create<GenericInput extends SafeDate>(input: GenericInput & ForbiddenDate<GenericInput>, params?: SafeDateParams): TheDate;
export {};
