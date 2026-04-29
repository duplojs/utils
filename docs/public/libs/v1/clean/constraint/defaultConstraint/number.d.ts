import { type ConstraintHandler, type GetConstraint } from "../base";
import * as DDataParser from "../../../dataParser";
import { type OnlyLiteralNumber } from "../../../common";
/**
 * Constraint handler that validates integer numbers.
 * 
 * **Supported call styles:**
 * - Classic: `Int.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes to integers.
 * 
 * ```ts
 * const result = C.Int.create(12);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"int", 12>>
 * }
 * 
 * const value = C.Int.createOrThrow(7);
 * // value: C.ConstrainedType<"int", 7>
 * 
 * C.Int.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const Int: ConstraintHandler<"int", number, readonly [DDataParser.DataParserCheckerInt], never>;
export type Int = GetConstraint<typeof Int>;
/**
 * Constraint handler that validates strictly positive numbers (>= 1).
 * 
 * **Supported call styles:**
 * - Classic: `Positive.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes to positive numbers.
 * 
 * ```ts
 * const result = C.Positive.create(4);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"positive", 4>>
 * }
 * 
 * const value = C.Positive.createOrThrow(10);
 * // value: C.ConstrainedType<"positive", 10>
 * 
 * C.Positive.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const Positive: ConstraintHandler<"positive", number, readonly [DDataParser.DataParserCheckerNumberMin], never>;
export type Positive = GetConstraint<typeof Positive>;
/**
 * Constraint handler that validates strictly positive numbers (> 0).
 * 
 * **Supported call styles:**
 * - Classic: `StrictPositive.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes to numbers strictly greater than zero.
 * 
 * ```ts
 * const result = C.StrictPositive.create(4);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"strict-positive", 4>>
 * }
 * 
 * const value = C.StrictPositive.createOrThrow(10);
 * // value: C.ConstrainedType<"strict-positive", 10>
 * 
 * C.StrictPositive.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints#strictpositive
 * 
 * @namespace C
 * 
 */
export declare const StrictPositive: ConstraintHandler<"strict-positive", number, readonly [DDataParser.DataParserCheckerNumberMin], never>;
export type StrictPositive = GetConstraint<typeof StrictPositive>;
/**
 * Constraint handler that validates strictly negative numbers (<= -1).
 * 
 * **Supported call styles:**
 * - Classic: `Negative.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes to negative numbers.
 * 
 * ```ts
 * const result = C.Negative.create(-4);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"negative", -4>>
 * }
 * 
 * const value = C.Negative.createOrThrow(-10);
 * // value: C.ConstrainedType<"negative", -10>
 * 
 * C.Negative.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const Negative: ConstraintHandler<"negative", number, readonly [DDataParser.DataParserCheckerNumberMax], never>;
export type Negative = GetConstraint<typeof Negative>;
/**
 * Constraint handler that validates strictly negative numbers (< 0).
 * 
 * **Supported call styles:**
 * - Classic: `StrictNegative.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes to numbers strictly less than zero.
 * 
 * ```ts
 * const result = C.StrictNegative.create(-4);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"strict-negative", -4>>
 * }
 * 
 * const value = C.StrictNegative.createOrThrow(-10);
 * // value: C.ConstrainedType<"strict-negative", -10>
 * 
 * C.StrictNegative.is(value); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints#strictnegative
 * 
 * @namespace C
 * 
 */
export declare const StrictNegative: ConstraintHandler<"strict-negative", number, readonly [DDataParser.DataParserCheckerNumberMax], never>;
export type StrictNegative = GetConstraint<typeof StrictNegative>;
export type NumberMinHandlerInternal<GenericValue extends number = number> = Extract<ConstraintHandler<`number-min-${GenericValue}`, number, readonly [DDataParser.DataParserCheckerNumberMin], never>, any>;
export type NumberMinInternal<GenericValue extends number = number> = GetConstraint<NumberMinHandlerInternal<GenericValue>>;
/**
 * Constraint factory that validates numbers greater than or equal to a minimum.
 * 
 * **Supported call styles:**
 * - Classic: `NumberMin(min)` -> returns a constraint handler
 * 
 * Creates a constraint handler for `C.Number` that enforces a value greater than or equal to `min`. Use it to validate inputs and to constrain NewTypes with a minimum value requirement.
 * 
 * ```ts
 * const AdultMin = C.NumberMin(18);
 * 
 * const result = AdultMin.create(18);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"number-min-18", 18>>
 * }
 * 
 * const age = AdultMin.createOrThrow(20);
 * // age: C.ConstrainedType<"number-min-18", 20>
 * 
 * AdultMin.is(age); // type guard
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare function NumberMin<GenericValue extends number>(value: GenericValue & OnlyLiteralNumber<GenericValue>): NumberMinHandlerInternal<GenericValue>;
export type NumberMin<GenericValue extends number> = GetConstraint<ReturnType<typeof NumberMin<GenericValue>>>;
export type NumberMaxHandlerInternal<GenericValue extends number = number> = Extract<ConstraintHandler<`number-max-${GenericValue}`, number, readonly [DDataParser.DataParserCheckerNumberMax], never>, any>;
export type NumberMaxInternal<GenericValue extends number = number> = GetConstraint<NumberMaxHandlerInternal<GenericValue>>;
/**
 * Constraint factory that validates numbers less than or equal to a maximum.
 * 
 * **Supported call styles:**
 * - Classic: `NumberMax(max)` -> returns a constraint handler
 * 
 * Creates a constraint handler for `C.Number` that enforces a value less than or equal to `max`. Use it to validate inputs and to constrain NewTypes with a maximum value requirement.
 * 
 * ```ts
 * const PercentMax = C.NumberMax(100);
 * 
 * const result = PercentMax.create(100);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"number-max-100", 100>>
 * }
 * 
 * const value = PercentMax.createOrThrow(80);
 * // value: C.ConstrainedType<"number-max-100", 80>
 * 
 * PercentMax.is(value); // type guard
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare function NumberMax<GenericValue extends number>(value: GenericValue & OnlyLiteralNumber<GenericValue>): NumberMaxHandlerInternal<GenericValue>;
export type NumberMax<GenericValue extends number> = GetConstraint<ReturnType<typeof NumberMax<GenericValue>>>;
