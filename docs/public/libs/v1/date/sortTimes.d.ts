import { type SortType } from "../common";
import { type TheTime } from "./types";
export declare function sortTimes<GenericArray extends readonly TheTime[]>(type: SortType): (array: GenericArray) => TheTime[];
export declare function sortTimes<GenericArray extends readonly TheTime[]>(array: GenericArray, type: SortType): TheTime[];
