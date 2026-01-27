import { type Kind } from "../../common/kind";
import { type Right } from "./create";
export declare const successKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/success", unknown>>;
/**
 * @deprecated use successKind
 */
export declare const eitherSuccessKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/success", unknown>>;
type _Success<GenericValue extends unknown = unknown> = (Right<"success", GenericValue> & Kind<typeof successKind.definition>);
export interface Success<GenericValue extends unknown = unknown> extends _Success<GenericValue> {
}
/**
 * @deprecated use Success
 */
export type EitherSuccess<GenericValue extends unknown = unknown> = Success<GenericValue>;
/**
 * Readable shortcut to create an Right with the literal info "success". Ideal for functions that return only one type of success.
 * 
 * Signature: `success(value)` → returns a value
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
 * @see https://utils.duplojs.dev/en/v1/api/either/success
 * 
 * @namespace E
 * 
 */
export declare function success<const GenericValue extends unknown>(value: GenericValue): Success<GenericValue>;
export {};
