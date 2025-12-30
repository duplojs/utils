import type { TheDate } from "../types";
export declare function addSeconds<GenericInput extends TheDate, GenericSecond extends number>(second: GenericSecond): (input: GenericInput) => TheDate;
export declare function addSeconds<GenericInput extends TheDate, GenericSecond extends number>(input: GenericInput, second: GenericSecond): TheDate;
