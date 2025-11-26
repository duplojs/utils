import type { TheDate } from "../types";
export declare function greater<GenericValue extends TheDate>(threshold: TheDate): (input: GenericValue) => boolean;
export declare function greater<GenericValue extends TheDate>(input: GenericValue, threshold: TheDate): boolean;
