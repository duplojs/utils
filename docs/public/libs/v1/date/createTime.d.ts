import { type TheTime, type SpoolingTime } from "./types";
type Units = "week" | "day" | "hour" | "minute" | "second" | "millisecond";
export declare function createTime(input: number, unit?: Units): TheTime;
export declare function createTime<GenericInput extends SpoolingTime>(input: GenericInput): TheTime;
export {};
