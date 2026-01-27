import { type GetConstraint } from "../base";
import * as DDataParser from "../../../dataParser";
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
export declare const Int: import("..").ConstraintHandler<"int", number, readonly [DDataParser.DataParserCheckerInt]>;
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
export declare const Positive: import("..").ConstraintHandler<"positive", number, readonly [DDataParser.DataParserCheckerNumberMin]>;
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
export declare const Negative: import("..").ConstraintHandler<"negative", number, readonly [DDataParser.DataParserCheckerNumberMax]>;
export type Negative = GetConstraint<typeof Negative>;
