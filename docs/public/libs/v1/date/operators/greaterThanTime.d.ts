import type { TheTime } from "../types";
export declare function greaterThanTime<GenericValue extends TheTime>(threshold: TheTime): (input: GenericValue) => boolean;
export declare function greaterThanTime<GenericValue extends TheTime>(input: GenericValue, threshold: TheTime): boolean;
