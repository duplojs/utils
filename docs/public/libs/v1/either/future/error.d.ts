import { type Kind } from "../../common/kind";
import { type EitherLeft } from "../left";
import { eitherFutureKind } from "./base";
export declare const eitherFutureErrorKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/future-error", unknown>>;
type _EitherFutureError = (EitherLeft<"future", unknown> & Kind<typeof eitherFutureKind.definition> & Kind<typeof eitherFutureErrorKind.definition>);
export interface EitherFutureError extends _EitherFutureError {
}
export declare function futureError(value: unknown): EitherFutureError;
export {};
