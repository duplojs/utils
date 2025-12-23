import { type Date, type Number, type String } from "../base";
import { type SortType } from "../../../common";
import * as DDate from "../../../date";
export declare function sort(type: SortType): (input: readonly (Date | DDate.TheDate)[]) => Date[];
export declare function sort(input: readonly (Date | DDate.TheDate)[], type: SortType): Date[];
export declare function sort(type: SortType): (input: readonly (Number | number)[]) => Number[];
export declare function sort(input: readonly (Number | number)[], type: SortType): Number[];
export declare function sort(type: SortType): (input: readonly (String | string)[]) => String[];
export declare function sort(input: readonly (String | string)[], type: SortType): String[];
