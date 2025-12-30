import type { Hour, IsLeapYear, IsSafeYear, Millisecond, Minute, Second, TheDate } from "./types";
import { type EitherLeft, type EitherRight } from "../either";
import { type MonthWithDay } from "./types/month";
import type * as DString from "../string";
export type MayBe = EitherRight<"date-created", TheDate> | EitherLeft<"date-created-error", null>;
type SafeDate = `${number}-${MonthWithDay}`;
declare const SymbolForbiddenDate: unique symbol;
type ForbiddenDate<GenericDate extends SafeDate> = ((DString.Includes<GenericDate, "."> extends true ? {
    [SymbolForbiddenDate]: "Year can't be includes a float number.";
} : GenericDate) & (GenericDate extends `${infer InferredYear extends number}-02-29` ? IsLeapYear<InferredYear> extends true ? GenericDate : {
    [SymbolForbiddenDate]: "Is not a leap year.";
} : GenericDate) & (GenericDate extends `${infer InferredYear extends number}-${MonthWithDay}` ? IsSafeYear<InferredYear> extends true ? GenericDate : {
    [SymbolForbiddenDate]: "Support that the years between -271820 and 275759.";
} : GenericDate));
interface SafeDateParams {
    hour?: Hour;
    minute?: Minute;
    second?: Second;
    millisecond?: Millisecond;
}
export declare function create<GenericInput extends TheDate | Date | number>(input: GenericInput): MayBe;
export declare function create<GenericInput extends SafeDate>(input: GenericInput & ForbiddenDate<GenericInput>, params?: SafeDateParams): TheDate;
export {};
