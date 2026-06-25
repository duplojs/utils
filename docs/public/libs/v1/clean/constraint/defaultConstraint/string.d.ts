import { type ConstraintHandler, type GetConstraint } from "../base";
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
export declare const Email: ConstraintHandler<"email", `${string}@${string}.${string}`, readonly [DDataParser.DataParserCheckerEmail], string>;
export type Email = GetConstraint<typeof Email>;
export declare const Uuid: ConstraintHandler<"uuid", string, readonly [DDataParser.DataParserCheckerUuid], never>;
export type Uuid = GetConstraint<typeof Uuid>;
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
export declare const Url: ConstraintHandler<"url", string, readonly [DDataParser.DataParserCheckerUrl], never>;
export type Url = GetConstraint<typeof Url>;
export type StringMinHandlerInternal<GenericValue extends number = number> = Extract<ConstraintHandler<`string-min-${GenericValue}`, string, readonly [DDataParser.DataParserCheckerStringMin], never>, any>;
export type StringMinInternal<GenericValue extends number = number> = GetConstraint<StringMinHandlerInternal<GenericValue>>;
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
export declare function StringMin<GenericValue extends number>(value: GenericValue & OnlyLiteralNumber<GenericValue>): StringMinHandlerInternal<GenericValue>;
export type StringMin<GenericValue extends number> = GetConstraint<ReturnType<typeof StringMin<GenericValue>>>;
export type StringMaxHandlerInternal<GenericValue extends number = number> = Extract<ConstraintHandler<`string-max-${GenericValue}`, string, readonly [DDataParser.DataParserCheckerStringMax], never>, any>;
export type StringMaxInternal<GenericValue extends number = number> = GetConstraint<StringMaxHandlerInternal<GenericValue>>;
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
export declare function StringMax<GenericValue extends number>(value: GenericValue & OnlyLiteralNumber<GenericValue>): StringMaxHandlerInternal<GenericValue>;
export type StringMax<GenericValue extends number> = GetConstraint<ReturnType<typeof StringMax<GenericValue>>>;
/**
 * Constraint handler that validates non-empty strings without whitespace characters.
 * 
 * **Supported call styles:**
 * - Classic: `NoBlank.create(value)` -> returns Either
 * 
 * Use it as a reusable rule to validate inputs and to constrain NewTypes that must reject blank characters, such as slugs, identifiers, or compact tokens.
 * 
 * ```ts
 * const result = C.NoBlank.create("user-name");
 * 
 * if (E.isRight(result)) {
 * 	// result: E.Right<"createConstrainedType", C.ConstrainedType<"no-blank", "user-name">>
 * }
 * 
 * const token = C.NoBlank.createOrThrow("alpha-123");
 * // token: C.ConstrainedType<"no-blank", "alpha-123">
 * 
 * C.NoBlank.is(token); // type guard
 * 
 * const rejected = C.NoBlank.create("hello world");
 * 
 * if (E.isLeft(rejected)) {
 * 	// The value contains a whitespace character.
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/clean/constraints
 * 
 * @namespace C
 * 
 */
export declare const NoBlank: ConstraintHandler<"no-blank", string, readonly [DDataParser.DataParserCheckerRegex], never>;
export type NoBlank = GetConstraint<typeof NoBlank>;
