import { type AnyValue, type SimplifyTopLevel } from "@scripts/common";
import { type ObjectKey, type ObjectEntry } from "./types";

type ComputeEntries<
	GenericEntry extends ObjectEntry,
> = SimplifyTopLevel<{
	[Entry in GenericEntry as Entry[0]]?: Entry[1]
}>;

export function fromEntries<
	GenericKey extends ObjectKey,
	GenericValue extends AnyValue,
	GenericEntry extends [GenericKey, GenericValue],
>(
	entries: GenericEntry[],
): ComputeEntries<GenericEntry> {
	return Object.fromEntries(entries) as never;
}
