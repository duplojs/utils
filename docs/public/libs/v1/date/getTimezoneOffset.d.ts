import { type Timezone } from "./timezone";
import { type TheDate } from "./types";
export declare function getTimezoneOffset(timeZone: Timezone): (theDate: TheDate) => number;
export declare function getTimezoneOffset(theDate: TheDate, timeZone: Timezone): number;
