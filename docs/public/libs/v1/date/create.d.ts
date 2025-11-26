import type { Hour, IsLeapYear, Millisecond, Minute, Second, TheDate } from "./types";
import { type EitherLeft, type EitherRight } from "../either";
import { type MonthWithDay } from "./types/month";
export type MayBe = EitherRight<"date-created", TheDate> | EitherLeft<"date-created-error", null>;
declare const SymbolErrorIsNotLeapYear: unique symbol;
interface SafeDateParams {
    hour?: Hour;
    minute?: Minute;
    second?: Second;
    millisecond?: Millisecond;
}
export declare function create<GenericInput extends TheDate | Date | number>(input: GenericInput): MayBe;
export declare function create<GenericInput extends `${"-" | ""}${number}-${MonthWithDay}`>(input: GenericInput & (GenericInput extends `${"-" | ""}${infer InferredYear extends `${number}`}-02-29` ? IsLeapYear<InferredYear> extends true ? GenericInput : {
    [SymbolErrorIsNotLeapYear]: "Is not a leap year.";
} : GenericInput), params?: SafeDateParams): TheDate;
export {};
