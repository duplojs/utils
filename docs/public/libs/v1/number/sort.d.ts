import { type SortType } from "../common";
export declare function sort<GenericArray extends readonly number[]>(type: SortType): (array: GenericArray) => number[];
export declare function sort<GenericArray extends readonly number[]>(array: GenericArray, type: SortType): number[];
