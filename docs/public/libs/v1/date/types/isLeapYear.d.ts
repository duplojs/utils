import type * as DString from "../../string";
type TenEven = "" | "2" | "4" | "6" | "8";
type OddTen = "1" | "3" | "5" | "7" | "9";
type MultipleOf4 = `${TenEven}${"0" | "4" | "8"}` | `${OddTen}${"2" | "6"}`;
type MultipleOf100 = `${Exclude<DString.Digit, "0">}00`;
type MultipleOf400 = `${Exclude<MultipleOf4, "0">}00`;
export type IsLeapYear<GenericYear extends number> = `${GenericYear}` extends infer InferredYear ? InferredYear extends `${number | ""}${MultipleOf4}` ? InferredYear extends `${number | ""}${MultipleOf100}` ? InferredYear extends `${number | ""}${MultipleOf400}` ? true : false : true : false : never;
export {};
