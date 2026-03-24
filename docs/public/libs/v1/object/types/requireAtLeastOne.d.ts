import { type IsEqual } from "../../common";
declare const SymbolRequireAtLeastOneError: unique symbol;
declare const SymbolOneOf: unique symbol;
export type RequireAtLeastOne<GenericObject extends object, GenericKeys extends keyof GenericObject = keyof GenericObject> = IsEqual<Extract<keyof GenericObject, GenericKeys>, never> extends true ? {
    [SymbolRequireAtLeastOneError]: "requires at least one key.";
    [SymbolOneOf]: `key: ${Extract<GenericKeys, string>}`;
} : unknown;
export {};
