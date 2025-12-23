import { type SortType } from "../common";
export declare function sort<GenericArray extends readonly string[]>(type: SortType): (array: GenericArray) => string[];
export declare function sort<GenericArray extends readonly string[]>(array: GenericArray, type: SortType): string[];
