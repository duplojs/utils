import type { TheDate } from "../types";
export declare function subtractYears<GenericInput extends TheDate, GenericYear extends number>(year: GenericYear): (input: GenericInput) => TheDate;
export declare function subtractYears<GenericInput extends TheDate, GenericYear extends number>(input: GenericInput, year: GenericYear): TheDate;
