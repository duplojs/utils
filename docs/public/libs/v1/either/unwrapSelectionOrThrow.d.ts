import { type Unwrap, type GetKindValue, type Kind } from "../common";
import { type ForbiddenKey, type GetPropsWithValue } from "../object";
import { type Left } from "./left";
import { type Right } from "./right";
import { informationKind } from "./kind";
declare const HasNotSelectedInformationError_base: import("../common").KindClass<import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsError/has-not-selected-information-error", unknown>>, ErrorConstructor>;
export declare class HasNotSelectedInformationError extends HasNotSelectedInformationError_base {
    value: unknown;
    selector: Record<string, boolean>;
    constructor(value: unknown, selector: Record<string, boolean>);
}
type Either = Right | Left;
type ForbiddenMoreKey<GenericInput extends unknown, GenericSelector extends Record<string, boolean>> = ForbiddenKey<GenericSelector, Extract<Exclude<keyof GenericSelector, GetKindValue<typeof informationKind, Extract<GenericInput, Either>>>, string>>;
/**
 * Unwraps selected `Either` payloads according to an exhaustive information selector, and throws when the current information is not selected.
 * 
 * **Supported call styles:**
 * - Classic: `unwrapSelectionOrThrow(input, selector)` where `selector` maps every possible information to `true` or `false`
 * - Curried: `unwrapSelectionOrThrow(selector)` returns a function waiting for the input, mainly for `pipe`
 * 
 * Use this function when a flow may return several `Either` informations and only selected informations are valid at this point. The selector is exhaustive: every information carried by the input union must be present.
 * 
 * ```ts
 * const payment = true
 * 	? E.right("payment.accepted", 120)
 * 	: E.left("payment.rejected", "insufficient funds");
 * 
 * const payload = E.unwrapSelectionOrThrow(payment, {
 * 	"payment.accepted": true,
 * 	"payment.rejected": false,
 * });
 * 
 * type payloadCheck = ExpectType<
 * 	typeof payload,
 * 	120,
 * 	"strict"
 * >;
 * 
 * const shouldUnwrap = Boolean(1);
 * 
 * const maybePayload = E.unwrapSelectionOrThrow(payment, {
 * 	"payment.accepted": shouldUnwrap,
 * 	"payment.rejected": true,
 * });
 * 
 * type maybePayloadCheck = ExpectType<
 * 	typeof maybePayload,
 * 	120 | "insufficient funds",
 * 	"strict"
 * >;
 * 
 * const piped = pipe(
 * 	payment,
 * 	E.unwrapSelectionOrThrow({
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
 * - A selector value typed as `boolean` is included in the return type because a runtime `true` unwraps and a runtime `false` throws.
 * - Throws `E.HasNotSelectedInformationError` when the input has no information or the current information is not selected.
 * 
 * @see [`E.unwrapSelection`](https://utils.duplojs.dev/en/v1/api/either/unwrapSelection)
 * @see [`E.unwrapByInformationOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapByInformationOrThrow)
 * @see https://utils.duplojs.dev/en/v1/api/either/unwrapSelectionOrThrow
 * 
 * @namespace E
 * 
 */
export declare function unwrapSelectionOrThrow<GenericInput extends unknown, GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>>(selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>): (input: GenericInput) => Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true> | GetPropsWithValue<GenericSelector, boolean>, string>>>>;
export declare function unwrapSelectionOrThrow<GenericInput extends unknown, const GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>>(input: GenericInput, selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>): Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true> | GetPropsWithValue<GenericSelector, boolean>, string>>>>;
export {};
