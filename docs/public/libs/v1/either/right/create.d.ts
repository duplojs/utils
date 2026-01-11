import { type Kind } from "../../common/kind";
import { type WrappedValue } from "../../common/wrapValue";
import { eitherInformationKind } from "../kind";
export declare const eitherRightKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/right", unknown>>;
type _EitherRight<GenericInformation extends string = string, GenericValue extends unknown = unknown> = (Kind<typeof eitherRightKind.definition> & Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue<GenericValue>);
export interface EitherRight<GenericInformation extends string = string, GenericValue extends unknown = unknown> extends _EitherRight<GenericInformation, GenericValue> {
}
/**
 * Builds an EitherRight by associating mandatory business information (literal string) and an optional payload. This is the basic brick to signal a contextualized success.
 * 
 * Signature: `right(information, value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "SAVE-15" as string;
 * 
 * const result = pipe(
 * 	input,
 * 	P.when(
 * 		S.startsWith("SAVE"),
 * 		(code) => E.right(
 * 			"coupon.applied",
 * 			{
 * 				code,
 * 				percent: 15,
 * 			},
 * 		),
 * 	),
 * 	P.otherwise(
 * 		(value) => E.left("coupon.invalid", value),
 * 	),
 * );
 * 
 * // type: E.EitherRight< "coupon.applied", { readonly code: `SAVE${string}`; readonly percent: 15; } >
 * // | E.EitherLeft< "coupon.invalid", string >
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/right
 * 
 * @namespace E
 * 
 */
export declare function right<GenericInformation extends string, const GenericValue extends unknown = undefined>(information: GenericInformation, value?: GenericValue): EitherRight<GenericInformation, GenericValue>;
export {};
