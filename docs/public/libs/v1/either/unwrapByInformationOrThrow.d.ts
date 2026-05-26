import { type Unwrap } from "../common/unwrap";
import { type Kind } from "../common/kind";
import { type Left } from "./left";
import { type Right } from "./right";
import { type informationKind } from "./kind";
import { type MaybeArray } from "../common";
declare const HasNotInformationError_base: import("../common").KindClass<import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsError/has-not-information-error", unknown>>, ErrorConstructor>;
export declare class HasNotInformationError extends HasNotInformationError_base {
    value: unknown;
    information: MaybeArray<string>;
    constructor(value: unknown, information: MaybeArray<string>);
}
type Either = Right | Left;
/**
 * Unwraps the payload of an `Either` when its literal information matches one expected information or one of multiple expected informations, and throws when no information matches.
 * 
 * **Supported call styles:**
 * - Classic: `unwrapByInformationOrThrow(input, information)` where `information` can be a string or an array of strings
 * - Curried: `unwrapByInformationOrThrow(information)` where `information` can be a string or an array of strings
 * 
 * Use this function when your code expects precise business information(s) and any other information must be treated as an exceptional path. If the information matches, the embedded value is returned. Otherwise, the function throws a `HasNotInformationError`.
 * 
 * ```ts
 * const amount = E.unwrapByInformationOrThrow(
 * 	E.right("payment.accepted", 120),
 * 	"payment.accepted",
 * );
 * // type: 120
 * 
 * const payload = E.unwrapByInformationOrThrow(
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
 * @remarks
 * - Throws `E.HasNotInformationError` when the input information does not match the expected literal(s).
 * 
 * @see [`E.hasInformation`](https://utils.duplojs.dev/en/v1/api/either/hasInformation)
 * @see [`E.whenHasInformation`](https://utils.duplojs.dev/en/v1/api/either/whenHasInformation)
 * @see https://utils.duplojs.dev/en/v1/api/either/unwrapByInformationOrThrow
 * 
 * @namespace E
 * 
 */
export declare function unwrapByInformationOrThrow<GenericInput extends unknown, const GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never)>(information: GenericInformation | GenericInformation[]): (input: GenericInput) => Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>>;
export declare function unwrapByInformationOrThrow<GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never)>(input: GenericInput, information: GenericInformation | GenericInformation[]): Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>>;
export {};
