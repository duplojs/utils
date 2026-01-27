import { type Kind } from "../../common/kind";
import { type Left } from "./create";
export declare const errorKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/error", unknown>>;
/**
 * @deprecated use errorKind
 */
export declare const eitherErrorKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/error", unknown>>;
type _Error<GenericValue extends unknown = unknown> = (Left<"error", GenericValue> & Kind<typeof errorKind.definition>);
export interface Error<GenericValue extends unknown = unknown> extends _Error<GenericValue> {
}
/**
 * @deprecated use Error
 */
export type EitherError<GenericValue extends unknown = unknown> = Error<GenericValue>;
/**
 * Handy alias to create an Left with the info fixed to "error". Useful to signal a generic error without manually providing the info.
 * 
 * Signature: `error(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const input = "  duplo  ";
 * 
 * const result = pipe(
 * 	input,
 * 	S.trim,
 * 	whenElse(
 * 		(value) => equal(S.length(value), 0),
 * 		E.error,
 * 		E.success,
 * 	),
 * );
 * 
 * // type: E.Error<string> | E.Success<string>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/error
 * 
 * @namespace E
 * 
 */
export declare function error<const GenericValue extends unknown>(value: GenericValue): Error<GenericValue>;
export {};
