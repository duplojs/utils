import { type GetPropsWithValueExtends } from "../object";
import { type Adaptor, type AnyFunction } from "./types";
import { type Kind, type GetKindValue } from "./kind";
import { type WrappedValue } from "./wrapValue";
declare const SymbolBuilderStore: unique symbol;
declare module "./globalStore" {
    interface GlobalStore {
        [SymbolBuilderStore]: Record<string, Record<string, Parameters<BuilderHandler["set"]>[1]>>;
    }
}
export declare const builderKind: import("./kind").KindHandler<import("./kind").KindDefinition<"@DuplojsUtilsBuilder/base", object>>;
export interface Builder<GenericAccumulator extends object = object> extends Kind<typeof builderKind.definition, GenericAccumulator> {
}
declare const builderNextKind: import("./kind").KindHandler<import("./kind").KindDefinition<"@DuplojsUtilsBuilder/next", unknown>>;
interface BuilderNext<GenericValue extends object = object> extends WrappedValue<GenericValue>, Kind<typeof builderNextKind.definition> {
}
export interface BuilderHandlerSetFunctionParams<GenericArgs extends unknown[], GenericValue extends object> {
    args: GenericArgs;
    accumulator: GenericValue;
    next(newAccumulator: GenericValue): BuilderNext<GenericValue>;
}
export interface BuilderHandler<GenericBuilder extends Builder = Builder> {
    set<GenericMethodName extends GetPropsWithValueExtends<GenericBuilder, AnyFunction>, GenericMethod extends Adaptor<GenericBuilder[GenericMethodName], AnyFunction>>(method: GenericMethodName, theFunction: (params: BuilderHandlerSetFunctionParams<Parameters<GenericMethod>, GetKindValue<typeof builderKind, GenericBuilder>>) => ReturnType<GenericMethod> extends GenericBuilder ? BuilderNext<GetKindValue<typeof builderKind, GenericBuilder>> : ReturnType<GenericMethod>): BuilderHandler<GenericBuilder>;
    use<GenericCurrentBuilder extends GenericBuilder>(accumulator: GetKindValue<typeof builderKind, GenericBuilder>): GenericCurrentBuilder;
}
declare const kind = "kind-missing-builder-methods-error";
export declare class MissingBuilderMethodsError extends Error {
    method: string;
    constructor(method: string);
    [kind]: unknown;
    static instanceof(value: unknown): value is MissingBuilderMethodsError;
}
export declare function createBuilder<GenericBuilder extends Builder>(builderName: string): BuilderHandler<GenericBuilder>;
export {};
