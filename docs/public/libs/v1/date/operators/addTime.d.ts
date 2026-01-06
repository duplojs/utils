import type { TheDate, TheTime } from "../types";
export declare function addTime<GenericInput extends TheDate>(time: TheTime): (input: GenericInput) => TheDate;
export declare function addTime<GenericInput extends TheTime>(time: TheTime): (input: GenericInput) => TheTime;
export declare function addTime<GenericInput extends TheDate>(input: GenericInput, time: TheTime): TheDate;
export declare function addTime<GenericInput extends TheTime>(input: GenericInput, time: TheTime): TheTime;
