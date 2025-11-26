import type { TheDate } from "../types";
export declare function between<GenericValue extends TheDate>(greater: TheDate, less: TheDate): (input: GenericValue) => boolean;
export declare function between<GenericValue extends TheDate>(input: GenericValue, greater: TheDate, less: TheDate): boolean;
