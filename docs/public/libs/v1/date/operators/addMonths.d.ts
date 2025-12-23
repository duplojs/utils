import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";
export declare function addMonths<GenericInput extends TheDate, GenericMonth extends number>(month: PositiveNumber<GenericMonth>): (input: GenericInput) => TheDate;
export declare function addMonths<GenericInput extends TheDate, GenericMonth extends number>(input: GenericInput, month: PositiveNumber<GenericMonth>): TheDate;
