import { type ToLargeEnsemble, type Unwrap } from "../../../common";
import { type Primitive, type Primitives, type Date, type Time } from "../base";
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
export declare function equal<GenericInput extends Primitives, GenericValue extends (GenericInput extends Date ? (Date | Unwrap<Date>) : GenericInput extends Time ? (Time | Unwrap<Time>) : (Primitive<ToLargeEnsemble<Unwrap<GenericInput>>> | ToLargeEnsemble<Unwrap<GenericInput>>))>(value: GenericValue): (input: GenericInput) => input is GenericInput & Primitive<Unwrap<GenericValue>>;
export declare function equal<GenericInput extends Primitives, GenericValue extends (GenericInput extends Date ? (Date | Unwrap<Date>) : GenericInput extends Time ? (Time | Unwrap<Time>) : (Primitive<ToLargeEnsemble<Unwrap<GenericInput>>> | ToLargeEnsemble<Unwrap<GenericInput>>))>(input: GenericInput, value: GenericValue): input is GenericInput & Primitive<Unwrap<GenericValue>>;
