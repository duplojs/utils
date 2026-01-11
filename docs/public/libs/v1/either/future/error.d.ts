import { type Kind } from "../../common/kind";
import { type EitherLeft } from "../left";
import { eitherFutureKind } from "./base";
export declare const eitherFutureErrorKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/future-error", unknown>>;
type _EitherFutureError = (EitherLeft<"future", unknown> & Kind<typeof eitherFutureKind.definition> & Kind<typeof eitherFutureErrorKind.definition>);
export interface EitherFutureError extends _EitherFutureError {
}
/**
 * Creates a Future resolved with an EitherLeft<"future">, ideal for propagating a standardized rejection.
 * 
 * Signature: `futureError(value)` → returns a value
 * 
 * The input value is not mutated.
 * 
 * ```ts
 * const future = E.futureError("error");
 * 
 * // type: E.EitherFutureError
 * ```
 * 
 * @see https://utils.duplojs.dev/en/v1/api/either/futureError
 * 
 * @namespace E
 * 
 */
export declare function futureError(value: unknown): EitherFutureError;
export {};
