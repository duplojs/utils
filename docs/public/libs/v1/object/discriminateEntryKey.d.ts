import { type CleanObjectEntry } from "../common";
/**
 * Checks an object entry key and narrows the tuple type when the predicate is a type guard.
 * 
 * **Supported call styles:**
 * - Classic predicate: `discriminateEntryKey(entry, predicate)` → narrows the entry type
 * - Curried predicate: `discriminateEntryKey(predicate)` → narrows the entry type
 * 
 * The predicate is applied to the first element of the entry tuple, that is, the key. The input tuple is not mutated.
 * 
 * ```ts
 * const entry = true
 * 	? O.entry("name", "Ada")
 * 	: O.entry("age", 42);
 * 
 * if (O.discriminateEntryKey(entry, (key) => key === "name")) {
 * 	// entry is ["name", string]
 * }
 * 
 * pipe(
 * 	entry,
 * 	when(
 * 		O.discriminateEntryKey((key) => key === "age"),
 * 		(value) => {
 * 			// value is ["age", number]
 * 		},
 * 	),
 * );
 * 
 * O.discriminateEntryKey(
 * 	O.entry("status", "ready"),
 * 	S.startsWith("st"),
 * ); // true
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the tuple type
 * - Useful after `Object.entries(...)` or with tuples built through `O.entry(...)`
 * 
 * @see [`O.entry`](https://utils.duplojs.dev/en/v1/api/object/entry) For creating typed entries
 * @see [`O.discriminateEntryValue`](https://utils.duplojs.dev/en/v1/api/object/discriminateEntryValue) For discriminating by entry value
 * @see https://utils.duplojs.dev/en/v1/api/object/discriminateEntryKey
 * 
 * @namespace O
 * 
 */
export declare function discriminateEntryKey<GenericEntry extends readonly [string, unknown], GenericPredicateEntryKey extends GenericEntry[0]>(thePredicate: (input: GenericEntry[0]) => input is GenericPredicateEntryKey): (entry: GenericEntry) => entry is Extract<CleanObjectEntry<GenericEntry>, [
    GenericPredicateEntryKey,
    unknown
]>;
export declare function discriminateEntryKey<GenericEntry extends readonly [string, unknown]>(thePredicate: (input: GenericEntry) => boolean): (entry: GenericEntry) => boolean;
export declare function discriminateEntryKey<GenericEntry extends readonly [string, unknown], GenericPredicateEntryKey extends GenericEntry[0]>(entry: GenericEntry, thePredicate: (input: GenericEntry[0]) => input is GenericPredicateEntryKey): entry is Extract<CleanObjectEntry<GenericEntry>, [
    GenericPredicateEntryKey,
    unknown
]>;
export declare function discriminateEntryKey<GenericEntry extends readonly [string, unknown]>(entry: GenericEntry, thePredicate: (input: GenericEntry) => boolean): boolean;
