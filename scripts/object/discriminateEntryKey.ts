import { type AnyFunction, type CleanObjectEntry } from "@scripts/common";

/**
 * {@include object/discriminateEntryKey/index.md}
 */
export function discriminateEntryKey<
	GenericEntry extends readonly [string, unknown],
	GenericPredicateEntryKey extends GenericEntry[0],
>(
	thePredicate: (input: GenericEntry[0]) => input is GenericPredicateEntryKey,
): (entry: GenericEntry) => entry is Extract<
	CleanObjectEntry<GenericEntry>,
	[GenericPredicateEntryKey, unknown]
>;

export function discriminateEntryKey<
	GenericEntry extends readonly [string, unknown],
>(
	thePredicate: (input: GenericEntry) => boolean,
): (entry: GenericEntry) => boolean;

export function discriminateEntryKey<
	GenericEntry extends readonly [string, unknown],
	GenericPredicateEntryKey extends GenericEntry[0],
>(
	entry: GenericEntry,
	thePredicate: (input: GenericEntry[0]) => input is GenericPredicateEntryKey,
): entry is Extract<
	CleanObjectEntry<GenericEntry>,
	[GenericPredicateEntryKey, unknown]
>;

export function discriminateEntryKey<
	GenericEntry extends readonly [string, unknown],
>(
	entry: GenericEntry,
	thePredicate: (input: GenericEntry) => boolean,
): boolean;

export function discriminateEntryKey(
	...args: [[string, unknown], AnyFunction]
		| [AnyFunction]
) {
	if (args.length === 1) {
		const [thePredicate] = args;

		return (entry: any) => discriminateEntryKey(
			entry,
			thePredicate as never,
		);
	}

	const [entry, thePredicate] = args;

	return thePredicate(entry[0]);
}
