import { type Date, type Time } from "../../base";
import { type TheTime } from "../../../../date";
export declare function dateAddTime(time: Time | TheTime): (primitive: Date) => Date;
export declare function dateAddTime(primitive: Date, time: Time | TheTime): Date;
