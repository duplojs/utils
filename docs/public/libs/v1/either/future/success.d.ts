import { type Kind } from "../../common/kind";
import { futureKind } from "./base";
import { type Right } from "../right";
export declare const futureSuccessKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/future-success", unknown>>;
/**
 * @deprecated use futureSuccessKind
 */
export declare const eitherFutureSuccessKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/future-success", unknown>>;
type _FutureSuccess<GenericValue extends unknown = unknown> = (Right<"future", GenericValue> & Kind<typeof futureKind.definition> & Kind<typeof futureSuccessKind.definition>);
export interface FutureSuccess<GenericValue extends unknown = unknown> extends _FutureSuccess<GenericValue> {
}
/**
 * @deprecated use FutureSuccess
 */
export type EitherFutureSuccess<GenericValue extends unknown = unknown> = FutureSuccess<GenericValue>;
/**
 * Creates a Future resolved with an Right<"future">.
 * 
 * Signature: `futureSuccess(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const future = E.futureSuccess("value");
 * 
 * // type: E.FutureSuccess<"value">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/futureSuccess
 * 
 * @namespace E
 * 
 */
export declare function futureSuccess<const GenericValue extends unknown>(value: GenericValue): FutureSuccess<GenericValue>;
export {};
