import { type Kind } from "../../common/kind";
import { type WrappedValue } from "../../common/wrapValue";
import { eitherInformationKind } from "../kind";
export declare const eitherLeftKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/left", unknown>>;
type _EitherLeft<GenericInformation extends string = string, GenericValue extends unknown = unknown> = (Kind<typeof eitherLeftKind.definition> & Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue<GenericValue>);
export interface EitherLeft<GenericInformation extends string = string, GenericValue extends unknown = unknown> extends _EitherLeft<GenericInformation, GenericValue> {
}
/**
 * Builds an EitherLeft by associating mandatory business information (literal string) with a value representing the error. This is the fundamental brick to signal a contextualized failure.
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
 * // type: E.EitherRight<"number.positive", number> | E.EitherLeft<"number.notPositive", number>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/left
 * 
 * @namespace E
 * 
 */
export declare function left<GenericInformation extends string, const GenericValue extends unknown = undefined>(information: GenericInformation, value?: GenericValue): EitherLeft<GenericInformation, GenericValue>;
export {};
