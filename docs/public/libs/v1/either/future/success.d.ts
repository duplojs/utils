import { type Kind } from "../../common/kind";
import { eitherFutureKind } from "./base";
import { type EitherRight } from "../right";
export declare const eitherFutureSuccessKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/future-success", unknown>>;
type _EitherFutureSuccess<GenericValue extends unknown = unknown> = (EitherRight<"future", GenericValue> & Kind<typeof eitherFutureKind.definition> & Kind<typeof eitherFutureSuccessKind.definition>);
export interface EitherFutureSuccess<GenericValue extends unknown = unknown> extends _EitherFutureSuccess<GenericValue> {
}
/**
 * Creates a Future resolved with an EitherRight<"future">.
 * 
 * Signature: `futureSuccess(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const future = E.futureSuccess("value");
 * 
 * // type: E.EitherFutureSuccess<"value">
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/futureSuccess
 * 
 * @namespace E
 * 
 */
export declare function futureSuccess<const GenericValue extends unknown>(value: GenericValue): EitherFutureSuccess<GenericValue>;
export {};
