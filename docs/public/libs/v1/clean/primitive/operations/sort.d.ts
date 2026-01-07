import { type Date, type Number, type String, type Time } from "../base";
import { type ToWrappedValue, type SortType } from "../../../common";
import * as DDate from "../../../date";
/**
 * Sorts an array of primitives (String, Number, Date, Time) in ascending or descending order.
 * 
 * **Supported call styles:**
 * - Classic: `sort(input, type)` -> returns a new array
 * - Curried: `sort(type)` -> returns a function waiting for the input
 * 
 * The output array contains wrapped primitives.
 * 
 * ```ts
 * const numbers = [
 * 	C.Number.createOrThrow(3),
 * 	1,
 * 	2,
 * ];
 * 
 * const asc = C.sort(numbers, "ASC");
 * // asc: C.Number[]
 * 
 * const desc = pipe(
 * 	numbers,
 * 	C.sort("DSC"),
 * );
 * // desc: C.Number[]
 * 
 * const dates = C.sort([
 * 	D.createTheDate(2),
 * 	D.createTheDate(1),
 * ], "ASC");
 * // dates: C.Date[]
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/sort
 * 
 * @namespace C
 * 
 */
export declare function sort<GenericInput extends (readonly (Date | DDate.TheDate)[] | readonly (Number | number)[] | readonly (String | string)[] | readonly (Time | DDate.TheTime)[])>(type: SortType): (input: GenericInput) => ToWrappedValue<GenericInput[number]>[];
export declare function sort<GenericInput extends (readonly (Date | DDate.TheDate)[] | readonly (Number | number)[] | readonly (String | string)[] | readonly (Time | DDate.TheTime)[])>(input: GenericInput, type: SortType): ToWrappedValue<GenericInput[number]>[];
