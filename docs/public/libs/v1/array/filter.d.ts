interface ArrayFilterParams<GenericInputArray extends readonly unknown[]> {
    index: number;
    self: GenericInputArray;
}
/**
 * Filters an array by a predicate, with classic and curried styles.
 * 
 * **Supported call styles:**
 * - Classic: `filter(array, predicate)` → returns a new array
 * - Curried: `filter(predicate)` → returns a function waiting for the array
 * - Classic predicate: `filter(array, isType)` → narrows item types
 * - Curried predicate: `filter(isType)` → narrows item types
 * 
 * The predicate receives `(item, { index, self })`.
 * The input array is not mutated.
 * 
 * ```ts
 * A.filter(
 * 	[1, 2, 3, 4],
 * 	(value) => value > 2,
 * ); // [3, 4]
 * 
 * pipe(
 * 	<const>[1, "alpha", null],
 * 	A.filter(isType("string")),
 * ); // "alpha"[]
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the output element type
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array/filter
 * 
 * @namespace A
 * 
 */
export declare function filter<GenericInput extends readonly unknown[], GenericOutput extends GenericInput[number]>(predicate: (item: GenericInput[number], params: ArrayFilterParams<GenericInput>) => item is GenericOutput): (input: GenericInput) => GenericOutput[];
export declare function filter<GenericInput extends readonly unknown[], GenericOutput extends GenericInput[number]>(input: GenericInput, predicate: (item: GenericInput[number], params: ArrayFilterParams<GenericInput>) => item is GenericOutput): GenericOutput[];
export declare function filter<GenericInput extends readonly unknown[]>(predicate: (item: GenericInput[number], params: ArrayFilterParams<GenericInput>) => boolean): (input: GenericInput) => GenericInput[number][];
export declare function filter<GenericInput extends readonly unknown[]>(input: GenericInput, predicate: (item: GenericInput[number], params: ArrayFilterParams<GenericInput>) => boolean): GenericInput[number][];
export {};
