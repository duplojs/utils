import { type GetPropsWithValueExtends } from "../object";
import { type IsEqual, type Adaptor, type AnyFunction, type ObjectKey } from "./types";
import { type Kind, type GetKindValue } from "./kind";
import { type WrappedValue } from "./wrapValue";
declare const SymbolBuilderStore: unique symbol;
declare module "./globalStore" {
    interface GlobalStore {
        [SymbolBuilderStore]: Record<string, Record<string, Parameters<BuilderHandler["set"]>[1]>>;
    }
}
export declare const builderKind: import("./kind").KindHandler<import("./kind").KindDefinition<"@DuplojsUtilsBuilder/base", object>>;
export interface Builder<GenericAccumulator extends object = object, GenericIdentifier extends ObjectKey = never> extends Kind<typeof builderKind.definition, GenericAccumulator> {
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
    set<GenericMethodName extends GetPropsWithValueExtends<GenericBuilder, AnyFunction>, GenericMethod extends Adaptor<GenericBuilder[GenericMethodName], AnyFunction>>(method: GenericMethodName, theFunction: (params: BuilderHandlerSetFunctionParams<Parameters<GenericMethod>, GetKindValue<typeof builderKind, GenericBuilder>>) => IsEqual<keyof ReturnType<GenericMethod>, keyof GenericBuilder> extends true ? BuilderNext<GetKindValue<typeof builderKind, GenericBuilder>> : ReturnType<GenericMethod>): BuilderHandler<GenericBuilder>;
    use<GenericCurrentBuilder extends GenericBuilder>(accumulator: GetKindValue<typeof builderKind, GenericBuilder>): GenericCurrentBuilder;
}
declare const MissingBuilderMethodsError_base: new (params: {
    "@DuplojsUtilsError/missing-builder-methods-error"?: unknown;
}, parentParams: [message?: string | undefined, options?: ErrorOptions | undefined]) => Error & Kind<import("./kind").KindDefinition<"@DuplojsUtilsError/missing-builder-methods-error", unknown>, unknown> & Kind<import("./kind").KindDefinition<"missing-builder-methods-error", unknown>, unknown>;
export declare class MissingBuilderMethodsError extends MissingBuilderMethodsError_base {
    method: string;
    constructor(method: string);
}
export declare function createBuilder<GenericBuilder extends Builder>(builderName: string): BuilderHandler<GenericBuilder>;
export {};
