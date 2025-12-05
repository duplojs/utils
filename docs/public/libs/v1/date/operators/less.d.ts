import type { TheDate } from "../types";
export declare function less<GenericValue extends TheDate>(threshold: TheDate): (input: GenericValue) => boolean;
export declare function less<GenericValue extends TheDate>(input: GenericValue, threshold: TheDate): boolean;
