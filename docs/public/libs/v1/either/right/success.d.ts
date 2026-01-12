import { type Kind } from "../../common/kind";
import { type EitherRight } from "./create";
export declare const eitherSuccessKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/success", unknown>>;
type _EitherSuccess<GenericValue extends unknown = unknown> = (EitherRight<"success", GenericValue> & Kind<typeof eitherSuccessKind.definition>);
export interface EitherSuccess<GenericValue extends unknown = unknown> extends _EitherSuccess<GenericValue> {
}
/**
 * Readable shortcut to create an EitherRight with the literal info "success". Ideal for functions that return only one type of success.
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
 * // type: E.EitherError<string> | E.EitherSuccess<string>
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/success
 * 
 * @namespace E
 * 
 */
export declare function success<const GenericValue extends unknown>(value: GenericValue): EitherSuccess<GenericValue>;
export {};
