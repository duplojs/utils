import { type Kind } from "../../common";
export declare const exitKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/exit", unknown>>;
export interface Exit<GenericValue extends unknown = unknown> extends Kind<typeof exitKind.definition, {
    value: GenericValue;
}> {
}
export declare function createExit<GenericValue extends unknown = undefined>(value?: GenericValue): Exit<GenericValue>;
