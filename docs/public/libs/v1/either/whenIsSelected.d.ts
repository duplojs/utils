import { type Kind, type Unwrap, type GetKindValue } from "../common";
import { type Left } from "./left";
import { type Right } from "./right";
import { informationKind } from "./kind";
import { type ForbiddenKey, type GetPropsWithValue } from "../object";
type Either = Right | Left;
type ForbiddenMoreKey<GenericInput extends unknown, GenericSelector extends Record<string, boolean>> = ForbiddenKey<GenericSelector, Extract<Exclude<keyof GenericSelector, GetKindValue<typeof informationKind, Extract<GenericInput, Either>>>, string>>;
/**
 * Runs a callback on the unwrapped payloads selected by an exhaustive `Either` information selector.
 * 
 * **Supported call styles:**
 * - Classic: `whenIsSelected(input, selector, theFunction)` -> returns the callback result or the original input
 * - Curried: `whenIsSelected(selector, theFunction)` -> returns a function waiting for the input
 * 
 * The selector must map every possible information to `true` or `false`. A `true` entry unwraps the matching payload and passes it to the callback; a `false` entry forwards the original `Either` unchanged.
 * 
 * ```ts
 * const payment = true
 * 	? E.right("payment.accepted", 120 as const)
 * 	: E.left("payment.rejected", "insufficient funds" as const);
 * 
 * const formattedPayment = E.whenIsSelected(
 * 	payment,
 * 	{
 * 		"payment.accepted": true,
 * 		"payment.rejected": false,
 * 	},
 * 	(amount) => `paid:${amount}` as const,
 * );
 * 
 * type formattedPaymentCheck = ExpectType<
 * 	typeof formattedPayment,
 * 	"paid:120" | E.Left<"payment.rejected", "insufficient funds">,
 * 	"strict"
 * >;
 * 
 * const rejectedPayment = E.left(
 * 	"payment.rejected",
 * 	"insufficient funds" as const,
 * );
 * 
 * const unchangedPayment = E.whenIsSelected(
 * 	rejectedPayment,
 * 	{
 * 		"payment.rejected": false,
 * 	},
 * 	() => 0,
 * );
 * 
 * type unchangedPaymentCheck = ExpectType<
 * 	typeof unchangedPayment,
 * 	number | E.Left<"payment.rejected", "insufficient funds">,
 * 	"strict"
 * >;
 * 
 * const pipedPayment = pipe(
 * 	payment,
 * 	E.whenIsSelected(
 * 		{
 * 			"payment.accepted": true,
 * 			"payment.rejected": false,
 * 		},
 * 		(amount) => ({ amount }),
 * 	),
 * );
 * 
 * type pipedPaymentCheck = ExpectType<
 * 	typeof pipedPayment,
 * 	{ readonly amount: 120 } | E.Left<"payment.rejected", "insufficient funds">,
 * 	"strict"
 * >;
 * ```
 * 
 * @remarks A selector value typed as `boolean` keeps both the transformed and original `Either` branches in the return type. At runtime, only `true` executes the callback.
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/whenIsSelected
 * @see [`E.whenHasInformation`](https://utils.duplojs.dev/en/v1/api/either/whenHasInformation)
 * @see [`E.unwrapSelection`](https://utils.duplojs.dev/en/v1/api/either/unwrapSelection)
 * 
 * @namespace E
 * 
 */
export declare function whenIsSelected<GenericInput extends unknown, const GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>, const GenericOutput extends unknown>(selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>, theFunction: (value: Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true> | GetPropsWithValue<GenericSelector, boolean>, string>>>>) => GenericOutput): (input: GenericInput) => (GenericOutput | Exclude<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true>, string>>>);
export declare function whenIsSelected<GenericInput extends unknown, const GenericSelector extends Record<GetKindValue<typeof informationKind, Extract<GenericInput, Either>>, boolean>, const GenericOutput extends unknown>(input: GenericInput, selector: GenericSelector & ForbiddenMoreKey<GenericInput, GenericSelector>, theFunction: (value: Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true> | GetPropsWithValue<GenericSelector, boolean>, string>>>>) => GenericOutput): (GenericOutput | Exclude<GenericInput, Kind<typeof informationKind.definition, Extract<GetPropsWithValue<GenericSelector, true>, string>>>);
export {};
