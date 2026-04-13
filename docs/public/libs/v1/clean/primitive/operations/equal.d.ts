import { type Unwrap } from "../../../common";
import { type Primitive, type Primitives } from "../base";
/**
 * Compares two wrapped primitives (or a primitive and a raw value) with a type guard.
 * 
 * **Supported call styles:**
 * - Classic: `equal(input, value)` -> returns a boolean
 * - Curried: `equal(value)` -> returns a function waiting for the input
 * - Classic predicate: `equal(input, value)` -> narrows the primitive type
 * - Curried predicate: `equal(value)` -> narrows the primitive type
 * 
 * Use it to match business values while keeping type safety during checks and filtering.
 * 
 * ```ts
 * const status = C.String.createOrThrow("paid");
 * 
 * if (C.equal(status, "paid")) {
 * 	// status is C.Primitive<"paid">
 * }
 * 
 * const paid = C.String.createOrThrow("paid");
 * 
 * if (C.equal(status, paid)) {
 * 	// status is C.Primitive<"paid">
 * }
 * 
 * ```
 * 
 * @remarks
 * - Predicate overloads narrow the output type when the comparison succeeds.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/primitives/operators/equal
 * 
 * @namespace C
 * 
 */
export declare function equal<GenericInput extends Primitives | null, const GenericValue extends (Primitive<Unwrap<Exclude<GenericInput, null>>> | Unwrap<GenericInput>)>(value: GenericValue): (input: GenericInput) => input is (GenericInput & (GenericValue extends null ? GenericValue : Primitive<Unwrap<Exclude<GenericValue, null>>>));
export declare function equal<GenericInput extends Primitives | null, const GenericValue extends (Primitive<Unwrap<Exclude<GenericInput, null>>> | Unwrap<GenericInput>)>(input: GenericInput, value: GenericValue): input is (GenericInput & (GenericValue extends null ? GenericValue : Primitive<Unwrap<Exclude<GenericValue, null>>>));
