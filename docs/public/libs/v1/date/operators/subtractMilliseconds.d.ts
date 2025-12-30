import type { TheDate } from "../types";
export declare function subtractMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(millisecond: GenericMillisecond): (input: GenericInput) => TheDate;
export declare function subtractMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(input: GenericInput, millisecond: GenericMillisecond): TheDate;
