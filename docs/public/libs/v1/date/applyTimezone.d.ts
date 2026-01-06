import { type Timezone } from "./timezone";
import { type TheDate } from "./types";
export declare function applyTimezone(timeZone: Timezone): (theDate: TheDate) => TheDate;
export declare function applyTimezone(theDate: TheDate, timeZone: Timezone): TheDate;
