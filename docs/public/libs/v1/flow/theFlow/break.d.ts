import { type Kind } from "../../common";
export declare const breakKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/break", unknown>>;
export interface Break<GenericValue extends unknown = unknown> extends Kind<typeof breakKind.definition, {
    value: GenericValue;
}> {
}
export declare function createBreak<GenericValue extends unknown = undefined>(value?: GenericValue): Break<GenericValue>;
