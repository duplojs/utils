import { type SortType } from "../common";
import { type TheDate } from "./types";
export declare function sort<GenericArray extends readonly TheDate[]>(type: SortType): (array: GenericArray) => TheDate[];
export declare function sort<GenericArray extends readonly TheDate[]>(array: GenericArray, type: SortType): TheDate[];
