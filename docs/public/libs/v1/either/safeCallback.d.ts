import { type Kind } from "../common";
import { type EitherLeft } from "./left";
export declare const eitherCallbackErrorKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsEither/callback-error", unknown>>;
type _EitherCallbackError = (EitherLeft<"callback", unknown> & Kind<typeof eitherCallbackErrorKind.definition>);
export interface EitherCallbackError extends _EitherCallbackError {
}
export declare function callbackError(value: unknown): EitherCallbackError;
export declare function safeCallback<GenericOutput extends unknown>(theFunction: () => GenericOutput): GenericOutput | EitherCallbackError;
export {};
