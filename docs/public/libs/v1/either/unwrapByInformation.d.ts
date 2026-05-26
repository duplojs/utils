import { type Unwrap } from "../common/unwrap";
import { type Kind } from "../common/kind";
import { type Left } from "./left";
import { type Right } from "./right";
import { type informationKind } from "./kind";
type Either = Right | Left;
/**
 * Unwraps the payload of an `Either` when its literal information matches one expected information or one of multiple expected informations. When no information matches, returns the original input unchanged.
 * 
 * **Supported call styles:**
 * - Classic: `unwrapByInformation(input, information)` where `information` can be a string or an array of strings
 * - Curried: `unwrapByInformation(information)` where `information` can be a string or an array of strings
 * 
 * Use this function when the non-matching path is not exceptional and should keep flowing with the original `Either` value.
 * 
 * ```ts
 * const acceptedAmount = E.unwrapByInformation(
 * 	E.right("payment.accepted", 120),
 * 	"payment.accepted",
 * );
 * // type: 120
 * 
 * const payload = E.unwrapByInformation(
 * 	true
 * 		? E.left("payment.rejected", "insufficient funds")
 * 		: E.left("payment.accepted", 120),
 * 	["payment.accepted", "payment.rejected"],
 * );
 * // type: 120 | "insufficient funds"
 * 
 * const total = pipe(
 * 	true
 * 		? E.result("invoice.total", 450)
 * 		: E.result("invoice.fallback", null),
 * 	E.unwrapByInformation(["invoice.total", "invoice.fallback"]),
 * );
 * // type: 450
 * 
 * ```
 * 
 * @see [`E.unwrapByInformationOrThrow`](https://utils.duplojs.dev/en/v1/api/either/unwrapByInformationOrThrow)
 * @see [`E.hasInformation`](https://utils.duplojs.dev/en/v1/api/either/hasInformation)
 * @see https://utils.duplojs.dev/en/v1/api/either/unwrapByInformation
 * 
 * @namespace E
 * 
 */
export declare function unwrapByInformation<GenericInput extends unknown, const GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never)>(information: GenericInformation | GenericInformation[]): (input: GenericInput) => GenericInput extends Kind<typeof informationKind.definition, GenericInformation> ? Unwrap<GenericInput> : GenericInput;
export declare function unwrapByInformation<GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never)>(input: GenericInput, information: GenericInformation | GenericInformation[]): GenericInput extends Kind<typeof informationKind.definition, GenericInformation> ? Unwrap<GenericInput> : GenericInput;
export {};
