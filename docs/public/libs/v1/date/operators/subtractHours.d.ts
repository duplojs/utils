import type { TheDate } from "../types";
export declare function subtractHours<GenericInput extends TheDate, GenericHour extends number>(hour: GenericHour): (input: GenericInput) => TheDate;
export declare function subtractHours<GenericInput extends TheDate, GenericHour extends number>(input: GenericInput, hour: GenericHour): TheDate;
