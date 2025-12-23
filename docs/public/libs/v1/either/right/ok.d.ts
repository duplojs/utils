import { type Kind } from "../../common/kind";
import { type EitherRight } from "./create";
export declare const eitherOkKind: import("../../common/kind").KindHandler<import("../../common/kind").KindDefinition<"@DuplojsUtilsEither/ok", unknown>>;
type _EitherOk = (EitherRight<"ok", never> & Kind<typeof eitherOkKind.definition>);
export interface EitherOk extends _EitherOk {
}
export declare function ok(): EitherOk;
export {};
