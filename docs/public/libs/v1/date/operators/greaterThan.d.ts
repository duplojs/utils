import type { TheDate } from "../types";
export declare function greaterThan<GenericValue extends TheDate>(threshold: TheDate): (input: GenericValue) => boolean;
export declare function greaterThan<GenericValue extends TheDate>(input: GenericValue, threshold: TheDate): boolean;
