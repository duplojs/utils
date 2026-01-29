import { type Kind } from "../../common/kind";
import { type Left } from "./create";
export declare const failKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/fail", unknown>>;
/**
 * @deprecated use failKind
 */
export declare const eitherFailKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/fail", unknown>>;
type _Fail = (Left<"fail", void> & Kind<typeof failKind.definition>);
export interface Fail extends _Fail {
}
/**
 * @deprecated use Fail
 */
export type EitherFail = Fail;
/**
 * Returns an Left<"fail", void>: perfect to signal a failure without carrying extra data.
 * 
 * Signature: `fail()` → returns a value
 * 
 * ```ts
 * const input = 3 as number;
 * 
 * const result = pipe(
 * 	input,
 * 	whenElse(
 * 		N.lessThan(3),
 * 		(value) => pipe(
 * 			value,
 * 			N.add(1),
 * 			E.success,
 * 		),
 * 		E.fail,
 * 	),
 * );
 * 
 * // type: E.Success<number> | E.Fail
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/fail
 * 
 * @namespace E
 * 
 */
export declare function fail(): Fail;
export {};
