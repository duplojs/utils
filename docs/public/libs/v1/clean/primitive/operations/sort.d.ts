import { type Date, type Number, type String, type Time } from "../base";
import { type ToWrappedValue, type SortType } from "../../../common";
import * as DDate from "../../../date";
export declare function sort<GenericInput extends (readonly (Date | DDate.TheDate)[] | readonly (Number | number)[] | readonly (String | string)[] | readonly (Time | DDate.TheTime)[])>(type: SortType): (input: GenericInput) => ToWrappedValue<GenericInput[number]>[];
export declare function sort<GenericInput extends (readonly (Date | DDate.TheDate)[] | readonly (Number | number)[] | readonly (String | string)[] | readonly (Time | DDate.TheTime)[])>(input: GenericInput, type: SortType): ToWrappedValue<GenericInput[number]>[];
