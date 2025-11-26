import type { TheDate } from "../types";
export declare function lessThan<GenericValue extends TheDate>(threshold: TheDate): (input: GenericValue) => boolean;
export declare function lessThan<GenericValue extends TheDate>(input: GenericValue, threshold: TheDate): boolean;
