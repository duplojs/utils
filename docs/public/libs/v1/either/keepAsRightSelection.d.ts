import { type GetKindValue, type Kind, type Unwrap } from "../common";
import { informationKind } from "./kind";
import { type GetPropsWithValue, type ForbiddenKey } from "../object";
import { type Left } from "./left";
import { type Right } from "./right";
type Either = Right | Left;
type ForbiddenMoreKey<GenericInput extends unknown, GenericSelector extends Record<string, boolean>> = ForbiddenKey<GenericSelector, Extract<Exclude<keyof GenericSelector, GetKindValue<typeof informationKind, Extract<GenericInput, Either>>>, string>>;
/**
 * Keeps selected `Either` informations on the `Right` side according to an exhaustive selector. Selected `Left` values are converted to `Right`; unselected `Right` values are converted to `Left`.
 * 
 * **Supported call styles:**
 * - Classic: `keepAsRightSelection(input, selector)` where `selector` maps every possible information to `true` or `false`
 * - Curried: `keepAsRightSelection(selector)` returns a function waiting for the input, mainly for `pipe`
 * 
 * Use this function when every possible information must be explicitly classified as right-worthy or not. The selector is exhaustive: every information carried by the input union must be present.
 * 
 * ```ts
 * const payment = E.left("payment.accepted", 120) as
 * 	| E.Left<"payment.accepted", 120>
 * 	| E.Right<"payment.rejected", "insufficient funds">;
 * 
 * const selectedPayment = E.keepAsRightSelection(payment, {
 * 	"payment.accepted": true,
 * 	"payment.rejected": false,
 * });
 * 
 * type selectedPaymentCheck = ExpectType<
 * 	typeof selectedPayment,
 * 	| E.Right<"payment.accepted", 120>
 * 	| E.Left<"payment.rejected", "insufficient funds">,
 * 	"strict"
 * >;
 * 
 * const shouldKeepAsRight = Boolean(1);
 * 
 * const maybeSelectedPayment = E.keepAsRightSelection(payment, {
 * 	"payment.accepted": shouldKeepAsRight,
 * 	"payment.rejected": false,
 * });
 * 
 * type maybeSelectedPaymentCheck = ExpectType<
 * 	typeof maybeSelectedPayment,
 * 	| E.Right<"payment.accepted", 120>
 * 	| E.Left<"payment.rejected", "insufficient funds">,
 * 	"strict"
 * >;
 * 
 * const normalizedPayment = pipe(
 * 	payment,
 * 	E.keepAsRightSelection({
 * 		"payment.accepted": true,
 * 		"payment.rejected": true,
 * 	}),
 * );
 * 
 * type normalizedPaymentCheck = ExpectType<
 * 	typeof normalizedPayment,
 * 	| E.Right<"payment.accepted", 120>
 * 	| E.Right<"payment.rejected", "insufficient funds">,
 * 	"strict"
 * >;
 * ```
 * 
 * @remarks
 * - A selector value typed as `boolean` is treated as maybe selected in the return type.
 * - At runtime, only `true` keeps or converts the value to `Right`; `false` keeps or converts it to `Left`.
 * 
 * @see [`E.keepAsRightByInformation`](https://utils.duplojs.dev/en/v1/api/either/keepAsRightByInformation)
 * @see [`E.unwrapSelection`](https://utils.duplojs.dev/en/v1/api/either/unwrapSelection)
 * @see https://utils.duplojs.dev/en/v1/api/either/keepAsRightSelection
 * 
 * @namespace E
 * 
 */
export declare function keepAsRightSelection<GenericInput extends unknown, const GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>>(selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>): (input: GenericInput) => GenericInput extends Either ? GenericInput extends Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true> | GetPropsWithValue<GenericSelector, boolean>, string>> ? GenericInput extends Right ? GenericInput : Right<GetKindValue<typeof informationKind, GenericInput>, Unwrap<GenericInput>> : Left<GetKindValue<typeof informationKind, GenericInput>, Unwrap<GenericInput>> : GenericInput;
export declare function keepAsRightSelection<GenericInput extends unknown, const GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>>(input: GenericInput, selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>): GenericInput extends Either ? GenericInput extends Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true> | GetPropsWithValue<GenericSelector, boolean>, string>> ? GenericInput extends Right ? GenericInput : Right<GetKindValue<typeof informationKind, GenericInput>, Unwrap<GenericInput>> : Left<GetKindValue<typeof informationKind, GenericInput>, Unwrap<GenericInput>> : GenericInput;
export {};
