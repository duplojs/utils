import { type ObjectEntry, type ObjectKey, type SimplifyTopLevel, type UnionContain } from "../common";
type ComputeEntries<GenericEntry extends ObjectEntry> = UnionContain<ObjectKey, GenericEntry[0]> extends true ? SimplifyTopLevel<{
    [Entry in GenericEntry as Entry[0]]: Entry[1];
}> : SimplifyTopLevel<{
    [Entry in GenericEntry as Entry[0]]?: Entry[1];
}>;
export declare function fromEntries<GenericKey extends ObjectKey, const GenericEntry extends readonly [GenericKey, unknown]>(entries: readonly GenericEntry[]): ComputeEntries<GenericEntry>;
export {};
