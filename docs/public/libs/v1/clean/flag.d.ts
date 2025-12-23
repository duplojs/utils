import { type Kind, type IsEqual, type Or, type GetKindValue } from "../common";
import { type Entity } from "./entity";
declare const flagHandlerKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/flag-handler", unknown>>;
export declare const flagKind: import("../common").KindHandler<import("../common").KindDefinition<"@DuplojsUtilsClean/flag", Record<string, unknown>>>;
export interface FlagHandler<GenericEntity extends Entity = Entity, GenericName extends string = string, GenericValue extends unknown = never> extends Kind<typeof flagHandlerKind.definition> {
    readonly name: GenericName;
    append<GenericInputEntity extends GenericEntity, GenericInputValue extends GenericValue>(entity: GenericInputEntity, ...args: IsEqual<GenericValue, never> extends true ? [] : [GenericInputValue]): (GenericInputEntity & Flag<GenericName, GenericInputValue>);
    getValue<GenericInputEntity extends GenericEntity & Flag<GenericName, GenericValue>>(entity: GenericInputEntity): GetKindValue<typeof flagKind, GenericInputEntity>[GenericName];
}
export interface Flag<GenericName extends string = string, GenericValue extends unknown = never> extends Kind<typeof flagKind.definition, Record<GenericName, GenericValue>> {
}
export declare function createFlag<GenericEntity extends Entity = never, GenericName extends string = never, GenericValue extends unknown = never>(name: Or<[
    IsEqual<GenericEntity, never>,
    IsEqual<GenericName, never>
]> extends true ? never : NoInfer<GenericName>): FlagHandler<GenericEntity, GenericName, GenericValue>;
export type GetFlag<GenericHandler extends FlagHandler<any, any, any>> = Extract<Flag<GenericHandler["name"], ReturnType<GenericHandler["getValue"]>>, any>;
export {};
