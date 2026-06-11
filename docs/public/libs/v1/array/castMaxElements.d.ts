import { type ComputedTypeError, type IsEqual } from "../common";
import { type MaxElements } from "./types";
import { type IsGreater } from "../number";
type CheckMaxLengthCast<GenericArray extends readonly unknown[] & MaxElements<number>, GenericLength extends number> = IsEqual<GenericLength, number> extends true ? ComputedTypeError<"Can not cast on non literal length."> : GenericArray extends MaxElements<infer InferredMaxLength> ? InferredMaxLength extends number ? IsEqual<GenericLength, InferredMaxLength> extends true ? unknown : IsGreater<GenericLength, InferredMaxLength> extends true ? unknown : ComputedTypeError<`Casting is impossible with ${GenericLength} because is less than ${InferredMaxLength}.`> : never : never;
/**
 * Readapts an existing `MaxElements` constraint to a less restrictive compatible maximum.
 * 
 * **Supported call styles:**
 * - Classic: `castMaxElements(array, maxLength)` -> returns the same array with an added `MaxElements` marker
 * - Curried: `castMaxElements(maxLength)` -> returns a function waiting for the array
 * 
 * The function does not check the array length at runtime. Use it only when the new maximum is already implied by an existing `MaxElements` constraint, usually after `maxElements` has narrowed the array. For example, `MaxElements<10>` can be readapted to `MaxElements<15>`.
 * 
 * ```ts
 * const values = ["alpha", "beta", "gamma"];
 * 
 * if (A.maxElements(values, 10)) {
 * 	const result = A.castMaxElements(values, 15);
 * 
 * 	type check = ExpectType<
 * 		typeof result,
 * 		string[] & A.MaxElements<10> & A.MaxElements<15>,
 * 		"strict"
 * 	>;
 * }
 * 
 * const pipeValues = ["alpha", "beta"];
 * 
 * if (A.maxElements(pipeValues, 8)) {
 * 	const result = pipe(
 * 		pipeValues,
 * 		A.castMaxElements(16),
 * 		A.castMaxElements(12),
 * 	);
 * 
 * 	type check = ExpectType<
 * 		typeof result,
 * 		string[] & A.MaxElements<8> & A.MaxElements<12> & A.MaxElements<16>,
 * 		"strict"
 * 	>;
 * ```
 * 
 * @remarks
 * - The returned value is the original array reference.
 * - TypeScript rejects casts from a larger maximum to a smaller maximum.
 * - The maximum must be a literal number.
 * 
 * @see [`A.maxElements`](https://utils.duplojs.dev/en/v1/api/array/maxElements) To create the initial `MaxElements` constraint
 * @see https://utils.duplojs.dev/en/v1/api/array/castMaxElements
 * 
 * @namespace A
 * 
 */
export declare function castMaxElements<GenericArray extends readonly unknown[] & MaxElements<number>, GenericLength extends number>(maxLength: GenericLength & CheckMaxLengthCast<GenericArray, GenericLength>): (array: GenericArray) => GenericArray & MaxElements<GenericLength>;
export declare function castMaxElements<GenericArray extends readonly unknown[] & MaxElements<number>, GenericLength extends number>(array: GenericArray, maxLength: GenericLength & CheckMaxLengthCast<GenericArray, GenericLength>): GenericArray & MaxElements<GenericLength>;
export {};
