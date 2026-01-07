import type { TheTime } from "../types";
export declare function betweenTime<GenericValue extends TheTime>(greater: TheTime, less: TheTime): (input: GenericValue) => boolean;
export declare function betweenTime<GenericValue extends TheTime>(input: GenericValue, greater: TheTime, less: TheTime): boolean;
