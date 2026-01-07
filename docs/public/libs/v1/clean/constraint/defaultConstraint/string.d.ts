import { type GetConstraint } from "../base";
import * as DDataParser from "../../../dataParser";
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
 * 	// result: E.EitherRight<"createConstrainedType", C.ConstrainedType<"email", "hello@duplojs.dev">>
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
export declare const Email: import("..").ConstraintHandler<"email", string, readonly [DDataParser.DataParserCheckerEmail]>;
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
 * 	// result: E.EitherRight<"createConstrainedType", C.ConstrainedType<"url", "https://duplojs.dev">>
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
export declare const Url: import("..").ConstraintHandler<"url", string, readonly [DDataParser.DataParserCheckerUrl]>;
export type Url = GetConstraint<typeof Url>;
