import type { TheDate } from "../types";
export declare function addMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(millisecond: GenericMillisecond): (input: GenericInput) => TheDate;
export declare function addMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(input: GenericInput, millisecond: GenericMillisecond): TheDate;
