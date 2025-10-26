import { type ObjectEntry, type ObjectKey, type AnyValue, type SimplifyTopLevel } from "@scripts/common";

type ComputeEntries<
	GenericEntry extends ObjectEntry,
> = SimplifyTopLevel<{
	[Entry in GenericEntry as Entry[0]]?: Entry[1]
}>;

export function fromEntries<
	GenericKey extends ObjectKey,
	GenericValue extends AnyValue,
	GenericEntry extends readonly [GenericKey, GenericValue],
>(
	entries: readonly GenericEntry[],
): ComputeEntries<GenericEntry> {
	return Object.fromEntries(entries) as never;
}
