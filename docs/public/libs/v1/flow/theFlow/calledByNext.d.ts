import { type AnyFunction, type Kind } from "../../common";
export declare const calledByNextKind: import("../../common").KindHandler<import("../../common").KindDefinition<"@DuplojsUtilsFlow/called-by-next", AnyFunction<[], unknown>>>;
export interface CalledByNext<GenericValue extends unknown = unknown> extends Kind<typeof calledByNextKind.definition, () => GenericValue> {
}
export declare function createCalledByNext<GenericOutput extends unknown>(value: () => GenericOutput): CalledByNext<GenericOutput>;
