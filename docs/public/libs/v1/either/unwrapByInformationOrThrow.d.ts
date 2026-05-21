import { type Unwrap } from "../common/unwrap";
import { type Kind } from "../common/kind";
import { type Left } from "./left";
import { type Right } from "./right";
import { type informationKind } from "./kind";
declare const HasNotInformationError_base: import("../common/kindClass").KindClass<import("../common/kind").KindHandler<import("../common/kind").KindDefinition<"@DuplojsUtilsError/has-not-information-error", unknown>>, ErrorConstructor>;
export declare class HasNotInformationError extends HasNotInformationError_base {
    value: unknown;
    information: string;
    constructor(value: unknown, information: string);
}
type Either = Right | Left;
/**
 * Unwraps the payload of an `Either` when its literal information matches, and throws when the information does not match.
 * 
 * **Supported call styles:**
 * - Classic: `unwrapByInformationOrThrow(input, information)` → returns the unwrapped value
 * - Curried: `unwrapByInformationOrThrow(information)` → returns a function waiting for the input
 * 
 * Use this function when your code expects one precise business information and any other information must be treated as an exceptional path. If the information matches, the embedded value is returned. Otherwise, the function throws a `HasNotInformationError`.
 * 
 * ```ts
 * const amount = E.unwrapByInformationOrThrow(
 * 	E.right("payment.accepted", 120),
 * 	"payment.accepted",
 * );
 * // type: 120
 * 
 * const reason = E.unwrapByInformationOrThrow(
 * 	"payment.rejected",
 * )(
 * 	E.left("payment.rejected", "insufficient funds"),
 * );
 * // type: "insufficient funds"
 * 
 * const total = pipe(
 * 	E.result("invoice.total", 450),
 * 	E.unwrapByInformationOrThrow("invoice.total"),
 * );
 * // type: 450
 * ```
 * 
 * @remarks
 * - Throws `E.HasNotInformationError` when the input information does not match the expected literal.
 * 
 * @see [`E.hasInformation`](https://utils.duplojs.dev/en/v1/api/either/hasInformation)
 * @see [`E.whenHasInformation`](https://utils.duplojs.dev/en/v1/api/either/whenHasInformation)
 * @see https://utils.duplojs.dev/en/v1/api/either/unwrapByInformationOrThrow
 * 
 * @namespace E
 * 
 */
export declare function unwrapByInformationOrThrow<GenericInput extends unknown, const GenericInformation extends string>(information: GenericInformation): (input: GenericInput) => Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>>;
export declare function unwrapByInformationOrThrow<GenericInput extends unknown, GenericInformation extends (GenericInput extends Either ? ReturnType<typeof informationKind.getValue<GenericInput>> : never)>(input: GenericInput, information: GenericInformation): Unwrap<Extract<GenericInput, Kind<typeof informationKind.definition, GenericInformation>>>;
export {};
