import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";
export declare function subtractMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(millisecond: PositiveNumber<GenericMillisecond>): (input: GenericInput) => TheDate;
export declare function subtractMilliseconds<GenericInput extends TheDate, GenericMillisecond extends number>(input: GenericInput, millisecond: PositiveNumber<GenericMillisecond>): TheDate;
