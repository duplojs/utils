import type { TheDate } from "../types";
export declare function subtractMinutes<GenericInput extends TheDate, GenericMinute extends number>(minute: GenericMinute): (input: GenericInput) => TheDate;
export declare function subtractMinutes<GenericInput extends TheDate, GenericMinute extends number>(input: GenericInput, minute: GenericMinute): TheDate;
