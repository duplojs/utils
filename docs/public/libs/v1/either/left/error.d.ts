import { type Kind } from "../../common/kind";
import { type EitherLeft } from "./create";
export declare const eitherErrorKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"either-error", unknown>>;
type _EitherError<GenericValue extends unknown = unknown> = (EitherLeft<"error", GenericValue> & Kind<typeof eitherErrorKind.definition>);
export interface EitherError<GenericValue extends unknown = unknown> extends _EitherError<GenericValue> {
}
export declare function error<const GenericValue extends unknown>(value: GenericValue): EitherError<GenericValue>;
export {};
