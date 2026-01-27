import { type Kind } from "../../common/kind";
import { type WrappedValue } from "../../common/wrapValue";
import { informationKind } from "../kind";
export declare const rightKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/right", unknown>>;
/**
 * @deprecated use rightKind
 */
export declare const eitherRightKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/right", unknown>>;
type _Right<GenericInformation extends string = string, GenericValue extends unknown = unknown> = (Kind<typeof rightKind.definition> & Kind<typeof informationKind.definition, GenericInformation> & WrappedValue<GenericValue>);
export interface Right<GenericInformation extends string = string, GenericValue extends unknown = unknown> extends _Right<GenericInformation, GenericValue> {
}
/**
 * @deprecated use Right
 */
export type EitherRight<GenericInformation extends string = string, GenericValue extends unknown = unknown> = Right<GenericInformation, GenericValue>;
/**
 * Builds an Right by associating mandatory business information (literal string) and an optional payload. This is the basic brick to signal a contextualized success.
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
 * // type: E.Right< "coupon.applied", { readonly code: `SAVE${string}`; readonly percent: 15; } >
 * // | E.Left< "coupon.invalid", string >
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/right
 * 
 * @namespace E
 * 
 */
export declare function right<GenericInformation extends string, const GenericValue extends unknown = undefined>(information: GenericInformation, value?: GenericValue): Right<GenericInformation, GenericValue>;
export {};
