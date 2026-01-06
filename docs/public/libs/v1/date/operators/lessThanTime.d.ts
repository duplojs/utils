import type { TheTime } from "../types";
export declare function lessThanTime<GenericValue extends TheTime>(threshold: TheTime): (input: GenericValue) => boolean;
export declare function lessThanTime<GenericValue extends TheTime>(input: GenericValue, threshold: TheTime): boolean;
