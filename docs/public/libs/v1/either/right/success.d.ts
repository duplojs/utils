import { type Kind } from "../../common/kind";
import { type EitherRight } from "./create";
export declare const eitherSuccessKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/success", unknown>>;
type _EitherSuccess<GenericValue extends unknown = unknown> = (EitherRight<"success", GenericValue> & Kind<typeof eitherSuccessKind.definition>);
export interface EitherSuccess<GenericValue extends unknown = unknown> extends _EitherSuccess<GenericValue> {
}
export declare function success<const GenericValue extends unknown>(value: GenericValue): EitherSuccess<GenericValue>;
export {};
