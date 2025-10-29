import { type Kind } from "../../common/kind";
import { type WrappedValue } from "../../common/wrapValue";
import { eitherInformationKind } from "../kind";
export declare const eitherRightKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/right", unknown>>;
type _EitherRight<GenericInformation extends string = string, GenericValue extends unknown = unknown> = (Kind<typeof eitherRightKind.definition> & Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue<GenericValue>);
export interface EitherRight<GenericInformation extends string = string, GenericValue extends unknown = unknown> extends _EitherRight<GenericInformation, GenericValue> {
}
export declare function right<GenericInformation extends string, const GenericValue extends unknown = undefined>(information: GenericInformation, value?: GenericValue): EitherRight<GenericInformation, GenericValue>;
export {};
