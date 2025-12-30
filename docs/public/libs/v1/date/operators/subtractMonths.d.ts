import type { TheDate } from "../types";
export declare function subtractMonths<GenericInput extends TheDate, GenericMonth extends number>(month: GenericMonth): (input: GenericInput) => TheDate;
export declare function subtractMonths<GenericInput extends TheDate, GenericMonth extends number>(input: GenericInput, month: GenericMonth): TheDate;
