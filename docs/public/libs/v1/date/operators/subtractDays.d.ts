import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";
export declare function subtractDays<GenericInput extends TheDate, GenericDay extends number>(day: PositiveNumber<GenericDay>): (input: GenericInput) => TheDate;
export declare function subtractDays<GenericInput extends TheDate, GenericDay extends number>(input: GenericInput, day: PositiveNumber<GenericDay>): TheDate;
