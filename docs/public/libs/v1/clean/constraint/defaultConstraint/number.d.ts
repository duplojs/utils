import { type GetConstraint } from "../base";
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
export declare const Int: import("..").ConstraintHandler<"int", number, readonly [DDataParser.DataParserCheckerInt], never>;
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
export declare const Positive: import("..").ConstraintHandler<"positive", number, readonly [DDataParser.DataParserCheckerNumberMin], never>;
export type Positive = GetConstraint<typeof Positive>;
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
export declare const Negative: import("..").ConstraintHandler<"negative", number, readonly [DDataParser.DataParserCheckerNumberMax], never>;
export type Negative = GetConstraint<typeof Negative>;
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
export declare function NumberMin<GenericValue extends number>(value: GenericValue & OnlyLiteralNumber<GenericValue>): import("..").ConstraintHandler<`number-min-${GenericValue & OnlyLiteralNumber<GenericValue>}`, number, readonly [DDataParser.DataParserCheckerNumberMin], never>;
export type NumberMin<GenericValue extends number> = ReturnType<typeof NumberMin<GenericValue>>;
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
export declare function NumberMax<GenericValue extends number>(value: GenericValue & OnlyLiteralNumber<GenericValue>): import("..").ConstraintHandler<`number-max-${GenericValue & OnlyLiteralNumber<GenericValue>}`, number, readonly [DDataParser.DataParserCheckerNumberMax], never>;
export type NumberMax<GenericValue extends number> = ReturnType<typeof NumberMax<GenericValue>>;
/**
 * Constraint handler that validates strictly positive integers (>= 1).
 * 
 * **Supported call styles:**
 * - Classic: `PositiveInt.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes to positive integer numbers.
 * 
 * ```ts
 * const result = C.PositiveInt.create(4);
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"positive-int", 4>>
 * }
 * 
 * const value = C.PositiveInt.createOrThrow(10);
 * // value: C.ConstrainedType<"positive-int", 10>
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
export declare const PositiveInt: import("..").ConstraintHandler<"positive-int", number, readonly [DDataParser.DataParserCheckerInt, DDataParser.DataParserCheckerNumberMin], never>;
export type PositiveInt = GetConstraint<typeof PositiveInt>;
