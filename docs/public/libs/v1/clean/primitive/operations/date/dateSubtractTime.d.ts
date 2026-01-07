import { type Date, type Time } from "../../base";
import { type TheTime } from "../../../../date";
export declare function dateSubtractTime(time: Time | TheTime): (primitive: Date) => Date;
export declare function dateSubtractTime(primitive: Date, time: Time | TheTime): Date;
