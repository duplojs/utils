import { type Kind } from "../../common/kind";
import { type Right } from "./create";
export declare const okKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/ok", unknown>>;
/**
 * @deprecated use okKind
 */
export declare const eitherOkKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/ok", unknown>>;
type _Ok = (Right<"ok", never> & Kind<typeof okKind.definition>);
export interface Ok extends _Ok {
}
/**
 * @deprecated use Ok
 */
export type EitherOk = Ok;
/**
 * Returns an Right<"ok", never>: an empty success that confirms an operation went fine without extra data.
 * 
 * Signature: `ok()` → returns a value
 * 
 * ```ts
 * const input = "hello@duplo.dev" as string;
 * 
 * const result = pipe(
 * 	input,
 * 	whenElse(
 * 		S.includes("@"),
 * 		E.ok,
 * 		E.fail,
 * 	),
 * );
 * 
 * // type: E.Ok | E.Fail
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/ok
 * 
 * @namespace E
 * 
 */
export declare function ok(): Ok;
export {};
