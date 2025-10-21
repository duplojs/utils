import { type Or, type IsEqual, type BreakGenericLink } from "./types";
export interface KindHandler<GenericKindDefinition extends KindDefinition> {
    definition: GenericKindDefinition;
    runTimeKey: string;
    has<GenericInput extends unknown>(input: GenericInput): input is Extract<GenericInput, Kind<GenericKindDefinition, GenericKindDefinition["value"]>>;
    addTo<GenericInput extends {}, GenericValue extends GenericKindDefinition["value"] = GenericKindDefinition["value"]>(...args: Or<[
        IsEqual<GenericValue, never>,
        IsEqual<GenericValue, unknown>,
        IsEqual<GenericValue, any>
    ]> extends true ? [input: GenericInput, value?: GenericValue] : [input: GenericInput, value: GenericValue]): Kind<GenericKindDefinition, GenericValue> & BreakGenericLink<GenericInput>;
    getValue<GenericKind extends Kind<GenericKindDefinition, GenericKindDefinition["value"]>>(input: GenericKind): GenericKind[SymbolKind][GenericKindDefinition["name"]];
}
export interface KindDefinition<GenericName extends string = string, GenericValue extends unknown = unknown> {
    name: GenericName;
    value: GenericValue;
}
declare const SymbolKind: unique symbol;
type SymbolKind = typeof SymbolKind;
export interface Kind<GenericKindDefinition extends KindDefinition, GenericValue extends KindDefinition["value"] = KindDefinition["value"]> {
    [SymbolKind]: {
        [Prop in GenericKindDefinition["name"]]: GenericValue;
    };
}
export declare const keyKindPrefix = "@duplojs/utils/value/kind/";
export declare function createKind<GenericName extends string, GenericKindValue extends unknown = unknown>(name: GenericName): KindHandler<KindDefinition<GenericName, GenericKindValue>>;
export {};
