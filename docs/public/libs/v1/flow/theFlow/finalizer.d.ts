import { type AnyFunction, type Kind } from "../../common";
export declare const finalizerKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/finalizer", AnyFunction<[], unknown>>>;
export interface Finalizer<GenericValue extends unknown = unknown> extends Kind<typeof finalizerKind.definition, () => GenericValue> {
}
export declare function createFinalizer<GenericOutput extends unknown>(value: () => GenericOutput): Finalizer<GenericOutput>;
