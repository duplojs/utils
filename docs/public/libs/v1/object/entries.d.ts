import { type DString } from "..";
import { type AnyValue, type IsEqual, type ObjectEntry, type ObjectKey } from "../common";
import { type SimplifyTopLevel } from "../common/types/simplifyTopLevel";
export type GetEntry<GenericKey extends ObjectKey, GenericValue extends unknown> = GenericValue extends any ? GenericKey extends string | number ? [`${GenericKey}`, GenericValue] : never : never;
export type GetEntries<GenericObject extends object> = GenericObject extends readonly any[] ? [DString.Number, GenericObject[number]][] : IsEqual<GenericObject, object> extends true ? [string, AnyValue][] : ({
    [Prop in keyof GenericObject]-?: GetEntry<Prop, GenericObject[Prop]>;
}[keyof GenericObject]) extends infer InferredResult extends ObjectEntry ? IsEqual<InferredResult, never> extends true ? [] : InferredResult[] : never;
export declare function entries<GenericObject extends object>(object: GenericObject): SimplifyTopLevel<GetEntries<GenericObject>>;
export declare namespace entries {
    var unsafe: <GenericObject extends object>(object: GenericObject) => [string, AnyValue][];
}
