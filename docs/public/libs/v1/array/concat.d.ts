/**
 * Concatenates arrays into a new array.
 * 
 * **Supported call styles:**
 * - Classic: `concat(array, elements, ...elementsRest)` → returns a new array
 * - Curried: `concat(elements)` → returns a function waiting for the array
 * 
 * All arrays are concatenated in order.
 * The input array is not mutated.
 * 
 * ```ts
 * A.concat(["alpha"], ["beta"], ["gamma"]); // ["alpha", "beta", "gamma"]
 * 
 * pipe(
 * 	["x"],
 * 	A.concat(["y", "z"]),
 * ); // ["x", "y", "z"]
 * ```
 * 
 * @remarks
 * - Classic style supports concatenating multiple arrays via rest parameters
 * - Curried style concatenates only two arrays (`elements` into `array`)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/array/concat
 * 
 * @namespace A
 * 
 */
export declare function concat<GenericFirstArray extends readonly unknown[], GenericSecondArray extends readonly unknown[]>(elements: GenericSecondArray): (array: GenericFirstArray) => (GenericFirstArray[number] | GenericSecondArray[number])[];
export declare function concat<GenericFirstArray extends readonly unknown[], GenericSecondArray extends readonly unknown[], GenericRest extends readonly unknown[][]>(array: GenericFirstArray, elements: GenericSecondArray, ...elementsRest: GenericRest): (GenericFirstArray[number] | GenericSecondArray[number] | GenericRest[number][number])[];
