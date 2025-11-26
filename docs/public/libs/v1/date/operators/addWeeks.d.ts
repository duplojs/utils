import type { TheDate } from "../types";
import type { PositiveNumber } from "../../number/types";
export declare function addWeeks<GenericInput extends TheDate, GenericWeek extends number>(week: PositiveNumber<GenericWeek>): (input: GenericInput) => TheDate;
export declare function addWeeks<GenericInput extends TheDate, GenericWeek extends number>(input: GenericInput, week: PositiveNumber<GenericWeek>): TheDate;
