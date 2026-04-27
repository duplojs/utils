import { type GetConstraints } from "../set";
/**
 * Constraint set handler that validates positive integer numbers (>= 0 and integer).
 * 
 * **Supported call styles:**
 * - Classic: `PositiveInt.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes to positive integer numbers.
 * 
 * ```ts
 * const result = C.PositiveInt.create(12);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstraintsSet", C.Primitive<12> & C.PositiveInt>
 * }
 * 
 * const value = C.PositiveInt.createOrThrow(0);
 * // value: C.Primitive<0> & C.PositiveInt
 * 
 * C.PositiveInt.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const PositiveInt: import("..").ConstraintsSetHandler<number, readonly [import("..").ConstraintHandler<"positive", number, readonly [import("../../../dataParser").DataParserCheckerNumberMin], never>, import("..").ConstraintHandler<"int", number, readonly [import("../../../dataParser").DataParserCheckerInt], never>], never>;
export type PositiveInt = GetConstraints<typeof PositiveInt>;
/**
 * Constraint set handler that validates strictly positive integer numbers (>= 1 and integer).
 * 
 * **Supported call styles:**
 * - Classic: `StrictPositiveInt.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes to strictly positive integer numbers.
 * 
 * ```ts
 * const result = C.StrictPositiveInt.create(12);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstraintsSet", C.Primitive<12> & C.StrictPositiveInt>
 * }
 * 
 * const value = C.StrictPositiveInt.createOrThrow(1);
 * // value: C.Primitive<1> & C.StrictPositiveInt
 * 
 * C.StrictPositiveInt.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const StrictPositiveInt: import("..").ConstraintsSetHandler<number, readonly [import("..").ConstraintHandler<"strict-positive", number, readonly [import("../../../dataParser").DataParserCheckerNumberMin], never>, import("..").ConstraintHandler<"int", number, readonly [import("../../../dataParser").DataParserCheckerInt], never>], never>;
export type StrictPositiveInt = GetConstraints<typeof StrictPositiveInt>;
/**
 * Constraint set handler that validates negative integer numbers (<= 0 and integer).
 * 
 * **Supported call styles:**
 * - Classic: `NegativeInt.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes to negative integer numbers.
 * 
 * ```ts
 * const result = C.NegativeInt.create(-12);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstraintsSet", C.Primitive<-12> & C.NegativeInt>
 * }
 * 
 * const value = C.NegativeInt.createOrThrow(0);
 * // value: C.Primitive<0> & C.NegativeInt
 * 
 * C.NegativeInt.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const NegativeInt: import("..").ConstraintsSetHandler<number, readonly [import("..").ConstraintHandler<"negative", number, readonly [import("../../../dataParser").DataParserCheckerNumberMax], never>, import("..").ConstraintHandler<"int", number, readonly [import("../../../dataParser").DataParserCheckerInt], never>], never>;
export type NegativeInt = GetConstraints<typeof NegativeInt>;
/**
 * Constraint set handler that validates strictly negative integer numbers (<= -1 and integer).
 * 
 * **Supported call styles:**
 * - Classic: `StrictNegativeInt.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes to strictly negative integer numbers.
 * 
 * ```ts
 * const result = C.StrictNegativeInt.create(-12);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstraintsSet", C.Primitive<-12> & C.StrictNegativeInt>
 * }
 * 
 * const value = C.StrictNegativeInt.createOrThrow(-1);
 * // value: C.Primitive<-1> & C.StrictNegativeInt
 * 
 * C.StrictNegativeInt.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const StrictNegativeInt: import("..").ConstraintsSetHandler<number, readonly [import("..").ConstraintHandler<"strict-negative", number, readonly [import("../../../dataParser").DataParserCheckerNumberMax], never>, import("..").ConstraintHandler<"int", number, readonly [import("../../../dataParser").DataParserCheckerInt], never>], never>;
export type StrictNegativeInt = GetConstraints<typeof StrictNegativeInt>;
/**
 * Constraint set handler that validates percent numbers (between 0 and 100 included).
 * 
 * **Supported call styles:**
 * - Classic: `Percent.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes to values in the percent range.
 * 
 * ```ts
 * const result = C.Percent.create(75);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstraintsSet", C.Primitive<75> & C.Percent>
 * }
 * 
 * const value = C.Percent.createOrThrow(100);
 * // value: C.Primitive<100> & C.Percent
 * 
 * C.Percent.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const Percent: import("..").ConstraintsSetHandler<number, readonly [import("..").ConstraintHandler<"number-min-0", number, readonly [import("../../../dataParser").DataParserCheckerNumberMin], never>, import("..").ConstraintHandler<"number-max-100", number, readonly [import("../../../dataParser").DataParserCheckerNumberMax], never>], never>;
export type Percent = GetConstraints<typeof Percent>;
