import type { TheDate } from "../types";
export declare function addYears<GenericInput extends TheDate, GenericYear extends number>(year: GenericYear): (input: GenericInput) => TheDate;
export declare function addYears<GenericInput extends TheDate, GenericYear extends number>(input: GenericInput, year: GenericYear): TheDate;
