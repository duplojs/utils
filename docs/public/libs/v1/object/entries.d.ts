import { type DString } from "..";
import { type AnyValue, type IsEqual, type ObjectEntry, type ObjectKey } from "../common";
import { type SimplifyTopLevel } from "../common/types/simplifyTopLevel";
export type GetEntry<GenericKey extends ObjectKey, GenericValue extends unknown> = GenericValue extends any ? GenericKey extends string | number ? [`${GenericKey}`, GenericValue] : never : never;
export type GetEntries<GenericObject extends object> = GenericObject extends readonly any[] ? [DString.Number, GenericObject[number]][] : IsEqual<GenericObject, object> extends true ? [string, AnyValue][] : ({
    [Prop in keyof GenericObject]-?: GetEntry<Prop, GenericObject[Prop]>;
}[keyof GenericObject]) extends infer InferredResult extends ObjectEntry ? IsEqual<InferredResult, never> extends true ? [] : InferredResult[] : never;
/**
 * Returns object entries as key-value pairs.
 * 
 * Signature: `entries(object)` → returns entries
 * 
 * The input object is not mutated.
 * 
 * @example
 * ```ts
 * O.entries(
 * 	{
 * 		name: "Ada",
 * 		age: 36,
 * 	},
 * ); // [["name", "Ada"], ["age", 36]]
 * 
 * O.entries(
 * 	{
 * 		active: true,
 * 	},
 * ); // [["active", true]]
 * ```
 * 
 * @remarks
 * - Filters runtime keys used by the library
 * - Uses the same semantics as [`Object.entries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/object/entries
 * 
 * @namespace O
 * 
 */
export declare function entries<GenericObject extends object>(object: GenericObject): SimplifyTopLevel<GetEntries<GenericObject>>;
export declare namespace entries {
    var unsafe: <GenericObject extends object>(object: GenericObject) => [string, AnyValue][];
}
