import { type CleanObjectEntry } from "../common";
/**
 * Checks an object entry value and narrows the tuple type when the predicate is a type guard.
 * 
 * **Supported call styles:**
 * - Classic predicate: `discriminateEntryValue(entry, predicate)` → narrows the entry type
 * - Curried predicate: `discriminateEntryValue(predicate)` → narrows the entry type
 * 
 * The predicate is applied to the second element of the entry tuple, that is, the value. The input tuple is not mutated.
 * 
 * ```ts
 * const entry = true
 * 	? O.entry("name", "Ada")
 * 	: O.entry("age", 42);
 * 
 * if (O.discriminateEntryValue(entry, isType("string"))) {
 * 	// entry is ["name", string]
 * }
 * 
 * pipe(
 * 	entry,
 * 	when(
 * 		O.discriminateEntryValue(isType("number")),
 * 		(value) => {
 * 			// value is ["age", number]
 * 		},
 * 	),
 * );
 * 
 * O.discriminateEntryValue(
 * 	O.entry("status", "ready"),
 * 	isType("string"),
 * ); // true
 * ```
 * 
 * @remarks
 * - Predicate overloads (type guards) narrow the tuple type
 * - Useful when several entries share the same key shape but carry different value types
 * 
 * @see [`O.entry`](https://utils.duplojs.dev/en/v1/api/object/entry) For creating typed entries
 * @see [`O.discriminateEntryKey`](https://utils.duplojs.dev/en/v1/api/object/discriminateEntryKey) For discriminating by entry key
 * @see https://utils.duplojs.dev/en/v1/api/object/discriminateEntryValue
 * 
 * @namespace O
 * 
 */
export declare function discriminateEntryValue<GenericEntry extends readonly [string, unknown], GenericPredicateEntryValue extends GenericEntry[1]>(thePredicate: (input: GenericEntry[1]) => input is GenericPredicateEntryValue): (entry: GenericEntry) => entry is Extract<CleanObjectEntry<GenericEntry>, [
    string,
    GenericPredicateEntryValue
]>;
export declare function discriminateEntryValue<GenericEntry extends readonly [string, unknown]>(thePredicate: (input: GenericEntry) => boolean): (entry: GenericEntry) => boolean;
export declare function discriminateEntryValue<GenericEntry extends readonly [string, unknown], GenericPredicateEntryValue extends GenericEntry[1]>(entry: GenericEntry, thePredicate: (input: GenericEntry[1]) => input is GenericPredicateEntryValue): entry is Extract<CleanObjectEntry<GenericEntry>, [
    string,
    GenericPredicateEntryValue
]>;
export declare function discriminateEntryValue<GenericEntry extends readonly [string, unknown]>(entry: GenericEntry, thePredicate: (input: GenericEntry) => boolean): boolean;
