import { type TheDate } from "../../../../date";
import { type Date } from "../../base";
import { type AnyTuple } from "../../../../common";
export declare function dateMin(first: Date | TheDate): (...rest: (Date | TheDate)[]) => Date;
export declare function dateMin(...input: AnyTuple<Date | TheDate>): Date;
