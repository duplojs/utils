import type { TheDate } from "../types";
export declare function addDays<GenericInput extends TheDate, GenericDay extends number>(day: GenericDay): (input: GenericInput) => TheDate;
export declare function addDays<GenericInput extends TheDate, GenericDay extends number>(input: GenericInput, day: GenericDay): TheDate;
