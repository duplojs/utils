import { type GetConstraint } from "../base";
import * as DDataParser from "../../../dataParser";
import { type OnlyLiteralNumber } from "../../../common";
/**
 * Constraint handler that validates an email string.
 * 
 * **Supported call styles:**
 * - Classic: `Email.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes with an email format.
 * 
 * ```ts
 * const result = C.Email.create("hello@duplojs.dev");
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"email", "hello@duplojs.dev">>
 * }
 * 
 * const email = C.Email.createOrThrow("a@b.com");
 * // email: C.ConstrainedType<"email", "a@b.com">
 * 
 * C.Email.is(email); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const Email: import("..").ConstraintHandler<"email", string, readonly [DDataParser.DataParserCheckerEmail], never>;
export type Email = GetConstraint<typeof Email>;
/**
 * Constraint handler that validates a URL string.
 * 
 * **Supported call styles:**
 * - Classic: `Url.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes with a URL format.
 * 
 * ```ts
 * const result = C.Url.create("https://duplojs.dev");
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"url", "https://duplojs.dev">>
 * }
 * 
 * const url = C.Url.createOrThrow("https://example.com");
 * // url: C.ConstrainedType<"url", "https://example.com">
 * 
 * C.Url.is(url); // type guard
 * 
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const Url: import("..").ConstraintHandler<"url", string, readonly [DDataParser.DataParserCheckerUrl], never>;
export type Url = GetConstraint<typeof Url>;
/**
 * Constraint factory that validates strings with a minimum length.
 * 
 * **Supported call styles:**
 * - Classic: `StringMin(min)` -> returns a constraint handler
 * 
 * Creates a constraint handler for `C.String` that enforces a length greater than or equal to `min`. Use it to validate inputs and to constrain NewTypes with a minimum length requirement.
 * 
 * ```ts
 * const UsernameMin = C.StringMin(3);
 * 
 * const result = UsernameMin.create("Ada");
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"string-min-3", "Ada">>
 * }
 * 
 * const username = UsernameMin.createOrThrow("Eve");
 * // username: C.ConstrainedType<"string-min-3", "Eve">
 * 
 * UsernameMin.is(username); // type guard
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare function StringMin<GenericValue extends number>(value: GenericValue & OnlyLiteralNumber<GenericValue>): import("..").ConstraintHandler<`string-min-${GenericValue & OnlyLiteralNumber<GenericValue>}`, string, readonly [DDataParser.DataParserCheckerStringMin], never>;
export type StringMin<GenericValue extends number> = GetConstraint<ReturnType<typeof StringMin<GenericValue>>>;
/**
 * Constraint factory that validates strings with a maximum length.
 * 
 * **Supported call styles:**
 * - Classic: `StringMax(max)` -> returns a constraint handler
 * 
 * Creates a constraint handler for `C.String` that enforces a length less than or equal to `max`. Use it to validate inputs and to constrain NewTypes with a maximum length requirement.
 * 
 * ```ts
 * const TitleMax = C.StringMax(10);
 * 
 * const result = TitleMax.create("Hello");
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"string-max-10", "Hello">>
 * }
 * 
 * const title = TitleMax.createOrThrow("World");
 * // title: C.ConstrainedType<"string-max-10", "World">
 * 
 * TitleMax.is(title); // type guard
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare function StringMax<GenericValue extends number>(value: GenericValue & OnlyLiteralNumber<GenericValue>): import("..").ConstraintHandler<`string-max-${GenericValue & OnlyLiteralNumber<GenericValue>}`, string, readonly [DDataParser.DataParserCheckerStringMax], never>;
export type StringMax<GenericValue extends number> = GetConstraint<ReturnType<typeof StringMax<GenericValue>>>;
