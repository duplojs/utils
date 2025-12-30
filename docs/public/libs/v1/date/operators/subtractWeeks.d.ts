import type { TheDate } from "../types";
export declare function subtractWeeks<GenericInput extends TheDate, GenericWeek extends number>(week: GenericWeek): (input: GenericInput) => TheDate;
export declare function subtractWeeks<GenericInput extends TheDate, GenericWeek extends number>(input: GenericInput, week: GenericWeek): TheDate;
