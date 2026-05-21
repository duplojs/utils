import { type AnyFunction, type CleanObjectEntry } from "@scripts/common";

/**
 * {@include object/discriminateEntryValue/index.md}
 */
export function discriminateEntryValue<
	GenericEntry extends readonly [string, unknown],
	GenericPredicateEntryValue extends GenericEntry[1],
>(
	thePredicate: (input: GenericEntry[1]) => input is GenericPredicateEntryValue,
): (entry: GenericEntry) => entry is Extract<
	CleanObjectEntry<GenericEntry>,
	[string, GenericPredicateEntryValue]
>;

export function discriminateEntryValue<
	GenericEntry extends readonly [string, unknown],
>(
	thePredicate: (input: GenericEntry) => boolean,
): (entry: GenericEntry) => boolean;

export function discriminateEntryValue<
	GenericEntry extends readonly [string, unknown],
	GenericPredicateEntryValue extends GenericEntry[1],
>(
	entry: GenericEntry,
	thePredicate: (input: GenericEntry[1]) => input is GenericPredicateEntryValue,
): entry is Extract<
	CleanObjectEntry<GenericEntry>,
	[string, GenericPredicateEntryValue]
>;

export function discriminateEntryValue<
	GenericEntry extends readonly [string, unknown],
>(
	entry: GenericEntry,
	thePredicate: (input: GenericEntry) => boolean,
): boolean;

export function discriminateEntryValue(
	...args: [[string, unknown], AnyFunction]
		| [AnyFunction]
) {
	if (args.length === 1) {
		const [thePredicate] = args;

		return (entry: any) => discriminateEntryValue(
			entry,
			thePredicate as never,
		);
	}

	const [entry, thePredicate] = args;

	return thePredicate(entry[1]);
}
