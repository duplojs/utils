import { type GetKindValue, type Kind, type Unwrap } from "../common";
import { informationKind } from "./kind";
import { type Left } from "./left";
import { type Right } from "./right";
type Either = Right | Left;
/**
 * Keeps only the `Either` values matching one information, or one of multiple informations, on the `Right` side. A matching `Left` is converted to `Right`; a non-matching `Right` is converted to `Left`.
 * 
 * **Supported call styles:**
 * - Classic: `keepAsRightByInformation(input, information)` where `information` can be a string or an array of strings
 * - Curried: `keepAsRightByInformation(information)` where `information` can be a string or an array of strings
 * 
 * Use this function when a pipeline must continue with selected informations as successful `Right` values and treat every other `Right` as a `Left`.
 * 
 * ```ts
 * const acceptedPayment = E.keepAsRightByInformation(
 * 	E.left("payment.accepted", 120),
 * 	"payment.accepted",
 * );
 * // type: Right<"payment.accepted", 120>
 * 
 * const rejectedPayment = E.keepAsRightByInformation(
 * 	E.right("payment.rejected", "insufficient funds") as
 * 		| E.Left<"payment.accepted", 120>
 * 		| E.Right<"payment.rejected", "insufficient funds">,
 * 	"payment.accepted",
 * );
 * // type: Left<"payment.rejected", "insufficient funds">
 * 
 * const payment = E.left("payment.accepted", 120) as
 * 	| E.Left<"payment.accepted", 120>
 * 	| E.Right<"payment.rejected", "insufficient funds">;
 * 
 * const normalizedPayment = pipe(
 * 	payment,
 * 	E.keepAsRightByInformation([
 * 		"payment.accepted",
 * 		"payment.rejected",
 * 	]),
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
 * @see [`E.keepAsRightSelection`](https://utils.duplojs.dev/en/v1/api/either/keepAsRightSelection)
 * @see [`E.unwrapByInformation`](https://utils.duplojs.dev/en/v1/api/either/unwrapByInformation)
 * @see https://utils.duplojs.dev/en/v1/api/either/keepAsRightByInformation
 * 
 * @namespace E
 * 
 */
export declare function keepAsRightByInformation<GenericInput extends unknown, const GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never)>(information: GenericInformation | GenericInformation[]): (input: GenericInput) => GenericInput extends Either ? GenericInput extends Kind<typeof informationKind.definition, GenericInformation> ? GenericInput extends Right ? GenericInput : Right<GetKindValue<typeof informationKind, GenericInput>, Unwrap<GenericInput>> : Left<GetKindValue<typeof informationKind, GenericInput>, Unwrap<GenericInput>> : GenericInput;
export declare function keepAsRightByInformation<GenericInput extends unknown, const GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never)>(input: GenericInput, information: GenericInformation | GenericInformation[]): GenericInput extends Either ? GenericInput extends Kind<typeof informationKind.definition, GenericInformation> ? GenericInput extends Right ? GenericInput : Right<GetKindValue<typeof informationKind, GenericInput>, Unwrap<GenericInput>> : Left<GetKindValue<typeof informationKind, GenericInput>, Unwrap<GenericInput>> : GenericInput;
export {};
