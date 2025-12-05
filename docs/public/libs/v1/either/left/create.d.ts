import { type Kind } from "../../common/kind";
import { type WrappedValue } from "../../common/wrapValue";
import { eitherInformationKind } from "../kind";
export declare const eitherLeftKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/left", unknown>>;
type _EitherLeft<GenericInformation extends string = string, GenericValue extends unknown = unknown> = (Kind<typeof eitherLeftKind.definition> & Kind<typeof eitherInformationKind.definition, GenericInformation> & WrappedValue<GenericValue>);
export interface EitherLeft<GenericInformation extends string = string, GenericValue extends unknown = unknown> extends _EitherLeft<GenericInformation, GenericValue> {
}
export declare function left<GenericInformation extends string, const GenericValue extends unknown = undefined>(information: GenericInformation, value?: GenericValue): EitherLeft<GenericInformation, GenericValue>;
export {};
