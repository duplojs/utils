import { type Kind } from "../../common/kind";
import { type Left } from "../left";
import { futureKind } from "./base";
export declare const futureErrorKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/future-error", unknown>>;
/**
 * @deprecated use futureErrorKind
 */
export declare const eitherFutureErrorKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/future-error", unknown>>;
type _FutureError = (Left<"future", unknown> & Kind<typeof futureKind.definition> & Kind<typeof futureErrorKind.definition>);
export interface FutureError extends _FutureError {
}
/**
 * @deprecated use FutureError
 */
export type EitherFutureError = FutureError;
/**
 * Creates a Future resolved with an Left<"future">, ideal for propagating a standardized rejection.
 * 
 * Signature: `futureError(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const future = E.futureError("error");
 * 
 * // type: E.FutureError
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/futureError
 * 
 * @namespace E
 * 
 */
export declare function futureError(value: unknown): FutureError;
export {};
