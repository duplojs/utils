import { type Kind } from "../../common";
export declare const stepKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/step", string>>;
export interface Step<GenericName extends string = string> extends Kind<typeof stepKind.definition, GenericName> {
}
export declare function createStep<GenericName extends string>(name: GenericName): Step<GenericName>;
