import { type AnyFunction, type Kind } from "../../common";
export declare const deferKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/defer", AnyFunction<[], unknown>>>;
export interface Defer<GenericValue extends unknown = unknown> extends Kind<typeof deferKind.definition, () => GenericValue> {
}
export declare function createDefer<GenericOutput extends unknown>(value: () => GenericOutput): Defer<GenericOutput>;
