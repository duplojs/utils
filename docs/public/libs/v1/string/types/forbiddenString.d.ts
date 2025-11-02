import { type IsEqual } from "../../common";
import { type Includes } from "../../string";
declare const SymbolErrorForbiddenString: unique symbol;
export type ForbiddenString<GenericValue extends string, GenericCharacters extends string> = IsEqual<(GenericCharacters extends string ? Includes<GenericValue, GenericCharacters> : never) | false, boolean> extends true ? {
    [SymbolErrorForbiddenString]: `String "${GenericCharacters}" is forbidden in value.`;
} : GenericValue;
export {};
