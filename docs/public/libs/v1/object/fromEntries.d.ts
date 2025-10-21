import { type ObjectEntry, type ObjectKey, type AnyValue, type SimplifyTopLevel } from "../common";
type ComputeEntries<GenericEntry extends ObjectEntry> = SimplifyTopLevel<{
    [Entry in GenericEntry as Entry[0]]?: Entry[1];
}>;
export declare function fromEntries<GenericKey extends ObjectKey, GenericValue extends AnyValue, GenericEntry extends [GenericKey, GenericValue]>(entries: GenericEntry[]): ComputeEntries<GenericEntry>;
export {};
