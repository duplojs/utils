import { type Right } from "./right";
import { type Left } from "./left";
import { type Unwrap, type GetKindValue, type Kind } from "../common";
import { informationKind } from "./kind";
import { type ForbiddenKey, type GetPropsWithValue } from "../object";
type Either = Right | Left;
type ForbiddenMoreKey<GenericInput extends unknown, GenericSelector extends Record<string, boolean>> = ForbiddenKey<GenericSelector, Extract<Exclude<keyof GenericSelector, GetKindValue<typeof informationKind, Extract<GenericInput, Either>>>, string>>;
/**
 * Unwraps selected `Either` payloads according to an exhaustive information selector. Non-selected informations keep flowing as their original `Either`.
 * 
 * **Supported call styles:**
 * - Classic: `unwrapSelection(input, selector)` where `selector` maps every possible information to `true` or `false`
 * - Curried: `unwrapSelection(selector)` returns a function waiting for the input, mainly for `pipe`
 * 
 * Use this function when a flow may return several `Either` informations and only some of them should be unwrapped at this step. The selector is exhaustive: every information carried by the input union must be present.
 * 
 * ```ts
 * const payment = true
 * 	? E.right("payment.accepted", 120)
 * 	: E.left("payment.rejected", "insufficient funds");
 * 
 * const selected = E.unwrapSelection(payment, {
 * 	"payment.accepted": true,
 * 	"payment.rejected": false,
 * });
 * 
 * type selectedCheck = ExpectType<
 * 	typeof selected,
 * 	120 | E.Left<"payment.rejected", "insufficient funds">,
 * 	"strict"
 * >;
 * 
 * const shouldUnwrap = Boolean(1);
 * 
 * const maybeSelected = E.unwrapSelection(payment, {
 * 	"payment.accepted": shouldUnwrap,
 * 	"payment.rejected": false,
 * });
 * 
 * type maybeSelectedCheck = ExpectType<
 * 	typeof maybeSelected,
 * 	| 120
 * 	| E.Right<"payment.accepted", 120>
 * 	| E.Left<"payment.rejected", "insufficient funds">,
 * 	"strict"
 * >;
 * 
 * const piped = pipe(
 * 	payment,
 * 	E.unwrapSelection({
 * 		"payment.accepted": true,
 * 		"payment.rejected": true,
 * 	}),
 * );
 * 
 * type pipedCheck = ExpectType<
 * 	typeof piped,
 * 	120 | "insufficient funds",
 * 	"strict"
 * >;
 * ```
 * 
 * @remarks
 * - A selector value typed as `boolean` is treated as maybe selected in the return type.
 * - At runtime, only `true` unwraps; `false` keeps the original `Either`.
 * 
 * @see [`E.unwrapSelectionOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapSelectionOrThrow)
 * @see [`E.matchInformation`](https://utils.duplojs.dev/en/v1/api/either/matchInformation)
 * @see https://utils.duplojs.dev/en/v1/api/either/unwrapSelection
 * 
 * @namespace E
 * 
 */
export declare function unwrapSelection<GenericInput extends unknown, GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>>(selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>): (input: GenericInput) => (Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true> | GetPropsWithValue<GenericSelector, boolean>, string>>>> | Exclude<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true>, string>>>);
export declare function unwrapSelection<GenericInput extends unknown, const GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>>(input: GenericInput, selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>): (Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true> | GetPropsWithValue<GenericSelector, boolean>, string>>>> | Exclude<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true>, string>>>);
export {};
