import type { TheTime } from "../types";
export declare function greaterTime<GenericValue extends TheTime>(threshold: TheTime): (input: GenericValue) => boolean;
export declare function greaterTime<GenericValue extends TheTime>(input: GenericValue, threshold: TheTime): boolean;
