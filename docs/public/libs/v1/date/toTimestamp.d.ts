import type { TheDate, TheTime } from "./types";
export declare function toTimestamp<GenericInput extends TheDate | TheTime>(input: GenericInput): number;
