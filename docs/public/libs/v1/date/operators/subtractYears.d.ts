import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";
export declare function subtractYears<GenericInput extends TheDate, GenericYear extends number>(year: PositiveNumber<GenericYear>): (input: GenericInput) => TheDate;
export declare function subtractYears<GenericInput extends TheDate, GenericYear extends number>(input: GenericInput, year: PositiveNumber<GenericYear>): TheDate;
