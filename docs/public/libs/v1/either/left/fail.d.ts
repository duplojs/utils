import { type Kind } from "../../common/kind";
import { type EitherLeft } from "./create";
export declare const eitherFailKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/fail", unknown>>;
type _EitherFail = (EitherLeft<"fail", never> & Kind<typeof eitherFailKind.definition>);
export interface EitherFail extends _EitherFail {
}
export declare function fail(): EitherFail;
export {};
