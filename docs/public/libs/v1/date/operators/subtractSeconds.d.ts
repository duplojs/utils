import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";
export declare function subtractSeconds<GenericInput extends TheDate, GenericSecond extends number>(second: PositiveNumber<GenericSecond>): (input: GenericInput) => TheDate;
export declare function subtractSeconds<GenericInput extends TheDate, GenericSecond extends number>(input: GenericInput, second: PositiveNumber<GenericSecond>): TheDate;
