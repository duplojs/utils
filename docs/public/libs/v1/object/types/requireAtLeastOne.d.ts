import { type IsEqual } from "../../common";
declare const SymbolRequireAtLeastOneError: unique symbol;
export type RequireAtLeastOne<GenericObject extends object, GenericKeys extends keyof GenericObject = keyof GenericObject> = IsEqual<Extract<keyof GenericObject, GenericKeys>, never> extends true ? {
    [SymbolRequireAtLeastOneError]: "requires at least one key.";
    oneOf: GenericKeys;
} : unknown;
export {};
