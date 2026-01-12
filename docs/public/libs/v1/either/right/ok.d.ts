import { type Kind } from "../../common/kind";
import { type EitherRight } from "./create";
export declare const eitherOkKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/ok", unknown>>;
type _EitherOk = (EitherRight<"ok", never> & Kind<typeof eitherOkKind.definition>);
export interface EitherOk extends _EitherOk {
}
/**
 * Returns an EitherRight<"ok", never>: an empty success that confirms an operation went fine without extra data.
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
 * // type: E.EitherOk | E.EitherFail
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/ok
 * 
 * @namespace E
 * 
 */
export declare function ok(): EitherOk;
export {};
