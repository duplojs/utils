import { type OnlyLiteralNumber, type AnyTuple, type ComputedTypeError, type ForbiddenTupleWithUnknownLength } from "../common";
import { type MaxElements } from "./types";
import { type IsGreater } from "../number";
type CheckMaxLengthCast<GenericArray extends AnyTuple<unknown>, GenericLength extends number> = IsGreater<GenericLength, GenericArray["length"]> extends true ? unknown : ComputedTypeError<`Casting is impossible with ${GenericLength} because is less than array length ${GenericArray["length"]}.`>;
/**
 * Adds a `MaxElements` constraint to a finite tuple without checking it at runtime.
 * 
 * **Supported call styles:**
 * - Classic: `withMaxElements(array)` -> returns the same tuple with `MaxElements<array.length>`
 * - Classic with length: `withMaxElements(array, maxLength)` -> returns the same tuple with `MaxElements<maxLength>`
 * 
 * The input must be a tuple with a known finite length. When `maxLength` is provided, it must be a literal number greater than or equal to the tuple length. The maximum can also be inferred from a contextual type, which is useful when a consumer contract requires `MaxElements<N>`.
 * 
 * ```ts
 * const roles = ["admin", "client"] as const;
 * 
 * const limitedRoles = A.withMaxElements(roles);
 * 
 * type checkCurrentLength = ExpectType<
 * 	typeof limitedRoles,
 * 	readonly ["admin", "client"] & A.MaxElements<2>,
 * 	"strict"
 * >;
 * 
 * const widerRoles = A.withMaxElements(roles, 5);
 * 
 * type checkExplicitLength = ExpectType<
 * 	typeof widerRoles,
 * 	readonly ["admin", "client"] & A.MaxElements<5>,
 * 	"strict"
 * >;
 * 
 * const contractRoles = A.withMaxElements(roles) satisfies A.MaxElements<5>;
 * 
 * type checkContractLength = ExpectType<
 * 	typeof contractRoles,
 * 	readonly ["admin", "client"] & A.MaxElements<5>,
 * 	"strict"
 * >;
 * 
 * const pipeRoles = pipe(
 * 	["guest"],
 * 	A.withMaxElements,
 * );
 * 
 * type checkPipe = ExpectType<
 * 	typeof pipeRoles,
 * 	readonly ["guest"] & A.MaxElements<1>,
 * 	"strict"
 * >;
 * ```
 * 
 * @remarks
 * - The returned value is the original array reference.
 * - The function is type-level only and does not validate dynamic arrays at runtime.
 * - Use it when a finite tuple is already known and needs to satisfy a `MaxElements` contract.
 * 
 * @see [`A.maxElements`](https://utils.duplojs.dev/en/v1/api/array/maxElements) To validate dynamic arrays before adding the constraint
 * @see [`A.castMaxElements`](https://utils.duplojs.dev/en/v1/api/array/castMaxElements) To readapt an existing `MaxElements` constraint
 * @see https://utils.duplojs.dev/en/v1/api/array/withMaxElements
 * 
 * @namespace A
 * 
 */
export declare function withMaxElements<GenericArray extends AnyTuple<unknown>, GenericLength extends number = GenericArray["length"]>(array: (GenericArray & ForbiddenTupleWithUnknownLength<GenericArray> & CheckMaxLengthCast<GenericArray, GenericLength>), length?: (GenericLength & OnlyLiteralNumber<GenericLength>)): GenericArray & MaxElements<GenericLength>;
export {};
