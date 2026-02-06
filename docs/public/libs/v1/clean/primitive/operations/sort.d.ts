import { type Date, type Number, type String, type Time } from "../base";
import { type ToWrappedValue, type SortType } from "../../../common";
import * as DDate from "../../../date";
/**
 * Sorts arrays of wrapped primitives (`String`, `Number`, `Date`, `Time`).
 * 
 * **Supported call styles:**
 * - Classic: `sort(input, type)` → wrapped array
 * - Curried: `sort(type)` → function waiting for the input
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
 * 	D.create("2024-01-02"),
 * 	D.create("2024-01-01"),
 * ```
 * 
 * @remarks
 * - Supports mixed wrapped/raw values in the same primitive family.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/sort
 * 
 * @namespace C
 * 
 */
export declare function sort<GenericInput extends (readonly (Date | DDate.TheDate)[] | readonly (Number | number)[] | readonly (String | string)[] | readonly (Time | DDate.TheTime)[])>(type: SortType): (input: GenericInput) => ToWrappedValue<GenericInput[number]>[];
export declare function sort<GenericInput extends (readonly (Date | DDate.TheDate)[] | readonly (Number | number)[] | readonly (String | string)[] | readonly (Time | DDate.TheTime)[])>(input: GenericInput, type: SortType): ToWrappedValue<GenericInput[number]>[];
