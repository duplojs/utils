import { type ObjectEntry, type ObjectKey, type SimplifyTopLevel, type UnionContain } from "../common";
type ComputeEntries<GenericEntry extends ObjectEntry> = UnionContain<ObjectKey, GenericEntry[0]> extends true ? SimplifyTopLevel<{
    [Entry in GenericEntry as Entry[0]]: Entry[1];
}> : SimplifyTopLevel<{
    [Entry in GenericEntry as Entry[0]]?: Entry[1];
}>;
/**
 * Creates an object from entries.
 * 
 * Signature: `fromEntries(entries)` → returns an object
 * 
 * The input array is not mutated.
 * 
 * ```ts
 * O.fromEntries(
 * 	[
 * 		[
 * 			"name",
 * 			"Ada",
 * 		],
 * 		[
 * 			"age",
 * 			36,
 * 		],
 * 	],
 * ); // { name: "Ada", age: 36 }
 * 
 * O.fromEntries(
 * 	[
 * 		[
 * 			"active",
 * 			true,
 * 		],
 * 	],
 * ); // { active: true }
 * ```
 * 
 * @remarks
 * - Uses the same semantics as [`Object.fromEntries`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries)
 * 
 * @see https://utils.duplojs.dev/en/v1/api/object/fromEntries
 * 
 * @namespace O
 * 
 */
export declare function fromEntries<GenericKey extends ObjectKey, const GenericEntry extends readonly [GenericKey, unknown]>(entries: Iterable<GenericEntry>): ComputeEntries<GenericEntry>;
export {};
