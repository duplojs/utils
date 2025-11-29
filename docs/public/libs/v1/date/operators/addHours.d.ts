import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";
export declare function addHours<GenericInput extends TheDate, GenericHour extends number>(hour: PositiveNumber<GenericHour>): (input: GenericInput) => TheDate;
export declare function addHours<GenericInput extends TheDate, GenericHour extends number>(input: GenericInput, hour: PositiveNumber<GenericHour>): TheDate;
