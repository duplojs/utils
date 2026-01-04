/**
 * Gets the length of an array.
 * 
 * Signature: `length(array)` → returns the length
 * 
 * The input array is not mutated.
 * 

 * ```ts
 * A.length([1, 2, 3]); // 3
 * 
 * A.length(<const>["alpha", "beta"]); // 2
 * 
 * A.length([]); // 0
 * ```
 * 
 * @remarks
 * - Tuple inputs preserve their literal length
 * 
 * @see [`A.lengthEqual`](https://utils.duplojs.dev/en/v1/api/array/lengthEqual) For length predicates
 * @see https://utils.duplojs.dev/en/v1/api/array/length
 * 
 * @namespace A
 * 
 */
export declare function length<GenericInput extends readonly unknown[]>(input: GenericInput): GenericInput["length"];
