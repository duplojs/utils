/**
 * Compares two strings for sorting.
 * 
 * **Supported call styles:**
 * - Classic: `sortCompare(valueA, valueB)` → returns a number
 * - Curried: `sortCompare(valueB)` → returns a function waiting for valueA
 * 
 * The comparison uses a locale-aware collator.
 * 
 * ```ts
 * S.sortCompare("alpha", "beta"); // -1
 * 
 * pipe(
 * 	"beta",
 * 	S.sortCompare("alpha"),
 * ); // 1
 * 
 * [
 * 	"beta",
 * 	"alpha",
 * 	"gamma",
 * ].sort((left, right) => S.sortCompare(left, right)); // ["alpha", "beta", "gamma"]
 * 
 * ```
 * 
 * @remarks
 * - Uses `Intl.Collator` with locale "en-US-u-kn-true" and sort-specific options
 * 
 * @see https://utils.duplojs.dev/en/v1/api/string/sortCompare
 * 
 * @namespace S
 * 
 */
export declare function sortCompare(valueB: string): (valueA: string) => number;
export declare function sortCompare(valueB: string, valueA: string): number;
