import { type Kind } from "../../common/kind";
import { type EitherLeft } from "./create";
export declare const eitherFailKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/fail", unknown>>;
type _EitherFail = (EitherLeft<"fail", never> & Kind<typeof eitherFailKind.definition>);
export interface EitherFail extends _EitherFail {
}
/**
 * Returns an EitherLeft<"fail", never>: perfect to signal a failure without carrying extra data.
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
 * // type: E.EitherSuccess<number> | E.EitherFail
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/fail
 * 
 * @namespace E
 * 
 */
export declare function fail(): EitherFail;
export {};
