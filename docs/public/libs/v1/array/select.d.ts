import { type AnyValue } from "../common";
export interface ArraySelectSelect<GenericOutput extends unknown = unknown> {
    "-select": GenericOutput;
}
export interface ArraySelectSkip {
    "-skip": null;
}
interface ArraySelectParams<GenericInputArray extends readonly unknown[]> {
    element: GenericInputArray[number];
    index: number;
    self: GenericInputArray;
    skip(): ArraySelectSkip;
    select<GenericOutput extends AnyValue = AnyValue>(output: GenericOutput): ArraySelectSelect<GenericOutput>;
}
export declare const selectTools: Pick<ArraySelectParams<any>, "skip" | "select">;
/**
 * Builds a new array by selecting or skipping elements.
 * 
 * **Supported call styles:**
 * - Classic: `select(array, theFunction)` → returns a new array
 * - Curried: `select(theFunction)` → returns a function waiting for the array
 * 
 * The function receives `{ element, index, self, select, skip }`.
 * Use `select(value)` to keep a value or `skip()` to ignore it.
 * The input array is not mutated.
 * 

 * ```ts
 * A.select(
 * 	[1, 2, 3],
 * 	({ element, select }) => select(element * 2),
 * ); // [2, 4, 6]
 * 
 * A.select(
 * 	[1, 2, 3],
 * 	({ element, skip, select }) => element > 1 ? select(element) : skip(),
 * ); // [2, 3]
 * 
 * pipe(
 * 	["alpha", "beta"],
 * 	A.select(({ index, select }) => select(index)),
 * ); // [0, 1]
 * 
 * ```
 * 
 * @remarks
 * - This is similar to a combined `map` + `filter`
 * 
 * @see [`A.map`](https://utils.duplojs.dev/en/v1/api/array/map) For mapping elements
 * @see [`A.filter`](https://utils.duplojs.dev/en/v1/api/array/filter) For filtering elements
 * @see https://utils.duplojs.dev/en/v1/api/array/select
 * 
 * @namespace A
 * 
 */
export declare function select<GenericInput extends readonly unknown[], GenericSelect extends ArraySelectSelect>(theFunction: (params: ArraySelectParams<GenericInput>) => GenericSelect | ArraySelectSkip): (input: GenericInput) => GenericSelect["-select"][];
export declare function select<GenericInput extends readonly unknown[], GenericSelect extends ArraySelectSelect>(input: GenericInput, theFunction: (params: ArraySelectParams<GenericInput>) => GenericSelect | ArraySelectSkip): GenericSelect["-select"][];
export {};
