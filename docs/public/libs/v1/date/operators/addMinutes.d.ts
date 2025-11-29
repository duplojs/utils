import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";
export declare function addMinutes<GenericInput extends TheDate, GenericMinute extends number>(minute: PositiveNumber<GenericMinute>): (input: GenericInput) => TheDate;
export declare function addMinutes<GenericInput extends TheDate, GenericMinute extends number>(input: GenericInput, minute: PositiveNumber<GenericMinute>): TheDate;
