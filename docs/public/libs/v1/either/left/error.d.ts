import { type Kind } from "../../common/kind";
import { type EitherLeft } from "./create";
export declare const eitherErrorKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/error", unknown>>;
type _EitherError<GenericValue extends unknown = unknown> = (EitherLeft<"error", GenericValue> & Kind<typeof eitherErrorKind.definition>);
export interface EitherError<GenericValue extends unknown = unknown> extends _EitherError<GenericValue> {
}
/**
 * Handy alias to create an EitherLeft with the info fixed to "error". Useful to signal a generic error without manually providing the info.
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
 * // type: E.EitherError<string> | E.EitherSuccess<string>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/error
 * 
 * @namespace E
 * 
 */
export declare function error<const GenericValue extends unknown>(value: GenericValue): EitherError<GenericValue>;
export {};
