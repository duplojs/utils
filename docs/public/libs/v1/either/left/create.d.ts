import { type Kind } from "../../common/kind";
import { type WrappedValue } from "../../common/wrapValue";
import { informationKind } from "../kind";
export declare const leftKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/left", unknown>>;
/**
 * @deprecated use leftKind
 */
export declare const eitherLeftKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/left", unknown>>;
type _Left<GenericInformation extends string = string, GenericValue extends unknown = unknown> = (Kind<typeof leftKind.definition> & Kind<typeof informationKind.definition, GenericInformation> & WrappedValue<GenericValue>);
export interface Left<GenericInformation extends string = string, GenericValue extends unknown = unknown> extends _Left<GenericInformation, GenericValue> {
}
/**
 * @deprecated use Left
 */
export type EitherLeft<GenericInformation extends string = string, GenericValue extends unknown = unknown> = Left<GenericInformation, GenericValue>;
/**
 * Builds an Left by associating mandatory business information (literal string) with a value representing the error. This is the fundamental brick to signal a contextualized failure.
 * 
 * Signature: `left(information, value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = 0 as number;
 * 
 * const result = pipe(
 * 	input,
 * 	P.when(
 * 		N.greaterThan(0),
 * 		(value) => E.right("number.positive", value),
 * 	),
 * 	P.otherwise(
 * 		(value) => E.left("number.notPositive", value),
 * 	),
 * );
 * 
 * // type: E.Right<"number.positive", number> | E.Left<"number.notPositive", number>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/left
 * 
 * @namespace E
 * 
 */
export declare function left<GenericInformation extends string, const GenericValue extends unknown = undefined>(information: GenericInformation, value?: GenericValue): Left<GenericInformation, GenericValue>;
export {};
